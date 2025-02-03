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
var format_10minutebiketoheavylightrailstationswharvesandbusstops_2 = new ol.format.GeoJSON();
var features_10minutebiketoheavylightrailstationswharvesandbusstops_2 = format_10minutebiketoheavylightrailstationswharvesandbusstops_2.readFeatures(json_10minutebiketoheavylightrailstationswharvesandbusstops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketoheavylightrailstationswharvesandbusstops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketoheavylightrailstationswharvesandbusstops_2.addFeatures(features_10minutebiketoheavylightrailstationswharvesandbusstops_2);
var lyr_10minutebiketoheavylightrailstationswharvesandbusstops_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketoheavylightrailstationswharvesandbusstops_2, 
                style: style_10minutebiketoheavylightrailstationswharvesandbusstops_2,
                popuplayertitle: '10 minute bike to heavy & light rail stations, wharves, and bus stops',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketoheavylightrailstationswharvesandbusstops_2.png" /> 10 minute bike to heavy & light rail stations, wharves, and bus stops'
            });
var format_10minutewalktoheavylightrailstationswharvesandbusstops_3 = new ol.format.GeoJSON();
var features_10minutewalktoheavylightrailstationswharvesandbusstops_3 = format_10minutewalktoheavylightrailstationswharvesandbusstops_3.readFeatures(json_10minutewalktoheavylightrailstationswharvesandbusstops_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktoheavylightrailstationswharvesandbusstops_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktoheavylightrailstationswharvesandbusstops_3.addFeatures(features_10minutewalktoheavylightrailstationswharvesandbusstops_3);
var lyr_10minutewalktoheavylightrailstationswharvesandbusstops_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktoheavylightrailstationswharvesandbusstops_3, 
                style: style_10minutewalktoheavylightrailstationswharvesandbusstops_3,
                popuplayertitle: '10 minute walk to heavy & light rail stations, wharves, and bus stops',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktoheavylightrailstationswharvesandbusstops_3.png" /> 10 minute walk to heavy & light rail stations, wharves, and bus stops'
            });
var format_10minutebiketoferrywharves_4 = new ol.format.GeoJSON();
var features_10minutebiketoferrywharves_4 = format_10minutebiketoferrywharves_4.readFeatures(json_10minutebiketoferrywharves_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketoferrywharves_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketoferrywharves_4.addFeatures(features_10minutebiketoferrywharves_4);
var lyr_10minutebiketoferrywharves_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketoferrywharves_4, 
                style: style_10minutebiketoferrywharves_4,
                popuplayertitle: '10 minute bike to ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketoferrywharves_4.png" /> 10 minute bike to ferry wharves'
            });
var format_10minutewalktoferrywharves_5 = new ol.format.GeoJSON();
var features_10minutewalktoferrywharves_5 = format_10minutewalktoferrywharves_5.readFeatures(json_10minutewalktoferrywharves_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktoferrywharves_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktoferrywharves_5.addFeatures(features_10minutewalktoferrywharves_5);
var lyr_10minutewalktoferrywharves_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktoferrywharves_5, 
                style: style_10minutewalktoferrywharves_5,
                popuplayertitle: '10 minute walk to ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktoferrywharves_5.png" /> 10 minute walk to ferry wharves'
            });
var format_10minutebiketobusstops_6 = new ol.format.GeoJSON();
var features_10minutebiketobusstops_6 = format_10minutebiketobusstops_6.readFeatures(json_10minutebiketobusstops_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketobusstops_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketobusstops_6.addFeatures(features_10minutebiketobusstops_6);
var lyr_10minutebiketobusstops_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketobusstops_6, 
                style: style_10minutebiketobusstops_6,
                popuplayertitle: '10 minute bike to bus stops',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketobusstops_6.png" /> 10 minute bike to bus stops'
            });
