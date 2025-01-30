# bishbash21.github.io
Tools used: qgis2web, QGIS v34, graphhopper v10.2, OpenStreetMaps, and Overpass Turbo.<br>
This guide was very helpful https://gispocoding.github.io/how_to_create_isochrones/<br>
Uses CGIAR elevation data. <br>
Walking and biking speed = 5 & 18km/h respectively on flat areas. <br> 
Elevation affects speeds. <br>

For walking: <br>
if the average_slope is >= 15, the speed is limited to 1.5 m/s <br>
if the average_slope is >=  7 the speed is limited to 2.5 m/s <br>
if the average_slope is >=  4 the default speed (5km/h) is multiplied by 0.85 <br>
if the average_slope is <= -4 the default speed (5km/h) is multiplied by 1.05 <br>
<br>
For biking: <br>
if the average_slope is >= 15, the speed is limited to 3 m/s <br>
if the average_slope is >= 12, the speed is limited to 6 m/s <br>
if the average_slope is >= 8, the default speed (18km/h) is multiplied by 0.80 <br>
if the average_slope is >= 4, the default speed (18km/h) is multiplied by 0.90 <br>
if the average_slope is <= -4, the default speed (18km/h) is multiplied by 1.10 <br>
