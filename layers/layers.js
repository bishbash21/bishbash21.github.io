var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_10minutebiketoheavylightrailstationentrancesandferrywharves_2 = new ol.format.GeoJSON();
var features_10minutebiketoheavylightrailstationentrancesandferrywharves_2 = format_10minutebiketoheavylightrailstationentrancesandferrywharves_2.readFeatures(json_10minutebiketoheavylightrailstationentrancesandferrywharves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketoheavylightrailstationentrancesandferrywharves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketoheavylightrailstationentrancesandferrywharves_2.addFeatures(features_10minutebiketoheavylightrailstationentrancesandferrywharves_2);
var lyr_10minutebiketoheavylightrailstationentrancesandferrywharves_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketoheavylightrailstationentrancesandferrywharves_2, 
                style: style_10minutebiketoheavylightrailstationentrancesandferrywharves_2,
                popuplayertitle: '10 minute bike to heavy & light rail station entrances and ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketoheavylightrailstationentrancesandferrywharves_2.png" /> 10 minute bike to heavy & light rail station entrances and ferry wharves'
            });
var format_10minutewalktoheavylightrailstationentrancesandferrywharves_3 = new ol.format.GeoJSON();
var features_10minutewalktoheavylightrailstationentrancesandferrywharves_3 = format_10minutewalktoheavylightrailstationentrancesandferrywharves_3.readFeatures(json_10minutewalktoheavylightrailstationentrancesandferrywharves_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktoheavylightrailstationentrancesandferrywharves_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktoheavylightrailstationentrancesandferrywharves_3.addFeatures(features_10minutewalktoheavylightrailstationentrancesandferrywharves_3);
var lyr_10minutewalktoheavylightrailstationentrancesandferrywharves_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktoheavylightrailstationentrancesandferrywharves_3, 
                style: style_10minutewalktoheavylightrailstationentrancesandferrywharves_3,
                popuplayertitle: '10 minute walk to heavy & light rail station entrances and ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktoheavylightrailstationentrancesandferrywharves_3.png" /> 10 minute walk to heavy & light rail station entrances and ferry wharves'
            });
var format_10minutebiketolightrailstations_4 = new ol.format.GeoJSON();
var features_10minutebiketolightrailstations_4 = format_10minutebiketolightrailstations_4.readFeatures(json_10minutebiketolightrailstations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketolightrailstations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketolightrailstations_4.addFeatures(features_10minutebiketolightrailstations_4);
var lyr_10minutebiketolightrailstations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketolightrailstations_4, 
                style: style_10minutebiketolightrailstations_4,
                popuplayertitle: '10 minute bike to light rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketolightrailstations_4.png" /> 10 minute bike to light rail stations'
            });
var format_10minutewalktolightrailstations_5 = new ol.format.GeoJSON();
var features_10minutewalktolightrailstations_5 = format_10minutewalktolightrailstations_5.readFeatures(json_10minutewalktolightrailstations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktolightrailstations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktolightrailstations_5.addFeatures(features_10minutewalktolightrailstations_5);
var lyr_10minutewalktolightrailstations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktolightrailstations_5, 
                style: style_10minutewalktolightrailstations_5,
                popuplayertitle: '10 minute walk to light rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktolightrailstations_5.png" /> 10 minute walk to light rail stations'
            });
var format_10minutebiketoheavyrailstations_6 = new ol.format.GeoJSON();
var features_10minutebiketoheavyrailstations_6 = format_10minutebiketoheavyrailstations_6.readFeatures(json_10minutebiketoheavyrailstations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketoheavyrailstations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketoheavyrailstations_6.addFeatures(features_10minutebiketoheavyrailstations_6);
var lyr_10minutebiketoheavyrailstations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketoheavyrailstations_6, 
                style: style_10minutebiketoheavyrailstations_6,
                popuplayertitle: '10 minute bike to heavy rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketoheavyrailstations_6.png" /> 10 minute bike to heavy rail stations'
            });
var format_10minutewalktoheavyrailstations_7 = new ol.format.GeoJSON();
var features_10minutewalktoheavyrailstations_7 = format_10minutewalktoheavyrailstations_7.readFeatures(json_10minutewalktoheavyrailstations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktoheavyrailstations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktoheavyrailstations_7.addFeatures(features_10minutewalktoheavyrailstations_7);
var lyr_10minutewalktoheavyrailstations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktoheavyrailstations_7, 
                style: style_10minutewalktoheavyrailstations_7,
                popuplayertitle: '10 minute walk to heavy rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktoheavyrailstations_7.png" /> 10 minute walk to heavy rail stations'
            });
