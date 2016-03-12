/**
 * Created by Gekka on 11/3/2016.
 */

function omg(){
    var colores = ['#121723', 'crimson', 'blanchedalmond', 'cadetblue'];
    $('body, html').css('background-color', colores[Math.floor(Math.random() * colores.length)]);
}

$(document).ready(function(){
    setInterval(omg, 200);
});
