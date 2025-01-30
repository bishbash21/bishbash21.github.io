var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_10minutecycletolightandheavyrailstations_1 = new ol.format.GeoJSON();
var features_10minutecycletolightandheavyrailstations_1 = format_10minutecycletolightandheavyrailstations_1.readFeatures(json_10minutecycletolightandheavyrailstations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutecycletolightandheavyrailstations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutecycletolightandheavyrailstations_1.addFeatures(features_10minutecycletolightandheavyrailstations_1);
var lyr_10minutecycletolightandheavyrailstations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutecycletolightandheavyrailstations_1, 
                style: style_10minutecycletolightandheavyrailstations_1,
                popuplayertitle: '10 minute cycle to light and heavy rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutecycletolightandheavyrailstations_1.png" /> 10 minute cycle to light and heavy rail stations'
            });
var format_10minutewalktolightandheavyrailstations_2 = new ol.format.GeoJSON();
var features_10minutewalktolightandheavyrailstations_2 = format_10minutewalktolightandheavyrailstations_2.readFeatures(json_10minutewalktolightandheavyrailstations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktolightandheavyrailstations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktolightandheavyrailstations_2.addFeatures(features_10minutewalktolightandheavyrailstations_2);
var lyr_10minutewalktolightandheavyrailstations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktolightandheavyrailstations_2, 
                style: style_10minutewalktolightandheavyrailstations_2,
                popuplayertitle: '10 minute walk to light and heavy rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktolightandheavyrailstations_2.png" /> 10 minute walk to light and heavy rail stations'
            });
var format_lightandheavyrailstationentrances_3 = new ol.format.GeoJSON();
var features_lightandheavyrailstationentrances_3 = format_lightandheavyrailstationentrances_3.readFeatures(json_lightandheavyrailstationentrances_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lightandheavyrailstationentrances_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lightandheavyrailstationentrances_3.addFeatures(features_lightandheavyrailstationentrances_3);
var lyr_lightandheavyrailstationentrances_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lightandheavyrailstationentrances_3, 
                style: style_lightandheavyrailstationentrances_3,
                popuplayertitle: 'light and heavy rail station entrances',
                interactive: false,
                title: '<img src="styles/legend/lightandheavyrailstationentrances_3.png" /> light and heavy rail station entrances'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_10minutecycletolightandheavyrailstations_1.setVisible(true);lyr_10minutewalktolightandheavyrailstations_2.setVisible(true);lyr_lightandheavyrailstationentrances_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_10minutecycletolightandheavyrailstations_1,lyr_10minutewalktolightandheavyrailstations_2,lyr_lightandheavyrailstationentrances_3];
lyr_10minutecycletolightandheavyrailstations_1.set('fieldAliases', {'fid': 'fid', 'original_fid': 'original_fid', 'l': 'l', 'isochrone_distance': 'isochrone_distance', 'boundary_fids': 'boundary_fids', });
lyr_10minutewalktolightandheavyrailstations_2.set('fieldAliases', {'fid': 'fid', 'original_fid': 'original_fid', 'l': 'l', 'isochrone_distance': 'isochrone_distance', 'boundary_fids': 'boundary_fids', });
lyr_lightandheavyrailstationentrances_3.set('fieldAliases', {'id': 'id', '@id': '@id', 'level': 'level', 'entrance': 'entrance', 'amenity': 'amenity', 'barrier': 'barrier', 'toll': 'toll', 'wheelchair': 'wheelchair', 'mapillary': 'mapillary', 'material': 'material', 'waste': 'waste', 'backrest': 'backrest', 'covered': 'covered', 'emergency': 'emergency', 'indoor': 'indoor', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'power': 'power', 'bollard': 'bollard', 'door': 'door', 'public_transport': 'public_transport', 'access': 'access', 'opening_hours': 'opening_hours', 'layer': 'layer', 'ref': 'ref', 'fee': 'fee', 'payment:contactless': 'payment:contactless', 'fixme': 'fixme', });
lyr_10minutecycletolightandheavyrailstations_1.set('fieldImages', {'fid': 'TextEdit', 'original_fid': 'TextEdit', 'l': 'Range', 'isochrone_distance': 'TextEdit', 'boundary_fids': 'TextEdit', });
lyr_10minutewalktolightandheavyrailstations_2.set('fieldImages', {'fid': 'TextEdit', 'original_fid': 'TextEdit', 'l': 'Range', 'isochrone_distance': 'TextEdit', 'boundary_fids': 'TextEdit', });
lyr_lightandheavyrailstationentrances_3.set('fieldImages', {'id': '', '@id': '', 'level': '', 'entrance': '', 'amenity': '', 'barrier': '', 'toll': '', 'wheelchair': '', 'mapillary': '', 'material': '', 'waste': '', 'backrest': '', 'covered': '', 'emergency': '', 'indoor': '', 'operator': '', 'operator:wikidata': '', 'power': '', 'bollard': '', 'door': '', 'public_transport': '', 'access': '', 'opening_hours': '', 'layer': '', 'ref': '', 'fee': '', 'payment:contactless': '', 'fixme': '', });
lyr_10minutecycletolightandheavyrailstations_1.set('fieldLabels', {'fid': 'no label', 'original_fid': 'no label', 'l': 'no label', 'isochrone_distance': 'no label', 'boundary_fids': 'no label', });
lyr_10minutewalktolightandheavyrailstations_2.set('fieldLabels', {'fid': 'no label', 'original_fid': 'no label', 'l': 'no label', 'isochrone_distance': 'no label', 'boundary_fids': 'no label', });
lyr_lightandheavyrailstationentrances_3.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'level': 'no label', 'entrance': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'toll': 'no label', 'wheelchair': 'no label', 'mapillary': 'no label', 'material': 'no label', 'waste': 'no label', 'backrest': 'no label', 'covered': 'no label', 'emergency': 'no label', 'indoor': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'power': 'no label', 'bollard': 'no label', 'door': 'no label', 'public_transport': 'no label', 'access': 'no label', 'opening_hours': 'no label', 'layer': 'no label', 'ref': 'no label', 'fee': 'no label', 'payment:contactless': 'no label', 'fixme': 'no label', });
lyr_lightandheavyrailstationentrances_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});