var format_10minutebiketoferrywharves_8 = new ol.format.GeoJSON();
var features_10minutebiketoferrywharves_8 = format_10minutebiketoferrywharves_8.readFeatures(json_10minutebiketoferrywharves_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketoferrywharves_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketoferrywharves_8.addFeatures(features_10minutebiketoferrywharves_8);
var lyr_10minutebiketoferrywharves_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketoferrywharves_8, 
                style: style_10minutebiketoferrywharves_8,
                popuplayertitle: '10 minute bike to ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketoferrywharves_8.png" /> 10 minute bike to ferry wharves'
            });
var format_10minutewalktoferrywharves_9 = new ol.format.GeoJSON();
var features_10minutewalktoferrywharves_9 = format_10minutewalktoferrywharves_9.readFeatures(json_10minutewalktoferrywharves_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktoferrywharves_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktoferrywharves_9.addFeatures(features_10minutewalktoferrywharves_9);
var lyr_10minutewalktoferrywharves_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktoferrywharves_9, 
                style: style_10minutewalktoferrywharves_9,
                popuplayertitle: '10 minute walk to ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktoferrywharves_9.png" /> 10 minute walk to ferry wharves'
            });
var format_heavylightrailstationsentrancesandferrywharves_10 = new ol.format.GeoJSON();
var features_heavylightrailstationsentrancesandferrywharves_10 = format_heavylightrailstationsentrancesandferrywharves_10.readFeatures(json_heavylightrailstationsentrancesandferrywharves_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heavylightrailstationsentrancesandferrywharves_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heavylightrailstationsentrancesandferrywharves_10.addFeatures(features_heavylightrailstationsentrancesandferrywharves_10);
var lyr_heavylightrailstationsentrancesandferrywharves_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heavylightrailstationsentrancesandferrywharves_10, 
                style: style_heavylightrailstationsentrancesandferrywharves_10,
                popuplayertitle: 'heavy & light rail stations entrances and ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/heavylightrailstationsentrancesandferrywharves_10.png" /> heavy & light rail stations entrances and ferry wharves'
            });
var format_ferrywharves_11 = new ol.format.GeoJSON();
var features_ferrywharves_11 = format_ferrywharves_11.readFeatures(json_ferrywharves_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferrywharves_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferrywharves_11.addFeatures(features_ferrywharves_11);
var lyr_ferrywharves_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ferrywharves_11, 
                style: style_ferrywharves_11,
                popuplayertitle: 'ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/ferrywharves_11.png" /> ferry wharves'
            });
var format_heavyrailstationentrances_12 = new ol.format.GeoJSON();
var features_heavyrailstationentrances_12 = format_heavyrailstationentrances_12.readFeatures(json_heavyrailstationentrances_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heavyrailstationentrances_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heavyrailstationentrances_12.addFeatures(features_heavyrailstationentrances_12);
var lyr_heavyrailstationentrances_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heavyrailstationentrances_12, 
                style: style_heavyrailstationentrances_12,
                popuplayertitle: 'heavy rail station entrances',
                interactive: false,
                title: '<img src="styles/legend/heavyrailstationentrances_12.png" /> heavy rail station entrances'
            });
var format_lightrailstationentrances_13 = new ol.format.GeoJSON();
var features_lightrailstationentrances_13 = format_lightrailstationentrances_13.readFeatures(json_lightrailstationentrances_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lightrailstationentrances_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lightrailstationentrances_13.addFeatures(features_lightrailstationentrances_13);
var lyr_lightrailstationentrances_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lightrailstationentrances_13, 
                style: style_lightrailstationentrances_13,
                popuplayertitle: 'light rail station entrances',
                interactive: false,
                title: '<img src="styles/legend/lightrailstationentrances_13.png" /> light rail station entrances'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_10minutebiketoheavylightrailstationentrancesandferrywharves_2.setVisible(false);lyr_10minutewalktoheavylightrailstationentrancesandferrywharves_3.setVisible(false);lyr_10minutebiketolightrailstations_4.setVisible(false);lyr_10minutewalktolightrailstations_5.setVisible(false);lyr_10minutebiketoheavyrailstations_6.setVisible(false);lyr_10minutewalktoheavyrailstations_7.setVisible(true);lyr_10minutebiketoferrywharves_8.setVisible(false);lyr_10minutewalktoferrywharves_9.setVisible(false);lyr_heavylightrailstationsentrancesandferrywharves_10.setVisible(false);lyr_ferrywharves_11.setVisible(false);lyr_heavyrailstationentrances_12.setVisible(true);lyr_lightrailstationentrances_13.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_10minutebiketoheavylightrailstationentrancesandferrywharves_2,lyr_10minutewalktoheavylightrailstationentrancesandferrywharves_3,lyr_10minutebiketolightrailstations_4,lyr_10minutewalktolightrailstations_5,lyr_10minutebiketoheavyrailstations_6,lyr_10minutewalktoheavyrailstations_7,lyr_10minutebiketoferrywharves_8,lyr_10minutewalktoferrywharves_9,lyr_heavylightrailstationsentrancesandferrywharves_10,lyr_ferrywharves_11,lyr_heavyrailstationentrances_12,lyr_lightrailstationentrances_13];
