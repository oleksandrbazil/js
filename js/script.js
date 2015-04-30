/*Created by Y0da on 29.03.2015. */
"use strict";

/*################### START ###################*/
/*#############################################*/
/*###############   MathTable   ###############*/
/*#############################################*/
/*#############################################*/
function mathTable() {
    var x, y, newDiv;
    for (x = 1, y = 2; y <= 9; y++) {
        newDiv = document.createElement('div');
        newDiv.className = 'mathTableDiv';
        newDiv.innerHTML += '<b> - ' + y + ' -</b><br>';
        while (x < 10) {
            ++x;
            newDiv.innerHTML += y + ' * ' + x + ' = ' + x * y + '<br>';
        }
        document.getElementsByClassName('popUp')[0].appendChild(newDiv);
        var x = 1;
    };
};

/*################### START ###################*/
/*#############################################*/
/*#########   GETMIN & GETMAX & POW  ##########*/
/*#############################################*/
/*#############################################*/
var Analize = new function () {
    this.data = [532,6743,765,'подстава',1,213,532,7,4237,-93,-123,function(){alert('ОЛОЛОЛО... последний аргумент в массиве - функция')}];
    this.getMax = function (massive) {
        var massive, i, n;
        massive = this.data;
        console.log('элемент = ' + massive[i]);
        console.log('длинна = ' + massive[massive.length]);
        for (i = 0,  n = 0; massive[i] !== massive[massive.length]; i++) {

            if (n <= parseInt(massive[i])) {
                n = massive[i];
                            console.log('элемент ' + i);
                 console.log('длинна ' + massive.length);
            };
        }
        if (typeof massive[massive.length - 1] == 'function') {
            /*console.log('последний аргумент функция');*/
            (massive[massive.length - 1])();

        }
        return n;
    };
    this.getMin = function (massive) {
        var massive, i, n;
        massive = this.data;
        for (i = 0,  n = 0; massive[i] !== massive[massive.length]; i++) {
            if (n >= parseInt(massive[i])) {
                n = massive[i];
            };
        }
        if (typeof massive[massive.length - 1] == 'function') {
            (massive[massive.length - 1])();
        }
        return n;
    };
    this.powRecursion = function (x, y) {
        if (y != 1) {
            return x * this.powRecursion(x, y - 1);
        }
        else {
            return x;
        }
    }
};

/*################### START ###################*/
/*#############################################*/
/*#################   POPUP   #################*/
/*#############################################*/
/*#############################################*/
function openPopUp() {
    var newI,
        wrapperPopUp,
        popUp,
        divOne,
        divTwo;
    wrapperPopUp = document.createElement('div');
    wrapperPopUp.className = 'wrapperPopUp';
    popUp = document.createElement('div');
    popUp.className = 'popUp';
    newI = document.createElement('i');
    newI.setAttribute('onclick', 'this.parentNode.parentNode.remove()');
    divOne = document.createElement('div');
    divOne.className = 'divOne';
    divTwo = document.createElement('div');
    divTwo.className = 'divTwo';
    newI.appendChild(divOne);
    newI.appendChild(divTwo);
    popUp.appendChild(newI);
    wrapperPopUp.appendChild(popUp);
    document.body.appendChild(wrapperPopUp);
};

/*################### START ###################*/
/*#############################################*/
/*##############   CONSTRUCTOR   ##############*/
/*#############################################*/
/*#############################################*/
function Bstring(someWords) {//построение конструктора
    /*Свойства объекта*/
    var STRING_COUNTER = 0;
    for (var i in someWords) {
        this[STRING_COUNTER] = someWords[i];
        STRING_COUNTER++;
    }
    ;
    this.length = (function () {
        for (var i in someWords) {
        }
        ;
        return +i + 1;
    })();

    /*Методы Объекта*/
    this.toName = function (newname) { // присваивает имя переменной
        this.name = newname || someWords;
        return this.name;
    };

    this.valueOf = function () { // выдает значение заложеное в переменной
        return someWords;
    };

    this.toString = function () { //превращает значение в строковый тип данных
        return someWords + '';
    };

    this.charAtOld = function (input) {
        var char = parseInt(input);
        if (isNaN(char)) {
            return '';
        }
        else {
            return this[char];
        }
        ;
    };

    this.charAtNew = function (input) { // учитывает и минусовые значения
        var char = +(input);
        if (isNaN(char) || char <= -1) {
            return '';
        }
        else {
            return this[char];
        }
        ;
    };

    this.concat = function () {
        var n = 0;
        var concatination = someWords;
        while (arguments[n] !== undefined) {
            // как проверить на тип данных число?
            concatination += '' + arguments[n];
            n++;
        }
        ;
        if (typeof (arguments[n - 1]) == 'function') {
            (arguments[n - 1])();
        }
        else {
            return concatination;
        }
        ;
    };

    this.slice = function () {

        //думаю надо удалять элементы или присваивать undefined;
        someWords[0] = undefined;
        return someWords[0];
    };
};

