$(function() {

    //Mostramos el menú lateral al hacer click en la hamburguesa
    $("header > div#cabecera > div#hamburger").on(
        "click",
        function(e) {
            e.preventDefault();
            //Mostramos el menú lateral
            $("div#menu-lateral").stop(true);
            $("div#menu-lateral").fadeIn();
            $("html, body").css({ overflowY: "hidden" });
            $("html, body").animate({ scrollTop: "0" });
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
    });

    //Cerramos las cokies al hacer click sobre cualquiera de los dos botones
    $("div#contenido > div#cookies > div > button").on(
        "click",
        function(e) {
            e.preventDefault();
            //Quitamos las cookies
            $("div#contenido > div#cookies").fadeOut();
        }
    );

    //Cambiamos el color del botón al colocar el ratón encima
    $("button").hover(function() {
        // over
        $(this).css({ backgroundColor: "#08463A" });
    }, function() {
        // out
        $(this).css({ backgroundColor: "#1B5E4F" });
    });

    //Resaltamos el div con la información correspondiente de cada foto
    $("section > a").hover(function() {
        // over
        $(this).children("div.fondo-img-texto").css({ opacity: ".8" });
    }, function() {
        // out
        $(this).children("div.fondo-img-texto").css({ opacity: ".5" });
    });

    //Al hacer un poco scroll sobre la página aparecerá la flecha "go-up" en la 
    //parte inferior derecha con un efecto de cambio opacidad
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#go-up").fadeIn();
            //Al hacer scroll la cabecera quedará fija con algo de opacidad
            $("header").css({ position: "fixed", width: "100%", opacity: "0.8", backgroundColor: "white" });
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
});