var format_10minutewalktobusstops_7 = new ol.format.GeoJSON();
var features_10minutewalktobusstops_7 = format_10minutewalktobusstops_7.readFeatures(json_10minutewalktobusstops_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktobusstops_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktobusstops_7.addFeatures(features_10minutewalktobusstops_7);
var lyr_10minutewalktobusstops_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktobusstops_7, 
                style: style_10minutewalktobusstops_7,
                popuplayertitle: '10 minute walk to bus stops',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktobusstops_7.png" /> 10 minute walk to bus stops'
            });
var format_10minutebiketolightrailstations_8 = new ol.format.GeoJSON();
var features_10minutebiketolightrailstations_8 = format_10minutebiketolightrailstations_8.readFeatures(json_10minutebiketolightrailstations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketolightrailstations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketolightrailstations_8.addFeatures(features_10minutebiketolightrailstations_8);
var lyr_10minutebiketolightrailstations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketolightrailstations_8, 
                style: style_10minutebiketolightrailstations_8,
                popuplayertitle: '10 minute bike to light rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketolightrailstations_8.png" /> 10 minute bike to light rail stations'
            });
var format_10minutewalktolightrailstations_9 = new ol.format.GeoJSON();
var features_10minutewalktolightrailstations_9 = format_10minutewalktolightrailstations_9.readFeatures(json_10minutewalktolightrailstations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktolightrailstations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktolightrailstations_9.addFeatures(features_10minutewalktolightrailstations_9);
var lyr_10minutewalktolightrailstations_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktolightrailstations_9, 
                style: style_10minutewalktolightrailstations_9,
                popuplayertitle: '10 minute walk to light rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktolightrailstations_9.png" /> 10 minute walk to light rail stations'
            });
var format_10minutebiketoheavyrailstations_10 = new ol.format.GeoJSON();
var features_10minutebiketoheavyrailstations_10 = format_10minutebiketoheavyrailstations_10.readFeatures(json_10minutebiketoheavyrailstations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutebiketoheavyrailstations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutebiketoheavyrailstations_10.addFeatures(features_10minutebiketoheavyrailstations_10);
var lyr_10minutebiketoheavyrailstations_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutebiketoheavyrailstations_10, 
                style: style_10minutebiketoheavyrailstations_10,
                popuplayertitle: '10 minute bike to heavy rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutebiketoheavyrailstations_10.png" /> 10 minute bike to heavy rail stations'
            });
var format_10minutewalktoheavyrailstations_11 = new ol.format.GeoJSON();
var features_10minutewalktoheavyrailstations_11 = format_10minutewalktoheavyrailstations_11.readFeatures(json_10minutewalktoheavyrailstations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10minutewalktoheavyrailstations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutewalktoheavyrailstations_11.addFeatures(features_10minutewalktoheavyrailstations_11);
var lyr_10minutewalktoheavyrailstations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutewalktoheavyrailstations_11, 
                style: style_10minutewalktoheavyrailstations_11,
                popuplayertitle: '10 minute walk to heavy rail stations',
                interactive: false,
                title: '<img src="styles/legend/10minutewalktoheavyrailstations_11.png" /> 10 minute walk to heavy rail stations'
            });
var format_heavyandlightrailstationentrancesferrywharvesandbusstops_12 = new ol.format.GeoJSON();
var features_heavyandlightrailstationentrancesferrywharvesandbusstops_12 = format_heavyandlightrailstationentrancesferrywharvesandbusstops_12.readFeatures(json_heavyandlightrailstationentrancesferrywharvesandbusstops_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heavyandlightrailstationentrancesferrywharvesandbusstops_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heavyandlightrailstationentrancesferrywharvesandbusstops_12.addFeatures(features_heavyandlightrailstationentrancesferrywharvesandbusstops_12);
var lyr_heavyandlightrailstationentrancesferrywharvesandbusstops_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heavyandlightrailstationentrancesferrywharvesandbusstops_12, 
                style: style_heavyandlightrailstationentrancesferrywharvesandbusstops_12,
                popuplayertitle: 'heavy and light rail station entrances, ferry wharves, and bus stops',
                interactive: false,
                title: '<img src="styles/legend/heavyandlightrailstationentrancesferrywharvesandbusstops_12.png" /> heavy and light rail station entrances, ferry wharves, and bus stops'
            });
