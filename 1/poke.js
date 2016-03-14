/**
 * Created by Gekka on 11/3/2016.
 */

function omg(){
    $('body, html').css('background-color', '#' + Math.random().toString(16).substr(-6));
}

function onoes(){
    var img = $('img');
    var randomHeight = Math.floor(Math.random() * ($(window).height()  - img.height()));
    var randomWidth = Math.floor(Math.random() * ($(window).width() - img.width()));
    img.css({
        'margin-top': randomHeight + 'px',
        'margin-left': randomWidth + 'px'})

}

$(document).ready(function(){
    setInterval(omg, 350);
    setInterval(onoes, 350)
});
