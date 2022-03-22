$(function() {

    //Mostramos el menú lateral al hacer click en la hamburguesa
    $("header > div#cabecera > div#hamburger").on(
        "click",
        function(e) {
            e.preventDefault();
            //Mostramos el menú lateral
            $("div#menu-lateral").stop(true);
            $("div#menu-lateral").fadeIn();
            $("html, body").animate({ scrollTop: "0" });
            $("html, body").css({ overflowY: "hidden" });
        }
    );

    //Quitamos el menú al hacer click en la cruz dentro del mismo
    $("div#menu-lateral > ul > li img#cross").on(
        "click",
        function(e) {
            e.preventDefault();
            //Escondemos el menú lateral
            $("div#menu-lateral").stop(true);
            $("div#menu-lateral").fadeOut();
            $("html, body").css({ overflowY: "visible" });
        }
    );

    //Ocultamos el menú al redimensionar la página
    $(window).resize(function() {
        $("div#menu-lateral").stop(true);
        $("div#menu-lateral").fadeOut();
        $("html, body").css({ overflowY: "visible" });

        //Volvemos al principio del formulario de reservar pista
        if ($(window).width() > 600) {
            $("div#calendar-wrapper2").css({ display: "block" });
            $("div#reserva").css({ display: "block" });
            $("div#datos").css({ display: "block" });
            $("div#confirmacion").css({ display: "none" });
            $("div#contenido").css({ alignItems: "flex-end", justifyContent: "flex-end" });
         }
         else {
            $("div#calendar-wrapper2").css({ display: "block" });
            $("div#reserva").css({ display: "block" });
            $("div#datos").css({ display: "none" });
            $("div#confirmacion").css({ display: "none" });
            $("div#contenido").css({ alignItems: "flex-end", justifyContent: "flex-end" });
         }
    });

    //Al hacer un poco scroll sobre la página aparecerá la flecha "go-up" en la 
    //parte inferior derecha con un efecto de cambio opacidad
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#go-up").fadeIn();
            //Al hacer scroll la cabecera quedará fija con algo de opacidad
            $("header").css({ position: "fixed", width: "100%", opacity: "0.8" });
        } else {
            $("#go-up").fadeOut();
            //Al hacer scroll la cabecera quedará fija con algo de opacidad
            $("header").css({ position: "relative", width: "100%", opacity: "1" });
        }
    });

    //Al hacer click sobre la flecha nos posicionamos al principio con un efecto de animación
    $("#go-up").on("click", function() {
        $("html, body").animate({ scrollTop: "0" });
    });

    //Calendario
    var defaultConfig = {
        weekDayLength: 1,
        date: '08/05/2021',
        onClickDate: selectDate,
        showYearDropdown: true,
        startOnMonday: false,
    };

    function selectDate(date) {
        $('#calendar-wrapper2').updateCalendarOptions({
            date: date
        });
    }
    $('#calendar-wrapper2').calendar(defaultConfig);

    //Cambiamos el color del botón al hacer hover
    $("div#datos > form > button").hover(function() {
        // over
        $(this).css({ backgroundColor: "#08463A" });
    }, function() {
        // out
        $(this).css({ backgroundColor: "#1B5E4F" });
    });

    //Cambiamos los clicks en lo botones del formulario
    $("div#reserva > form#form-reserva > div > button").on("click", function(e) {
        // over
        e.preventDefault();
        $(this).siblings().css({ backgroundColor: "#1B5E4F" })
        $(this).css({ backgroundColor: "#601004" });
    });

    //Mostramos la siguiente parte del formulario en la versión móvil al hacer click en siguiente
    $("button#button-siguiente").on("click", function(e) {
        e.preventDefault();
        $("div#reserva").css({ display: "none" });
        $("div#calendar-wrapper2").css({ display: "none" });
        $("div#datos").css({ display: "block" });
    });

    //Mostramos la información de la reserva al hacer click en el botón enviar
    $("button#button-envio").on("click", function(e) {
        e.preventDefault();
        if($("div#datos input[type=text]").val().length == 0){
            $(this).siblings("span").first().css({display: "block"});
        }else {
            $(this).siblings("span").first().css({display: "none"});
        }
        
        if($("div#datos input[type=email]").val().length == 0){
            $(this).siblings("span").eq(1).css({display: "block"});
        }else{
            $(this).siblings("span").eq(1).css({display: "none"});
        }
        
        if($("div#datos input[type=tel]").val().length == 0){
            $(this).siblings("span").last().css({display: "block"});
        }else{
            $(this).siblings("span").last().css({display: "none"});
        }
        
        if($("div#datos input[type=text]").val().length != 0 
                && $("div#datos input[type=email]").val().length != 0 
                && $("div#datos input[type=tel]").val().length != 0){
            $("div#datos").css({ display: "none" });
            $("div#reserva").css({ display: "none" });
            $("div#calendar-wrapper2").css({ display: "none" });
            $("div#confirmacion").css({ display: "block" });
            $("div#contenido").css({ alignItems: "center", justifyContent: "center" });
        } 
    });

    //Volvemos a la parte inicial del formulario en caso de pulsar el botón atrás
    $("button#button-atras").on("click", function(e) {
        e.preventDefault();
        $("div#datos").css({ display: "none" });
        $("div#calendar-wrapper2").css({ display: "block" });
        $("div#reserva").css({ display: "block" });
    });

});