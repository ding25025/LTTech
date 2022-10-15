

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $(".attr,.size").on("click", function () {
        var clase = $(this).attr("class");

        $("." + clase).removeClass("active");
        $(this).addClass("active");

        var to_slide = $(this).attr("data-slide-to");
        $(".carousel-item [data-slide-no=" + parseInt(to_slide) + "]").addClass("active");
    })

    $(window).bind('scroll', function () {
        var navHeight = 300; // custom nav height
        ($(window).scrollTop() > navHeight) ? $('nav').addClass('goToTop') : $('#nav').removeClass('goToTop');
    });


    /**
    * Get Year
    */
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("getYear").innerHTML = year;
});


$('.modal').on('show.bs.modal', function () {
    $(this).show();
    setModalMaxHeight(this);
});

$(window).resize(function () {
    if ($('.modal.in').length != 0) {
        setModalMaxHeight($('.modal.in'));
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}