var t = new String('kivi');
var k = new Bstring('kivi'); //почему в strict моде я все еще могу создавать глобальные переменные с таким именем?

/*################### START ###################*/
/*#############################################*/
/*###########   RANDOM BACKGROUND   ###########*/
/*#############################################*/
/*#############################################*/
var RANDOM_RGBA,
    RGBA,
    RGBA_obj,
    RGBA_new_obj; // нужны как глобальные переменные

RANDOM_RGBA = setInterval(function () {

    /*console.log('Этап №1 старт - декларирование первоначального RGBA');*/
    RGBA_obj = [0, 0, 0, 0];
    RGBA = 'rgba(0,0,0,0)';
    document.body.style.backgroundColor = RGBA;

    /*console.log('Этап №2 старт - генерация RGBA');*/
    (function setRandomRGBA() {  // функция генерирует случайный RGBA значение
        var i;
        for (i = 0; i < 3; i++) {
            arguments[i] = (Math.random() * (200 - 0) + 0).toFixed(0) - 0;// здесь 200 - это максимальное значение которое может получить каждое число RGBA
        }
        ;
        arguments[3] = Math.random().toFixed(2) - 0;
        RGBA_new_obj = arguments;
    }());

    /*console.log('Этап №3 старт - замена старого RGBA на новый ');*/
    rgbaUp(RGBA_obj);
}, 20000);

function rgbaUp(RGBA_obj) { //изменение текущих RGBA значений на новые
    var i;
    for (i = 0; i <= 2; i++) {
        /*console.log('Этап №3 - ФОР цыкл запустился. ' + 'Показатели: Старый:' + RGBA_obj[i] + '  Новый: ' + RGBA_new_obj[i]);*/
        if (RGBA_obj[i] < RGBA_new_obj[i]) {
            for (; RGBA_obj[i] != RGBA_new_obj[i];) {
                /*console.log('Этап №3.1 - RGBA_obj < RGBA_new_obj: При этом RGBA_obj ='  + RGBA_obj[i] + 'RGBA_new_obj =  '+ RGBA_new_obj[i]);*/
                RGBA_obj[i]++;
                RGBA_obj[3] = RGBA_new_obj[3];
                RGBA = 'rgba(' + RGBA_obj[0] + ',' + RGBA_obj[1] + ',' + RGBA_obj[2] + ',' + RGBA_obj[3] + ')';
                document.body.style.backgroundColor = RGBA;
            }
            ;
        }
        if (RGBA_obj[i] > RGBA_new_obj[i]) {
            for (; RGBA_obj[i] != RGBA_new_obj[i];) {
                /*console.log('Этап №3.2 - RGBA_obj > RGBA_new_obj: При этом RGBA_obj ='  + RGBA_obj[i] + 'RGBA_new_obj =  '+ RGBA_new_obj[i]);*/
                RGBA_obj[i]++;
                RGBA_obj[3] = RGBA_new_obj[3];
                RGBA = 'rgba(' + RGBA_obj[0] + ',' + RGBA_obj[1] + ',' + RGBA_obj[2] + ',' + RGBA_obj[3] + ')';
                document.body.style.backgroundColor = RGBA;
            }
            ;
        }
        else {
            /*console.log('Этап №3.3 - случай else сработал' + RGBA_obj[i]);*/
            RGBA_obj[i] = RGBA_new_obj[i];
            RGBA = 'rgba(' + RGBA_obj[0] + ',' + RGBA_obj[1] + ',' + RGBA_obj[2] + ',' + RGBA_obj[3] + ')';
            document.body.style.backgroundColor = RGBA;
        }
    }
    ;
};