var format_ferrywharves_13 = new ol.format.GeoJSON();
var features_ferrywharves_13 = format_ferrywharves_13.readFeatures(json_ferrywharves_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ferrywharves_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ferrywharves_13.addFeatures(features_ferrywharves_13);
var lyr_ferrywharves_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ferrywharves_13, 
                style: style_ferrywharves_13,
                popuplayertitle: 'ferry wharves',
                interactive: false,
                title: '<img src="styles/legend/ferrywharves_13.png" /> ferry wharves'
            });
var format_busstops_14 = new ol.format.GeoJSON();
var features_busstops_14 = format_busstops_14.readFeatures(json_busstops_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_busstops_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_busstops_14.addFeatures(features_busstops_14);
var lyr_busstops_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_busstops_14, 
                style: style_busstops_14,
                popuplayertitle: 'bus stops',
                interactive: false,
                title: '<img src="styles/legend/busstops_14.png" /> bus stops'
            });
var format_lightrailstationentrances_15 = new ol.format.GeoJSON();
var features_lightrailstationentrances_15 = format_lightrailstationentrances_15.readFeatures(json_lightrailstationentrances_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lightrailstationentrances_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lightrailstationentrances_15.addFeatures(features_lightrailstationentrances_15);
var lyr_lightrailstationentrances_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lightrailstationentrances_15, 
                style: style_lightrailstationentrances_15,
                popuplayertitle: 'light rail station entrances',
                interactive: false,
                title: '<img src="styles/legend/lightrailstationentrances_15.png" /> light rail station entrances'
            });
var format_heavyrailstationentrances_16 = new ol.format.GeoJSON();
var features_heavyrailstationentrances_16 = format_heavyrailstationentrances_16.readFeatures(json_heavyrailstationentrances_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_heavyrailstationentrances_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_heavyrailstationentrances_16.addFeatures(features_heavyrailstationentrances_16);
var lyr_heavyrailstationentrances_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_heavyrailstationentrances_16, 
                style: style_heavyrailstationentrances_16,
                popuplayertitle: 'heavy rail station entrances',
                interactive: false,
                title: '<img src="styles/legend/heavyrailstationentrances_16.png" /> heavy rail station entrances'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_10minutebiketoheavylightrailstationswharvesandbusstops_2.setVisible(false);lyr_10minutewalktoheavylightrailstationswharvesandbusstops_3.setVisible(false);lyr_10minutebiketoferrywharves_4.setVisible(false);lyr_10minutewalktoferrywharves_5.setVisible(false);lyr_10minutebiketobusstops_6.setVisible(false);lyr_10minutewalktobusstops_7.setVisible(false);lyr_10minutebiketolightrailstations_8.setVisible(false);lyr_10minutewalktolightrailstations_9.setVisible(false);lyr_10minutebiketoheavyrailstations_10.setVisible(false);lyr_10minutewalktoheavyrailstations_11.setVisible(true);lyr_heavyandlightrailstationentrancesferrywharvesandbusstops_12.setVisible(false);lyr_ferrywharves_13.setVisible(false);lyr_busstops_14.setVisible(false);lyr_lightrailstationentrances_15.setVisible(false);lyr_heavyrailstationentrances_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_10minutebiketoheavylightrailstationswharvesandbusstops_2,lyr_10minutewalktoheavylightrailstationswharvesandbusstops_3,lyr_10minutebiketoferrywharves_4,lyr_10minutewalktoferrywharves_5,lyr_10minutebiketobusstops_6,lyr_10minutewalktobusstops_7,lyr_10minutebiketolightrailstations_8,lyr_10minutewalktolightrailstations_9,lyr_10minutebiketoheavyrailstations_10,lyr_10minutewalktoheavyrailstations_11,lyr_heavyandlightrailstationentrancesferrywharvesandbusstops_12,lyr_ferrywharves_13,lyr_busstops_14,lyr_lightrailstationentrances_15,lyr_heavyrailstationentrances_16];
