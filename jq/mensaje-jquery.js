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
            $("html, body").animate({ scrollTop: "0" });
            $("html, body").css({ overflowY: "visible" });
        }
    );

    //Ocultamos el menú al redimensionar la página
    $(window).resize(function() {
        $("div#menu-lateral").stop(true);
        $("div#menu-lateral").fadeOut();
        $("html, body").css({ overflowY: "visible" });
    });

    //Cambiamos de color el botón al colocar el ratón encima
    $("button").hover(function() {
        // over
        $(this).css({ backgroundColor: "#08463A" });
    }, function() {
        // out
        $(this).css({ backgroundColor: "#1B5E4F" });
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

    //Comprobamos los campos requeridos
    $("button#button-enviar").on("click", function(e) {
        e.preventDefault();
        if($("input[type=text]").val().length == 0){
            $(this).siblings("span").first().css({display: "block"});
        }else {
            $(this).siblings("span").first().css({display: "none"});
        }
        
        if($("textarea").val().length == 0){
            $(this).siblings("span").eq(1).css({display: "block"});
        }else{
            $(this).siblings("span").eq(1).css({display: "none"});
        }

        if(!$("input[type=checkbox]").prop("checked")){
            $(this).siblings("span").last().css({display: "block"});
        }else {
            $(this).siblings("span").last().css({display: "none"});
        }
        
        if($("input[type=text]").val().length != 0 && $("textarea").val().length != 0 
                && $("input[type=checkbox]").val().length != 0 
                && $("input[type=checkbox]").prop("checked")){
            $("span#confirmacion").css({display: "block"});
        }else{
            $("span#confirmacion").css({display: "none"});
        }
    });

});