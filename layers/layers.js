var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EstadodeCampeche_2 = new ol.format.GeoJSON();
var features_EstadodeCampeche_2 = format_EstadodeCampeche_2.readFeatures(json_EstadodeCampeche_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadodeCampeche_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadodeCampeche_2.addFeatures(features_EstadodeCampeche_2);
var lyr_EstadodeCampeche_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstadodeCampeche_2, 
                style: style_EstadodeCampeche_2,
                popuplayertitle: 'Estado de Campeche',
                interactive: true,
                title: '<img src="styles/legend/EstadodeCampeche_2.png" /> Estado de Campeche'
            });
var format_PuntosdeTransporte_3 = new ol.format.GeoJSON();
var features_PuntosdeTransporte_3 = format_PuntosdeTransporte_3.readFeatures(json_PuntosdeTransporte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosdeTransporte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuntosdeTransporte_3.addFeatures(features_PuntosdeTransporte_3);
var lyr_PuntosdeTransporte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuntosdeTransporte_3, 
                style: style_PuntosdeTransporte_3,
                popuplayertitle: 'Puntos de Transporte',
                interactive: true,
                title: '<img src="styles/legend/PuntosdeTransporte_3.png" /> Puntos de Transporte'
            });

lyr_GoogleTerrainHybrid_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_EstadodeCampeche_2.setVisible(true);lyr_PuntosdeTransporte_3.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatelliteHybrid_1,lyr_EstadodeCampeche_2,lyr_PuntosdeTransporte_3];
lyr_EstadodeCampeche_2.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', });
lyr_PuntosdeTransporte_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_EstadodeCampeche_2.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_PuntosdeTransporte_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_EstadodeCampeche_2.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'no label', });
lyr_PuntosdeTransporte_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_PuntosdeTransporte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});