//graficas

$(function($){
    $('#graficasS').highcharts({
        title:{text:'Segidores'},
        xAxis:{categories:['Agoste','Septiempre','Octubre']},
        yAxis:{title:'Porsentaje %'},plotLines:[{value:0,width:1,color:'#808080'}],
        tooltip:{valueSuffix:'%'},
        legend:{layout:'vertical',align:'right',verticalAlign:'middle',borderWidth:0},
        series:[{name: 'Seguidores', data:[25,23,21]}]
    });
});

$(function($){
    $('#graficasV').highcharts({
        title:{text:'Ventas'},
        xAxis:{categories:['Agoste','Septiempre','Octubre']},
        yAxis:{title:'Porsentaje %'},plotLines:[{value:0,width:1,color:'#808080'}],
        tooltip:{valueSuffix:'%'},
        legend:{layout:'vertical',align:'right',verticalAlign:'middle',borderWidth:0},
        series:[{name: 'Ventas', data:[25,23,21]}]
    });
});