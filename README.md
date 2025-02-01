# A map of locations where you can walk or bike to a Heavy or Light Rail station in Sydney
Access the webmap here: https://bishbash21.github.io <br>
<br>
Tools used: QGIS v34, graphhopper v10.2, OpenStreetMaps, Overpass Turbo, and python.<br>
This guide was very helpful https://gispocoding.github.io/how_to_create_isochrones/<br>
<br>
The parameters used can be found in config_example.yml<br>
<br>
For walking: <br>
If the average_slope is >= 15%, the speed is limited to 1.5 km/h <br>
If the average_slope is >=  7% the speed is limited to 2.5 km/h <br>
If the average_slope is >=  4% the default speed (5km/h) is multiplied by 0.85 <br>
If the average_slope is <= -4% the default speed (5km/h) is multiplied by 1.05 <br>
<br>
For biking: <br>
If the average_slope is >= 15%, the speed is limited to 3 km/h <br>
If the average_slope is >= 12%, the speed is limited to 6 km/h <br>
If the average_slope is >= 8%, the default speed (18km/h) is multiplied by 0.80 <br>
If the average_slope is >= 4%, the default speed (18km/h) is multiplied by 0.90 <br>
If the average_slope is <= -4%, the default speed (18km/h) is multiplied by 1.10 <br>
<br>
How to create a similar map: <br>
Install QGIS. <br>
Install graphhopper by cloning the graphhopper github repositry to a folder on your computer. E.g., ```git clone https://github.com/graphhopper/graphhopper```. You will also need to  download the latest .jar file which is found in releases on the github repositry, or you can follow the instructions to install it via Docker, however Docker is more complicated.<br>
<br>
To get map data for Australia, download this file https://download.geofabrik.de/australia-oceania/american-oceania-latest.osm.pbf. <br>
<br>
I edited the config_example.yml file to enable elevation data and adjust routing paramaters, and a copy of that file can be found in this github repository. <br>
I used the Openstreetmaps base layer in QGIS, which can be found in the browser under xyz tiles. <br>
<br>
To find the points of which to generate the isochrones from, I used overpass turbo. When using the ({{bbox}}) term, overpass turbo only returns results within what your window is displaying. The queries I used to return heavy & light rail platform entrances, and Manly -> Circular Quay ferry wharves is in the overpass_turbo_queries.txt in this repository. <br>
<br>
Once overpass turbo returns a result, export it as a .geojson file. <br>
<br>
Once you have the points, and graphhopper is running locally on port 8989 (it uses 8989 by default), I recommend creating a python virtual environment and installing the dependencies required to avoid dependency conflicts. <br>
A virtual environment can be created by the command ```python3 -m venv name_of_virtual_env``` and it can be activate by browsing into the ./name_of_virtual_env/bin folder and running ```source activate```. <br> 
Run ```pip install requests shapely```. <br>
<br>
Then you can run the isochrone_generator.py script like so: <br>
```python isochrone_generator.py profile input_points.geojson output_isochrones.geojson```. <br>
<br>
Import the output_isochrone.geojson file into QGIS and the isochrones will appear. 
