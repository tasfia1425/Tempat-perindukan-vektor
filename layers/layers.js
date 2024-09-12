var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);
var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_1.png" /> Jalan'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Pasirkaliki_3 = new ol.format.GeoJSON();
var features_Pasirkaliki_3 = format_Pasirkaliki_3.readFeatures(json_Pasirkaliki_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasirkaliki_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasirkaliki_3.addFeatures(features_Pasirkaliki_3);
var lyr_Pasirkaliki_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasirkaliki_3, 
                style: style_Pasirkaliki_3,
                popuplayertitle: "Pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/Pasirkaliki_3.png" /> Pasirkaliki'
            });
var format_Buffering_4 = new ol.format.GeoJSON();
var features_Buffering_4 = format_Buffering_4.readFeatures(json_Buffering_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffering_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffering_4.addFeatures(features_Buffering_4);
var lyr_Buffering_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffering_4, 
                style: style_Buffering_4,
                popuplayertitle: "Buffering ",
                interactive: true,
                title: '<img src="styles/legend/Buffering_4.png" /> Buffering '
            });
var format_TitikPerindukanVektor_5 = new ol.format.GeoJSON();
var features_TitikPerindukanVektor_5 = format_TitikPerindukanVektor_5.readFeatures(json_TitikPerindukanVektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPerindukanVektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPerindukanVektor_5.addFeatures(features_TitikPerindukanVektor_5);
var lyr_TitikPerindukanVektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPerindukanVektor_5, 
                style: style_TitikPerindukanVektor_5,
                popuplayertitle: "Titik Perindukan Vektor",
                interactive: true,
                title: '<img src="styles/legend/TitikPerindukanVektor_5.png" /> Titik Perindukan Vektor'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Pasirkaliki_3.setVisible(true);lyr_Buffering_4.setVisible(true);lyr_TitikPerindukanVektor_5.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_Jalan_1,lyr_Sungai_2,lyr_Pasirkaliki_3,lyr_Buffering_4,lyr_TitikPerindukanVektor_5];
lyr_Jalan_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Sungai_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pasirkaliki_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffering_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TitikPerindukanVektor_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', });
lyr_Jalan_1.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_Sungai_2.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Pasirkaliki_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffering_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TitikPerindukanVektor_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'tessellate': '', 'extrude': '', 'visibility': '', });
lyr_Jalan_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pasirkaliki_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffering_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikPerindukanVektor_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', });
lyr_TitikPerindukanVektor_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});