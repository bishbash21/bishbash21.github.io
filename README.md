# bishbash21.github.io
Tools used: qgis2web, QGIS v34, graphhopper v10.2, OpenStreetMaps, and Overpass Turbo.<br>
This guide was very helpful https://gispocoding.github.io/how_to_create_isochrones/<br>
Uses CGIAR elevation data. <br>
Walking and biking speed = 5 & 18km/h respectively on flat areas. <br> 
Elevation affects speeds. <br>

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
How I created this: <br>
So I used graphhopper, QGIS, a QGIS plugin (catchment), and a way to query the openstreetmaps (OSM) API, which was called Overpass turbo. I also somewhat followed this guide which was very useful. https://gispocoding.github.io/how_to_create_isochrones/<br>
<br>
I ran graphhopper, which is a routing software, on my mac laptop. The graphhopper github page is https://github.com/graphhopper/graphhopper so in a folder named graphhopper I ran:
git clone https://github.com/graphhopper/graphhopper<br>
<br>
Then I downloaded the jar file from https://github.com/graphhopper/graphhopper/releases/download/10.2/graphhopper-web-10.2.jar and placed it in the base of the graphhopper folder.<br>
Then I got the file with all the actual road and street data from https://download.geofabrik.de/australia-oceania/american-oceania-latest.osm.pbf and stuck that in the base of the graphhopper folder. <br>
<br>
I then edited the config_example.yml file to suit my needs, heres a copy of it https://drive.google.com/file/d/1HFj8a8L94V8g8o-HzuECARcMBSzduaHv/view?usp=drive_link<br>
I installed QGIS-LTR, and then I installed a plugin in QGIS called Catchment which actually generates the isochrones.<br>
I selected the Openstreetmaps base layer in QGIS under xyz tiles on the browser on the left.<br>
<br>
To get all the points where the train stations, light rail stations, and manly ferry terminals I used Overpass turbo https://overpass-turbo.eu/index.html<br>
When using the ({{bbox}}) term, overpass turbo only returns results within what your window is showing, so make sure you can see the whole sydney trains network in your window. The query I used to get all heavy rail stations, and light rail stations is in this file here
https://drive.google.com/file/d/1E-mIFFvw_ax90WHIxVvn3iw1mVz2pC4r/view?usp=drive_link<br>
Then go export and download geojson, and import that into QGIS<br>
<br>
Then to start the graphhopper server I ran:<br>
java -Ddw.graphhopper.datareader.file=australia-latest.osm.pbf -jar graphhopper*.jar server config-example.yml<br>
Which creates a server at localhost:8989<br>
Then in the catchment plugin in QGIS I selected the layer with the station entrances and in settings i changed the graphhopper url to http://localhost:8989 where the server is. <br>