lyr_10minutebiketoheavylightrailstationentrancesandferrywharves_2.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktoheavylightrailstationentrancesandferrywharves_3.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketolightrailstations_4.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktolightrailstations_5.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketoheavyrailstations_6.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktoheavyrailstations_7.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketoferrywharves_8.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktoferrywharves_9.set('fieldAliases', {'group_id': 'group_id', });
lyr_heavylightrailstationsentrancesandferrywharves_10.set('fieldAliases', {'id': 'id', '@id': '@id', 'amenity': 'amenity', 'fare_gates': 'fare_gates', 'ferry': 'ferry', 'local_ref': 'local_ref', 'name': 'name', 'public_transport': 'public_transport', 'wheelchair': 'wheelchair', 'not:network:wikidata': 'not:network:wikidata', 'ref': 'ref', 'website': 'website', 'level': 'level', 'entrance': 'entrance', 'barrier': 'barrier', 'toll': 'toll', 'operator': 'operator', 'mapillary': 'mapillary', 'material': 'material', 'waste': 'waste', 'backrest': 'backrest', 'covered': 'covered', 'emergency': 'emergency', 'indoor': 'indoor', 'operator:wikidata': 'operator:wikidata', 'power': 'power', 'bollard': 'bollard', 'door': 'door', 'access': 'access', 'opening_hours': 'opening_hours', 'layer': 'layer', 'fee': 'fee', 'payment:contactless': 'payment:contactless', 'fixme': 'fixme', });
lyr_ferrywharves_11.set('fieldAliases', {'id': 'id', '@id': '@id', 'amenity': 'amenity', 'fare_gates': 'fare_gates', 'ferry': 'ferry', 'local_ref': 'local_ref', 'name': 'name', 'public_transport': 'public_transport', 'wheelchair': 'wheelchair', 'not:network:wikidata': 'not:network:wikidata', 'ref': 'ref', 'website': 'website', 'operator': 'operator', });
lyr_heavyrailstationentrances_12.set('fieldAliases', {'id': 'id', '@id': '@id', 'level': 'level', 'amenity': 'amenity', 'barrier': 'barrier', 'toll': 'toll', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'bollard': 'bollard', 'door': 'door', 'covered': 'covered', 'indoor': 'indoor', 'public_transport': 'public_transport', 'access': 'access', 'opening_hours': 'opening_hours', 'layer': 'layer', 'ref': 'ref', 'fee': 'fee', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'payment:contactless': 'payment:contactless', 'fixme': 'fixme', });
lyr_lightrailstationentrances_13.set('fieldAliases', {'id': 'id', '@id': '@id', 'entrance': 'entrance', 'barrier': 'barrier', 'amenity': 'amenity', 'mapillary': 'mapillary', 'material': 'material', 'waste': 'waste', 'backrest': 'backrest', 'covered': 'covered', 'emergency': 'emergency', 'indoor': 'indoor', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'power': 'power', });
lyr_10minutebiketoheavylightrailstationentrancesandferrywharves_2.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktoheavylightrailstationentrancesandferrywharves_3.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketolightrailstations_4.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktolightrailstations_5.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketoheavyrailstations_6.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktoheavyrailstations_7.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketoferrywharves_8.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktoferrywharves_9.set('fieldImages', {'group_id': 'Range', });
lyr_heavylightrailstationsentrancesandferrywharves_10.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'amenity': 'TextEdit', 'fare_gates': 'TextEdit', 'ferry': 'TextEdit', 'local_ref': 'TextEdit', 'name': 'TextEdit', 'public_transport': 'TextEdit', 'wheelchair': 'TextEdit', 'not:network:wikidata': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'level': 'TextEdit', 'entrance': 'TextEdit', 'barrier': 'TextEdit', 'toll': 'TextEdit', 'operator': 'TextEdit', 'mapillary': 'TextEdit', 'material': 'TextEdit', 'waste': 'TextEdit', 'backrest': 'TextEdit', 'covered': 'TextEdit', 'emergency': 'TextEdit', 'indoor': 'TextEdit', 'operator:wikidata': 'TextEdit', 'power': 'TextEdit', 'bollard': 'TextEdit', 'door': 'TextEdit', 'access': 'TextEdit', 'opening_hours': 'TextEdit', 'layer': 'TextEdit', 'fee': 'TextEdit', 'payment:contactless': 'TextEdit', 'fixme': 'TextEdit', });
lyr_ferrywharves_11.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'amenity': 'TextEdit', 'fare_gates': 'TextEdit', 'ferry': 'TextEdit', 'local_ref': 'TextEdit', 'name': 'TextEdit', 'public_transport': 'TextEdit', 'wheelchair': 'TextEdit', 'not:network:wikidata': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', });
lyr_heavyrailstationentrances_12.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'level': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'toll': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'bollard': 'TextEdit', 'door': 'TextEdit', 'covered': 'TextEdit', 'indoor': 'TextEdit', 'public_transport': 'TextEdit', 'access': 'TextEdit', 'opening_hours': 'TextEdit', 'layer': 'TextEdit', 'ref': 'TextEdit', 'fee': 'TextEdit', 'operator': 'TextEdit', 'operator:wikidata': 'TextEdit', 'payment:contactless': 'TextEdit', 'fixme': 'TextEdit', });
lyr_lightrailstationentrances_13.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'entrance': 'TextEdit', 'barrier': 'TextEdit', 'amenity': 'TextEdit', 'mapillary': 'TextEdit', 'material': 'TextEdit', 'waste': 'TextEdit', 'backrest': 'TextEdit', 'covered': 'TextEdit', 'emergency': 'TextEdit', 'indoor': 'TextEdit', 'operator': 'TextEdit', 'operator:wikidata': 'TextEdit', 'power': 'TextEdit', });
lyr_10minutebiketoheavylightrailstationentrancesandferrywharves_2.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktoheavylightrailstationentrancesandferrywharves_3.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketolightrailstations_4.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktolightrailstations_5.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketoheavyrailstations_6.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktoheavyrailstations_7.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketoferrywharves_8.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktoferrywharves_9.set('fieldLabels', {'group_id': 'no label', });
lyr_heavylightrailstationsentrancesandferrywharves_10.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'amenity': 'no label', 'fare_gates': 'no label', 'ferry': 'no label', 'local_ref': 'no label', 'name': 'no label', 'public_transport': 'no label', 'wheelchair': 'no label', 'not:network:wikidata': 'no label', 'ref': 'no label', 'website': 'no label', 'level': 'no label', 'entrance': 'no label', 'barrier': 'no label', 'toll': 'no label', 'operator': 'no label', 'mapillary': 'no label', 'material': 'no label', 'waste': 'no label', 'backrest': 'no label', 'covered': 'no label', 'emergency': 'no label', 'indoor': 'no label', 'operator:wikidata': 'no label', 'power': 'no label', 'bollard': 'no label', 'door': 'no label', 'access': 'no label', 'opening_hours': 'no label', 'layer': 'no label', 'fee': 'no label', 'payment:contactless': 'no label', 'fixme': 'no label', });
lyr_ferrywharves_11.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'amenity': 'no label', 'fare_gates': 'no label', 'ferry': 'no label', 'local_ref': 'no label', 'name': 'no label', 'public_transport': 'no label', 'wheelchair': 'no label', 'not:network:wikidata': 'no label', 'ref': 'no label', 'website': 'no label', 'operator': 'no label', });
lyr_heavyrailstationentrances_12.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'level': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'toll': 'no label', 'entrance': 'no label', 'wheelchair': 'no label', 'bollard': 'no label', 'door': 'no label', 'covered': 'no label', 'indoor': 'no label', 'public_transport': 'no label', 'access': 'no label', 'opening_hours': 'no label', 'layer': 'no label', 'ref': 'no label', 'fee': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'payment:contactless': 'no label', 'fixme': 'no label', });
lyr_lightrailstationentrances_13.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'entrance': 'no label', 'barrier': 'no label', 'amenity': 'no label', 'mapillary': 'no label', 'material': 'no label', 'waste': 'no label', 'backrest': 'no label', 'covered': 'no label', 'emergency': 'no label', 'indoor': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'power': 'no label', });
lyr_lightrailstationentrances_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});