/**
 * Created by Gekka on 14/3/2016.
 */

var main = function(){ // Flechitas no anda

    var same_sprite; // Verifica si el sprite actual viene de una direccion distinta
    var sprite = $('.sprite');
    var ms = 130;
    var accept_keys = true; // Para evitar animaciones asincronas
    var current_sprite = 0; // sprite que actualmente se esta mostrando en pantalla, debo pensar una forma mas linda


    $(document).keydown(function(e){
        if (accept_keys) {
            accept_keys = false;

            switch(e.keyCode) {
                case 87: // Arriba ↑ W
                case 38:
                    if (current_sprite > 3) {
                        current_sprite = 1;
                        same_sprite = false;
                    }
                    move("top", "-=10px", same_sprite);
                    same_sprite = true;
                    break;

                case 83: // Abajo ↓ S
                case 40:
                    if (current_sprite < 4 || current_sprite > 7) {
                        current_sprite = 5;
                        same_sprite = false;
                    }
                    move("top", "+=10px", same_sprite);
                    same_sprite = true;
                    break;

                case 68: // Derecha → D
                case 39:
                    if (current_sprite < 8 || current_sprite > 11) {
                        current_sprite = 9;
                        same_sprite = false;
                    }
                    move('left', '+=10px', same_sprite);
                    same_sprite = true;
                    break;

                case 65: // Izquierda ← A
                case 37:
                    if (current_sprite < 12) {
                        current_sprite = 13;
                        same_sprite = false;
                    }
                    move('left', '-=10px', same_sprite);
                    same_sprite = true;
                    break;
            }
        }
    });


    function next_sprite(current_sprite){
            if (current_sprite == 3) {
                current_sprite = 0;
            }

            else if (current_sprite == 7) {
                current_sprite = 4;
            }

            else if (current_sprite == 11) {
                current_sprite = 8;
            }

            else if (current_sprite == 15) {
                current_sprite = 12;
            }
            else {
                current_sprite +=1;
            }

            return current_sprite
        }

    function change_sprite(current_sprite) {
        $('#serena_sprite').attr('class', 'sprite'); // elimino todas las clases excepto sprite, asi no haya 43843 de clases
        switch (current_sprite) { // puta mierda
            case 0:
                sprite.addClass('up1');
                break;
            case 1:
                sprite.addClass('up2');
                break;
            case 2:
                sprite.addClass('up3');
                break;
            case 3:
                sprite.addClass('up4');
                break;
            case 4:
                sprite.addClass('down1');
                break;
            case 5:
                sprite.addClass('down2');
                break;
            case 6:
                sprite.addClass('down3');
                break;
            case 7:
                sprite.addClass('down4');
                break;
            case 8:
                sprite.addClass('right1');
                break;
            case 9:
                sprite.addClass('right2');
                break;
            case 10:
                sprite.addClass('right3');
                break;
            case 11:
                sprite.addClass('right4');
                break;
            case 12:
                sprite.addClass('left1');
                break;
            case 13:
                sprite.addClass('left2');
                break;
            case 14:
                sprite.addClass('left3');
                break;
            case 15:
                sprite.addClass('left4');
                break;
        }
    }

    function move(direccion, pixeles, same_sprite){
        var sprite = $('.sprite');
        var dic = {};
        dic[direccion] = pixeles;

        if (same_sprite != false) {
            change_sprite(current_sprite);
            sprite.animate(dic, ms, function () {
                current_sprite = next_sprite(current_sprite);
                change_sprite(current_sprite);
                sprite.animate(dic, ms, function () {
                    accept_keys = true;
                    current_sprite = next_sprite(current_sprite);
                    console.log(Math.round(sprite.position().left));
                    console.log(Math.round(sprite.position().top));
                });
            })
        }
        else {
            accept_keys = true;
            change_sprite(current_sprite -1); // ...
        }

    }

};


$(document).ready(function(){
    main();
});
