# A map of areas where you can walk or bike within 10 minutes to heavy & light rail stations, ferry wharves, and bus stops in Sydney
**Access the map here: https://bishbash21.github.io**<br>
<br>
## Public transport stops used:<br>
### Heavy Rail:<br>
The heavy rail stations used are the stations on the Sydney Trains suburban network and Sydney Metro network. Sydney Trains suburban stations extend from Waterfall in the South, Berowa in the North, Emu Plains in the West, and Macarthur in the South West.  <br>
<br>
### Light Rail:<br>
The light rail stations used include all stops on the L1, L2, L3, and L4.<br>
<br>
### Ferries:<br>
The only ferry route frequent enough (10 minutes service frequency) to be included in this map was the Manly -> Circular Quay ferry.<br>
<br>
### Buses:<br>
All Bus Routes used are part of the All Day Frequent Network (ADFN), which is a network of buses with 10 minute service frequencies or better during the day, 7 days a week. <br>
If there are any other bus services which are part of the ADFN and meet the criteria above, let me know.
The bus routes which fullfill these requirements, and were subsequently included in this map are: <br>
<br>
Northern Beaches:<br>
* B1: Mona Vale -> City Wynyard<br>
* 100: Taronga Zoo -> City QVB<br>
* 144: Manly -> Chatswood<br>
* 160X: Dee Why -> Chatswood<br>
* 199: Palm Beach -> Manly<br>
<br>
Eastern & South Eastern:<br>
<br>
* 304: Zetland -> City Circular Quay<br>
* 309: Matraville -> Redfern via Botany Road<br>
* 333: North Bondi -> City Circular Quay<br>
* 343: Kingsford -> City Circular Quay<br>
* 350: Domestic Terminal -> Bondi Jn<br>
* 370: Glebe Point -> Coogee<br>
* 373: Coogee -> City Museum<br>
* 379: Bronte -> North Bondi<br>
* 390X: La Perouse -> Bondi Junction<br>
* 392: Matraville -> Redfern via Bunnerong Road<br>
* 396: Maroubra Beach -> City Circular Quay<br>
<br>
North West:<br>
<br>
* 120: Chatswood -> City QVB<br>
* 500x: West Ryde -> City Hyde Park<br>
<br>
The Hills District:<br>
<br>
* 610X: Castle Hill -> City QVB<br>
<br>
Inner West:<br>
<br>
* 438X: Abbotsford -> City Martin Place<br>
* 433: Balmain Gladstone Park -> Central<br>
* 442: Balmain East Wharf -> City QVB<br>
* 526: Strathfield -> Rhodes<br>
<br>
## Graphhopper parameters:<br>
The exact server parameters used can be found in config_example.yml<br>
<br>
For walking: <br>
If the average_slope is >= 18%, the speed is limited to 2 km/h <br>
If the average_slope is >= 15%, the speed is limited to 2.5 km/h <br>
If the average_slope is >= 12% the speed is limited to 3 km/h <br>
If the average_slope is >= 9%, the speed is limited to 4 km/h <br>
If the average_slope is >= 6% the speed is limited to 4.5 km/h<br>
If the average_slope is >= 3%, the speed is limited to 5.25 km/h <br>
If the average_slope is >= 0%, the speed is limited to 5.5 km/h <br>
If the average_slope is <= -3% the speed is limited to 5.75 km/h <br>
<br>
For biking: <br>
If the average_slope is >= 15%, the speed is limited to 3 km/h <br>
If the average_slope is >= 12%, the speed is limited to 8 km/h <br>
If the average_slope is >= 9%, the speed is limited to 14 km/h <br>
If the average_slope is >= 6%, the speed is limited to 16 km/h <br>
If the average_slope is >= 3%, the speed is limited to 18 km/h <br>
If the average_slope is >= 0%, the speed is limited to 20 km/h <br>
If the average_slope is <= -3%, the speed is limited to 24 km/h <br>
<br>
## How to create a similar map: <br>
<br>
Tools used: QGIS v34, graphhopper v10.2, OpenStreetMaps, Overpass Turbo, and python.<br>
This guide was very helpful https://gispocoding.github.io/how_to_create_isochrones/<br>
Install QGIS. <br>
Install graphhopper by cloning the graphhopper github repositry to a folder on your computer. E.g., ```git clone https://github.com/graphhopper/graphhopper```. You will also need to  download the latest .jar file which is found in releases on the github repositry, or you can follow the instructions to install it via Docker, however Docker is more complicated.<br>
<br>
To get map data for Australia, download this file https://download.geofabrik.de/australia-oceania/american-oceania-latest.osm.pbf. <br>
<br>
I edited the config_example.yml file to enable elevation data and adjust routing paramaters, and a copy of that file can be found in this github repository. <br>
I used the Openstreetmaps base layer in QGIS, which can be found in the browser under xyz tiles. <br>
<br>
To find the points of which to generate the isochrones from, I used overpass turbo. When using the ({{bbox}}) term, overpass turbo only returns results within what your window is displaying. The queries I used to return the location of the public transport stops/stations/wharves is in the overpass_turbo_queries.txt in this repository. <br>
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
