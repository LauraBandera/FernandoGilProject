$(function() {
    var SliderModule = (function() {
        var pb = {}; //Creamos un objeto

        //Almacenamos nuestro #slider en el atributo elslider.
        pb.elslider = $('#slider');

        //El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li'),
        }

        //Declaramos las variables globales necesarias
        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        //Constructor del Slider
        pb.init = function(settings) {
            //Creamos la variable tipo string loscontroles
            var loscontroles = '';
            this.settings = settings || { duration: 3000 };

            //console.log('Inicializado');
            SliderInit(); //Para inicializar el slider

            /*
            for (var i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    loscontroles += '<li class="active"></li>';
                } else {
                    loscontroles += '<li></li>';
                }
            }

            //Insertamos los controles creados en el HTML
            $('#control-buttons').html(loscontroles);
            */
           
            $('#control-buttons li').click(function() {
                //Al hacer clic vemos en la consola en índice
                //console.log($(this).index());
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            });

            //Cambios en el slider
            $('.slider-wrapper li').hover(
                function() {
                    clearInterval(SliderInterval);
                },
                function() {
                    SliderInit();
                }
            );

            $('div.btnDer').click(function() {
                SliderRight();
            });

            $('div.btnIzq').click(function() {
                SliderLeft();
            });
        }

        //Función que mueve el slider a la izquierda
        var SliderLeft = function() {
            //Limpiamos el intervalo previamente.
            clearInterval(SliderInterval);

            var controles = $('#control-buttons li');
            var paneles = pb.items.panels;
            let next = currentSlider - 1;

            if (currentSlider <= 0) {
                next = lengthSlider - 1;
                currentSlider = 0;
            }

            //console.log(currentSlider + " " + nextSlider);

            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(next).addClass('active');
            controles.append("paneles.childre()[0]");
            //paneles.children()[0] == img

            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(next).fadeIn('slow');
            //Actualizamos las variables
            nextSlider = currentSlider;
            currentSlider = next;

            //Reactivamos los datos;
            SliderInit();
        }

        //Función que mueve el slider a la derecha
        var SliderRight = function() {
            //Limpiamos el intervalo previamente.
            clearInterval(SliderInterval);

            var controles = $('#control-buttons li');
            var paneles = pb.items.panels;

            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            //console.log(currentSlider + " " + nextSlider);

            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active');

            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            //Actualizamos las variables
            currentSlider = nextSlider;
            nextSlider++;

            //Reactivamos los datos;
            SliderInit();
        }

        //Función que inicializar el slider
        var SliderInit = function() {
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        pb.startSlider = function() {
            var paneles = pb.items.panels;

            //Creamos la varibale controles
            var controles = $('#control-buttons li');

            //Cada 3 segundos nos tiene que salir el mensaje
            //console.log('Mensaje');

            //Controlamos que el panel siempre se encuentre entre las opciones
            //En caso de que estemos en el último slider ponemos el siguiente a 0
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            //EFECTOS
            //Efectos bolitas
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active');

            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            //Cada 3 segundos nos tiene que salir el nextSlider
            //console.log(nextSlider);

            //Actualizamos las variables
            currentSlider = nextSlider;
            nextSlider++;
        }

        var cambiarPanel = function(indice) {
            //Limpiamos el intervalo previamente.
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            //Comprobamos que el índice esté disponible
            //dentro de los paneles del slider
            if (indice >= lengthSlider) {
                indice = 0; //Para que no se pase de la cantidad de imágenes disponibles
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            //Efectos
            //Efectos bolitas
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');

            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');

            //El siguiente panel del slider es el que indique el parámetro "indice"
            paneles.eq(indice).fadeIn('slow');

            //Actualizamos los datos
            currentSlider = indice;
            nextSlider = indice + 1;

            //Reactivamos los datos;
            SliderInit();
        }

        return pb; //Devolvemos el objeto pb

    }()); //() es para que se ejecute automáticamente.

    //Llamamos al constructor
    SliderModule.init();
    //SliderModule.init({ duration: 2000 });
});