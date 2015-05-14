/*define all variables*/
var dotStep; // for global scope [use in setDotStep(), prevSlide and nextSlide]
var carouselWrapperWidth = $(".carouselWrapperWidth").innerWidth(); //for setDotStep()
var hiddenSlides; //for setDotStep()

var prevSlide, nextSlide;
var dotMarginLeft, carouselMarginLeft; // for global scope [use in prevSlide and nextSlide]


/*functions for carousel*/
function setDotStep() {
    hiddenSlides = $('.hc-carousel-ul li').length;
    switch (carouselWrapperWidth) {
        case 190:
            hiddenSlides -= 1;
            console.log('case 1');
            break;
        case 380:
            hiddenSlides -= 2;
            console.log('case 2');
            break;
        case 570:
            hiddenSlides -= 3;
            console.log('case 3');
            break;
        case 760:
            hiddenSlides -= 4;
            console.log('case 4');
            break;
        case 1140:
            hiddenSlides -= 6;
            console.log('case 6');
            break;
        default:
        console.log('something wrong with .carouselWrapperWidth {width}');
            return false
    }
    dotStep = 100 / hiddenSlides;
};

function setValues() {
    dotMarginLeft = '0%';
    carouselMarginLeft = '0px';
    document.getElementById("hc-indicator").style.marginLeft = dotMarginLeft;
    $(".carouselHappyInner").css('marginLeft', carouselMarginLeft);
    setDotStep();
}


prevSlide = function () {
    if (parseInt(dotMarginLeft) <= 0) { //stop slide and reset counter after meet zero
        prevSlideCounter = 0;
    }
    else {
        /*set dot margin*/
        dotMarginLeft = (parseFloat(dotMarginLeft) - dotStep) + '%';
        document.getElementById("hc-indicator").style.marginLeft = dotMarginLeft;
        /*set carousel margin*/
        carouselMarginLeft = (parseInt(carouselMarginLeft) + 190) + 'px';
        $(".carouselHappyInner").css('margin-left', carouselMarginLeft);
    }
};

nextSlide = function () {
    if (parseInt(dotMarginLeft) >= 97) { //stop slide and reset counter after meet 100
        nextSlideCounter = 0;
    }
    else {
        /*set dot margin*/
        dotMarginLeft = (parseFloat(dotMarginLeft) + dotStep) + '%';
        document.getElementById("hc-indicator").style.marginLeft = dotMarginLeft;
        /*set carousel margin*/
        carouselMarginLeft = (parseInt(carouselMarginLeft) - 190) + 'px';
        $(".carouselHappyInner").css('margin-left', carouselMarginLeft);
    }
};

function resize() { //reset values when changing number of visible slides
    var currentCarouselWrapperWidth = $('.carouselWrapperWidth').innerWidth();
    if (carouselWrapperWidth != currentCarouselWrapperWidth) {
        setValues();
        carouselWrapperWidth = $('.carouselWrapperWidth').innerWidth();
    }
    else {
        return false
    }
}


/*first load*/
(function () {
    console.log('first load');
    setDotStep();
    setValues();
    $('#hc-btn-left').click(prevSlide);
    $('#hc-btn-right').click(nextSlide);
    window.onresize = resize;
}());


/*


####PROBLEM OF REMEMBER CURRENT SLIDE-CLIENT BEFORE RESIZING (may be its not important)#####

*/
/*code for define all variables*//*

var prevSlideCounter, nextSlideCounter; //set params for counters

*/
/*code for functions for carousel*//*

function setValues() {
    prevSlideCounter = 0;
    nextSlideCounter = 0;
}

prevSlide = function () {
    */
/*changing click counters*//*

    prevSlideCounter++;
    nextSlideCounter--;
}

nextSlide = function () {
    */
/*changing click counters*//*

    nextSlideCounter++;
    prevSlideCounter--;
}


function resetDotIndicator() {
    */
/*reset dotMarginLeft *//*

    if (prevSlideCounter == 0 && nextSlideCounter == 0) {
        console.log('ничего не изменилось счётчики по нулям');
    }
    if (prevSlideCounter > 0 && nextSlideCounter > 0) {
        console.log('оба индикатора больше нуля- сложный случай');
    }
    if (prevSlideCounter > 0 && nextSlideCounter <= 0) {
        console.log('листал назад но ниразу вперед не листал');
    }
    if (prevSlideCounter <= 0 && nextSlideCounter > 0) {
        console.log('листал ВПЕРЕД но ниразу назад не листал');
    }
}*/