lyr_10minutebiketoheavylightrailstationswharvesandbusstops_2.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktoheavylightrailstationswharvesandbusstops_3.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketoferrywharves_4.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktoferrywharves_5.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketobusstops_6.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktobusstops_7.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketolightrailstations_8.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktolightrailstations_9.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutebiketoheavyrailstations_10.set('fieldAliases', {'group_id': 'group_id', });
lyr_10minutewalktoheavyrailstations_11.set('fieldAliases', {'group_id': 'group_id', });
lyr_heavyandlightrailstationentrancesferrywharvesandbusstops_12.set('fieldAliases', {'id': 'id', '@id': '@id', 'amenity': 'amenity', 'fare_gates': 'fare_gates', 'ferry': 'ferry', 'local_ref': 'local_ref', 'name': 'name', 'public_transport': 'public_transport', 'wheelchair': 'wheelchair', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:state': 'addr:state', 'addr:street': 'addr:street', 'addr:suburb': 'addr:suburb', 'bench': 'bench', 'bin': 'bin', 'bus': 'bus', 'highway': 'highway', 'internet_access': 'internet_access', 'network': 'network', 'network:wikidata': 'network:wikidata', 'operator': 'operator', 'ref': 'ref', 'shelter': 'shelter', '@relations': '@relations', 'source': 'source', 'not:network:wikidata': 'not:network:wikidata', 'website': 'website', 'tactile_paving': 'tactile_paving', 'check_date': 'check_date', 'note': 'note', 'covered': 'covered', 'lit': 'lit', 'source:location': 'source:location', 'source:name': 'source:name', 'source:ref': 'source:ref', 'route_ref': 'route_ref', 'departures_board': 'departures_board', 'check_date:bin': 'check_date:bin', 'check_date:lit': 'check_date:lit', 'check_date:tactile_paving': 'check_date:tactile_paving', 'wheelchair:description': 'wheelchair:description', 'check_date:bench': 'check_date:bench', 'survey:date': 'survey:date', 'waste_basket': 'waste_basket', 'check_date:shelter': 'check_date:shelter', 'description': 'description', 'gtfs_id': 'gtfs_id', 'level': 'level', 'entrance': 'entrance', 'lines': 'lines', 'barrier': 'barrier', 'toll': 'toll', 'name:ko': 'name:ko', 'services': 'services', 'addr:city': 'addr:city', 'shelter_type': 'shelter_type', 'url': 'url', 'mapillary': 'mapillary', 'material': 'material', 'waste': 'waste', 'backrest': 'backrest', 'emergency': 'emergency', 'indoor': 'indoor', 'operator:wikidata': 'operator:wikidata', 'power': 'power', 'bollard': 'bollard', 'door': 'door', 'access': 'access', 'opening_hours': 'opening_hours', 'layer': 'layer', 'fee': 'fee', 'payment:contactless': 'payment:contactless', 'fixme': 'fixme', 'payment:coins': 'payment:coins', 'payment:telephone_cards': 'payment:telephone_cards', 'sms': 'sms', 'addr:country': 'addr:country', 'passenger_information_display': 'passenger_information_display', });
lyr_ferrywharves_13.set('fieldAliases', {'id': 'id', '@id': '@id', 'amenity': 'amenity', 'fare_gates': 'fare_gates', 'ferry': 'ferry', 'local_ref': 'local_ref', 'name': 'name', 'public_transport': 'public_transport', 'wheelchair': 'wheelchair', 'not:network:wikidata': 'not:network:wikidata', 'ref': 'ref', 'website': 'website', 'operator': 'operator', });
lyr_busstops_14.set('fieldAliases', {'id': 'id', '@id': '@id', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:state': 'addr:state', 'addr:street': 'addr:street', 'addr:suburb': 'addr:suburb', 'bench': 'bench', 'bin': 'bin', 'bus': 'bus', 'highway': 'highway', 'internet_access': 'internet_access', 'name': 'name', 'network': 'network', 'network:wikidata': 'network:wikidata', 'operator': 'operator', 'public_transport': 'public_transport', 'ref': 'ref', 'shelter': 'shelter', '@relations': '@relations', 'source': 'source', 'tactile_paving': 'tactile_paving', 'wheelchair': 'wheelchair', 'check_date': 'check_date', 'note': 'note', 'covered': 'covered', 'lit': 'lit', 'source:location': 'source:location', 'source:name': 'source:name', 'source:ref': 'source:ref', 'route_ref': 'route_ref', 'departures_board': 'departures_board', 'local_ref': 'local_ref', 'check_date:bin': 'check_date:bin', 'check_date:lit': 'check_date:lit', 'check_date:tactile_paving': 'check_date:tactile_paving', 'wheelchair:description': 'wheelchair:description', 'check_date:bench': 'check_date:bench', 'not:network:wikidata': 'not:network:wikidata', 'survey:date': 'survey:date', 'waste_basket': 'waste_basket', 'check_date:shelter': 'check_date:shelter', 'description': 'description', 'gtfs_id': 'gtfs_id', 'lines': 'lines', 'level': 'level', 'name:ko': 'name:ko', 'services': 'services', 'addr:city': 'addr:city', 'shelter_type': 'shelter_type', 'url': 'url', 'website': 'website', 'amenity': 'amenity', 'indoor': 'indoor', 'operator:wikidata': 'operator:wikidata', 'payment:coins': 'payment:coins', 'payment:telephone_cards': 'payment:telephone_cards', 'sms': 'sms', 'addr:country': 'addr:country', 'passenger_information_display': 'passenger_information_display', });
lyr_lightrailstationentrances_15.set('fieldAliases', {'id': 'id', '@id': '@id', 'entrance': 'entrance', 'barrier': 'barrier', 'amenity': 'amenity', 'mapillary': 'mapillary', 'material': 'material', 'waste': 'waste', 'backrest': 'backrest', 'covered': 'covered', 'emergency': 'emergency', 'indoor': 'indoor', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'power': 'power', });
lyr_heavyrailstationentrances_16.set('fieldAliases', {'id': 'id', '@id': '@id', 'level': 'level', 'amenity': 'amenity', 'barrier': 'barrier', 'toll': 'toll', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'bollard': 'bollard', 'door': 'door', 'covered': 'covered', 'indoor': 'indoor', 'public_transport': 'public_transport', 'access': 'access', 'opening_hours': 'opening_hours', 'layer': 'layer', 'ref': 'ref', 'fee': 'fee', 'operator': 'operator', 'operator:wikidata': 'operator:wikidata', 'payment:contactless': 'payment:contactless', 'fixme': 'fixme', });
lyr_10minutebiketoheavylightrailstationswharvesandbusstops_2.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktoheavylightrailstationswharvesandbusstops_3.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketoferrywharves_4.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktoferrywharves_5.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketobusstops_6.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktobusstops_7.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketolightrailstations_8.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktolightrailstations_9.set('fieldImages', {'group_id': 'Range', });
lyr_10minutebiketoheavyrailstations_10.set('fieldImages', {'group_id': 'Range', });
lyr_10minutewalktoheavyrailstations_11.set('fieldImages', {'group_id': 'Range', });
lyr_heavyandlightrailstationentrancesferrywharvesandbusstops_12.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'amenity': 'TextEdit', 'fare_gates': 'TextEdit', 'ferry': 'TextEdit', 'local_ref': 'TextEdit', 'name': 'TextEdit', 'public_transport': 'TextEdit', 'wheelchair': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:state': 'TextEdit', 'addr:street': 'TextEdit', 'addr:suburb': 'TextEdit', 'bench': 'TextEdit', 'bin': 'TextEdit', 'bus': 'TextEdit', 'highway': 'TextEdit', 'internet_access': 'TextEdit', 'network': 'TextEdit', 'network:wikidata': 'TextEdit', 'operator': 'TextEdit', 'ref': 'TextEdit', 'shelter': 'TextEdit', '@relations': 'TextEdit', 'source': 'TextEdit', 'not:network:wikidata': 'TextEdit', 'website': 'TextEdit', 'tactile_paving': 'TextEdit', 'check_date': 'DateTime', 'note': 'TextEdit', 'covered': 'TextEdit', 'lit': 'TextEdit', 'source:location': 'TextEdit', 'source:name': 'TextEdit', 'source:ref': 'TextEdit', 'route_ref': 'TextEdit', 'departures_board': 'TextEdit', 'check_date:bin': 'DateTime', 'check_date:lit': 'DateTime', 'check_date:tactile_paving': 'DateTime', 'wheelchair:description': 'TextEdit', 'check_date:bench': 'DateTime', 'survey:date': 'DateTime', 'waste_basket': 'TextEdit', 'check_date:shelter': 'DateTime', 'description': 'TextEdit', 'gtfs_id': 'TextEdit', 'level': 'TextEdit', 'entrance': 'TextEdit', 'lines': 'TextEdit', 'barrier': 'TextEdit', 'toll': 'TextEdit', 'name:ko': 'TextEdit', 'services': 'TextEdit', 'addr:city': 'TextEdit', 'shelter_type': 'TextEdit', 'url': 'TextEdit', 'mapillary': 'TextEdit', 'material': 'TextEdit', 'waste': 'TextEdit', 'backrest': 'TextEdit', 'emergency': 'TextEdit', 'indoor': 'TextEdit', 'operator:wikidata': 'TextEdit', 'power': 'TextEdit', 'bollard': 'TextEdit', 'door': 'TextEdit', 'access': 'TextEdit', 'opening_hours': 'TextEdit', 'layer': 'TextEdit', 'fee': 'TextEdit', 'payment:contactless': 'TextEdit', 'fixme': 'TextEdit', 'payment:coins': 'TextEdit', 'payment:telephone_cards': 'TextEdit', 'sms': 'TextEdit', 'addr:country': 'TextEdit', 'passenger_information_display': 'TextEdit', });
lyr_ferrywharves_13.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'amenity': 'TextEdit', 'fare_gates': 'TextEdit', 'ferry': 'TextEdit', 'local_ref': 'TextEdit', 'name': 'TextEdit', 'public_transport': 'TextEdit', 'wheelchair': 'TextEdit', 'not:network:wikidata': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'operator': 'TextEdit', });
lyr_busstops_14.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:state': 'TextEdit', 'addr:street': 'TextEdit', 'addr:suburb': 'TextEdit', 'bench': 'TextEdit', 'bin': 'TextEdit', 'bus': 'TextEdit', 'highway': 'TextEdit', 'internet_access': 'TextEdit', 'name': 'TextEdit', 'network': 'TextEdit', 'network:wikidata': 'TextEdit', 'operator': 'TextEdit', 'public_transport': 'TextEdit', 'ref': 'TextEdit', 'shelter': 'TextEdit', '@relations': 'TextEdit', 'source': 'TextEdit', 'tactile_paving': 'TextEdit', 'wheelchair': 'TextEdit', 'check_date': 'DateTime', 'note': 'TextEdit', 'covered': 'TextEdit', 'lit': 'TextEdit', 'source:location': 'TextEdit', 'source:name': 'TextEdit', 'source:ref': 'TextEdit', 'route_ref': 'TextEdit', 'departures_board': 'TextEdit', 'local_ref': 'TextEdit', 'check_date:bin': 'DateTime', 'check_date:lit': 'DateTime', 'check_date:tactile_paving': 'DateTime', 'wheelchair:description': 'TextEdit', 'check_date:bench': 'DateTime', 'not:network:wikidata': 'TextEdit', 'survey:date': 'DateTime', 'waste_basket': 'TextEdit', 'check_date:shelter': 'DateTime', 'description': 'TextEdit', 'gtfs_id': 'TextEdit', 'lines': 'TextEdit', 'level': 'TextEdit', 'name:ko': 'TextEdit', 'services': 'TextEdit', 'addr:city': 'TextEdit', 'shelter_type': 'TextEdit', 'url': 'TextEdit', 'website': 'TextEdit', 'amenity': 'TextEdit', 'indoor': 'TextEdit', 'operator:wikidata': 'TextEdit', 'payment:coins': 'TextEdit', 'payment:telephone_cards': 'TextEdit', 'sms': 'TextEdit', 'addr:country': 'TextEdit', 'passenger_information_display': 'TextEdit', });
lyr_lightrailstationentrances_15.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'entrance': 'TextEdit', 'barrier': 'TextEdit', 'amenity': 'TextEdit', 'mapillary': 'TextEdit', 'material': 'TextEdit', 'waste': 'TextEdit', 'backrest': 'TextEdit', 'covered': 'TextEdit', 'emergency': 'TextEdit', 'indoor': 'TextEdit', 'operator': 'TextEdit', 'operator:wikidata': 'TextEdit', 'power': 'TextEdit', });
lyr_heavyrailstationentrances_16.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'level': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'toll': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'bollard': 'TextEdit', 'door': 'TextEdit', 'covered': 'TextEdit', 'indoor': 'TextEdit', 'public_transport': 'TextEdit', 'access': 'TextEdit', 'opening_hours': 'TextEdit', 'layer': 'TextEdit', 'ref': 'TextEdit', 'fee': 'TextEdit', 'operator': 'TextEdit', 'operator:wikidata': 'TextEdit', 'payment:contactless': 'TextEdit', 'fixme': 'TextEdit', });
lyr_10minutebiketoheavylightrailstationswharvesandbusstops_2.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktoheavylightrailstationswharvesandbusstops_3.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketoferrywharves_4.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktoferrywharves_5.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketobusstops_6.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktobusstops_7.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketolightrailstations_8.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktolightrailstations_9.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutebiketoheavyrailstations_10.set('fieldLabels', {'group_id': 'no label', });
lyr_10minutewalktoheavyrailstations_11.set('fieldLabels', {'group_id': 'no label', });
lyr_heavyandlightrailstationentrancesferrywharvesandbusstops_12.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'amenity': 'no label', 'fare_gates': 'no label', 'ferry': 'no label', 'local_ref': 'no label', 'name': 'no label', 'public_transport': 'no label', 'wheelchair': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'addr:state': 'no label', 'addr:street': 'no label', 'addr:suburb': 'no label', 'bench': 'no label', 'bin': 'no label', 'bus': 'no label', 'highway': 'no label', 'internet_access': 'no label', 'network': 'no label', 'network:wikidata': 'no label', 'operator': 'no label', 'ref': 'no label', 'shelter': 'no label', '@relations': 'no label', 'source': 'no label', 'not:network:wikidata': 'no label', 'website': 'no label', 'tactile_paving': 'no label', 'check_date': 'no label', 'note': 'no label', 'covered': 'no label', 'lit': 'no label', 'source:location': 'no label', 'source:name': 'no label', 'source:ref': 'no label', 'route_ref': 'no label', 'departures_board': 'no label', 'check_date:bin': 'no label', 'check_date:lit': 'no label', 'check_date:tactile_paving': 'no label', 'wheelchair:description': 'no label', 'check_date:bench': 'no label', 'survey:date': 'no label', 'waste_basket': 'no label', 'check_date:shelter': 'no label', 'description': 'no label', 'gtfs_id': 'no label', 'level': 'no label', 'entrance': 'no label', 'lines': 'no label', 'barrier': 'no label', 'toll': 'no label', 'name:ko': 'no label', 'services': 'no label', 'addr:city': 'no label', 'shelter_type': 'no label', 'url': 'no label', 'mapillary': 'no label', 'material': 'no label', 'waste': 'no label', 'backrest': 'no label', 'emergency': 'no label', 'indoor': 'no label', 'operator:wikidata': 'no label', 'power': 'no label', 'bollard': 'no label', 'door': 'no label', 'access': 'no label', 'opening_hours': 'no label', 'layer': 'no label', 'fee': 'no label', 'payment:contactless': 'no label', 'fixme': 'no label', 'payment:coins': 'no label', 'payment:telephone_cards': 'no label', 'sms': 'no label', 'addr:country': 'no label', 'passenger_information_display': 'no label', });
lyr_ferrywharves_13.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'amenity': 'no label', 'fare_gates': 'no label', 'ferry': 'no label', 'local_ref': 'no label', 'name': 'no label', 'public_transport': 'no label', 'wheelchair': 'no label', 'not:network:wikidata': 'no label', 'ref': 'no label', 'website': 'no label', 'operator': 'no label', });
lyr_busstops_14.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'addr:state': 'no label', 'addr:street': 'no label', 'addr:suburb': 'no label', 'bench': 'no label', 'bin': 'no label', 'bus': 'no label', 'highway': 'no label', 'internet_access': 'no label', 'name': 'no label', 'network': 'no label', 'network:wikidata': 'no label', 'operator': 'no label', 'public_transport': 'no label', 'ref': 'no label', 'shelter': 'no label', '@relations': 'no label', 'source': 'no label', 'tactile_paving': 'no label', 'wheelchair': 'no label', 'check_date': 'no label', 'note': 'no label', 'covered': 'no label', 'lit': 'no label', 'source:location': 'no label', 'source:name': 'no label', 'source:ref': 'no label', 'route_ref': 'no label', 'departures_board': 'no label', 'local_ref': 'no label', 'check_date:bin': 'no label', 'check_date:lit': 'no label', 'check_date:tactile_paving': 'no label', 'wheelchair:description': 'no label', 'check_date:bench': 'no label', 'not:network:wikidata': 'no label', 'survey:date': 'no label', 'waste_basket': 'no label', 'check_date:shelter': 'no label', 'description': 'no label', 'gtfs_id': 'no label', 'lines': 'no label', 'level': 'no label', 'name:ko': 'no label', 'services': 'no label', 'addr:city': 'no label', 'shelter_type': 'no label', 'url': 'no label', 'website': 'no label', 'amenity': 'no label', 'indoor': 'no label', 'operator:wikidata': 'no label', 'payment:coins': 'no label', 'payment:telephone_cards': 'no label', 'sms': 'no label', 'addr:country': 'no label', 'passenger_information_display': 'no label', });
lyr_lightrailstationentrances_15.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'entrance': 'no label', 'barrier': 'no label', 'amenity': 'no label', 'mapillary': 'no label', 'material': 'no label', 'waste': 'no label', 'backrest': 'no label', 'covered': 'no label', 'emergency': 'no label', 'indoor': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'power': 'no label', });
lyr_heavyrailstationentrances_16.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'level': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'toll': 'no label', 'entrance': 'no label', 'wheelchair': 'no label', 'bollard': 'no label', 'door': 'no label', 'covered': 'no label', 'indoor': 'no label', 'public_transport': 'no label', 'access': 'no label', 'opening_hours': 'no label', 'layer': 'no label', 'ref': 'no label', 'fee': 'no label', 'operator': 'no label', 'operator:wikidata': 'no label', 'payment:contactless': 'no label', 'fixme': 'no label', });
lyr_heavyrailstationentrances_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});