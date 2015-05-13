/*сначала определить ширину карусели*/

var carouselWidth, currentCarouselWidth;
carouselWidth = $(".hc-carousel-wrapper").innerWidth();
currentCarouselWidth = carouselWidth;

(function () {
/*    console.log('carouselWidth = ' + carouselWidth);
    console.log('currentCarouselWidth = ' + currentCarouselWidth);*/
}());

/*определим кол-во элементов в каруселе и установим максимальное значение для верчения карусели*/
var hiddenSlides = $('.hc-carousel-ul li').length;
var indicatorValue;
(function () {
    switch (carouselWidth) {
        case 200:
            /*console.log('carouselWidth = 200');*/
            hiddenSlides -= 1;
            /*return hiddenSlides;*/
            break;
        case 395:
            /*console.log('carouselWidth = 395');*/
            hiddenSlides -= 2;
            /*return hiddenSlides;*/
            break;
        case 590:
            /*console.log('carouselWidth = 590');*/
            hiddenSlides -= 3;
            /*return hiddenSlides;*/
            break;
        case 785:
            /*console.log('carouselWidth = 785');*/
            hiddenSlides -= 4;
            /*return hiddenSlides;*/
            break;
        case 1170:
            /*console.log('carouselWidth = 1170');*/
            hiddenSlides -= 6;
            /*return hiddenSlides;*/
            break;
        default:
            /*console.log('нестандартный размер');*/
    }
    indicatorValue = 100/hiddenSlides;
/*    console.log('кол-во спрятаных слайдов = ' + hiddenSlides);
    console.log('% для изменения индикатора = ' + indicatorValue);*/
}());

var newLeftValue, prevSlide, nextSlide;
/*define main variables*/
var dotIndicator = '0%';
var leftValue = '0px';
document.getElementById("hc-indicator").style.marginLeft = dotIndicator;
$(".hc-carousel-resizer").css('marginLeft', leftValue);



prevSlide = function () {
    if (parseInt(dotIndicator) <= 0) {
        /*console.log('новое значение равно нулю -- тупик = ' + dotIndicator);*/
    }
    else {
        dotIndicator = parseFloat(dotIndicator) - indicatorValue;
        dotIndicator += '%';
        /*console.log('новое значение dotIndicator = ' + dotIndicator);*/
        document.getElementById("hc-indicator").style.marginLeft = dotIndicator;
        /*console.log('сейчас значение dotIndicator= ' + dotIndicator);*/
        /*устанавливает значение dotIndicator*/
        newLeftValue = parseInt(leftValue) + 195;
        newLeftValue += "px";
        leftValue = newLeftValue;
        $(".hc-carousel-resizer").css('margin-left', leftValue);

    }
};

nextSlide = function () {
    if (parseInt(dotIndicator) >= 97) {
        /*console.log('новое значение margin близко к 100 -- тупик = ' + dotIndicator);*/
    }
    else {
        dotIndicator = parseFloat(dotIndicator) + indicatorValue;
        dotIndicator += '%';
        /*console.log('новое значение dotIndicator = ' + dotIndicator);*/
        document.getElementById("hc-indicator").style.marginLeft = dotIndicator;
        /*console.log('сейчас значение dotIndicator= ' + dotIndicator);*/
        /*устанавливает значение dotIndicator*/
        newLeftValue = parseInt(leftValue) - 195;
        newLeftValue += "px";
        leftValue = newLeftValue;
        $(".hc-carousel-resizer").css('margin-left', leftValue);
    }
};

$('#hc-btn-left').click(prevSlide);
$('#hc-btn-right').click(nextSlide);