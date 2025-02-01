# Run command like: python3 isochrone_generator.py profile input_points.geojson output_isochrones.geojson
# Where profile is substituted for the travel type e.g., foot or bike.
import argparse
import json
import requests
from shapely.geometry import shape, Polygon, MultiPolygon
from shapely.ops import unary_union

# GraphHopper API URL
# Assumes your graphhopper installation is located at localhost:8989
GRAPH_HOPPER_URL = "http://localhost:8989/isochrone"

def load_geojson(file_path):
    # Load GeoJSON file and extract point coordinates
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    points = []
    for feature in data["features"]:
        coords = feature["geometry"]["coordinates"]
        points.append((coords[1], coords[0]))  # Convert [lon, lat] → (lat, lon)
    
    return points

def fetch_isochrone(lat, lon, profile):
    # Send API request to GraphHopper for isochrones
    params = {
        "point": f"{lat},{lon}",
        "profile": profile,
        "time_limit": "600",  # 10 minutes (600 seconds)
        "reverse_flow": "true"  # Reverse flow is enabled
    }

    response = requests.get(GRAPH_HOPPER_URL, params=params)

    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error for ({lat}, {lon}): {response.status_code} - {response.text}")
        return None

def convert_to_shapely(isochrone_data):
    # Convert API response polygons to Shapely geometries
    polygons = []
    if isochrone_data and "polygons" in isochrone_data:
        for polygon in isochrone_data["polygons"]:
            shapely_polygon = shape(polygon["geometry"])
            if isinstance(shapely_polygon, Polygon):
                polygons.append(shapely_polygon)
            elif isinstance(shapely_polygon, MultiPolygon):
                polygons.extend(list(shapely_polygon))
    
    return polygons

def merge_polygons(polygons):
    # Merge overlapping polygons while keeping separate groups distinct 
    if not polygons:
        return []

    merged = unary_union(polygons)

    # Ensure MultiPolygon is preserved if there are separate regions
    if isinstance(merged, Polygon):
        return [merged]
    elif isinstance(merged, MultiPolygon):
        return list(merged.geoms)
    return []

def save_geojson(polygons, output_path):
    # Save the merged polygons as a QGIS-compatible GeoJSON file 
    features = []
    for i, poly in enumerate(polygons):
        features.append({
            "type": "Feature",
            "geometry": json.loads(json.dumps(poly.__geo_interface__)),  # Convert to GeoJSON format
            "properties": { "group_id": 1 }  # Assign a common attribute for merging
        })

    geojson_output = {
        "type": "FeatureCollection",
        "features": features
    }

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(geojson_output, f, indent=2)
    
    print(f"Saved: {output_path}")

def main():
    parser = argparse.ArgumentParser(description="Generate merged isochrones for multiple points.")
    parser.add_argument("profile", help="Travel profile (e.g., foot, car, bike)")
    parser.add_argument("input_file", help="Path to the input GeoJSON file")
    parser.add_argument("output_file", help="Path to save the output GeoJSON file")

    args = parser.parse_args()

    # Load points from the input GeoJSON file
    points = load_geojson(args.input_file)
    print(f"Loaded {len(points)} points from {args.input_file}")

    all_polygons = []
    
    # Fetch and process isochrones
    for lat, lon in points:
        print(f"Fetching reverse isochrone for ({lat}, {lon})...")
        isochrone_data = fetch_isochrone(lat, lon, args.profile)
        new_polygons = convert_to_shapely(isochrone_data)
        all_polygons.extend(new_polygons)

    # Merge overlapping polygons
    merged_polygons = merge_polygons(all_polygons)

    # Save merged result to GeoJSON
    save_geojson(merged_polygons, args.output_file)

if __name__ == "__main__":
    main()