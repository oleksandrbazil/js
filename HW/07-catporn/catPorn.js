/*#################### CAT PORN ####################*/

function addScript (src) {
    var addS;
    addS = document.createElement('script');
    if (src) {
        addS.setAttribute('src',src);
    }
    else {addS.setAttribute('src','js/catPornNew.js');
    };
    document.head.appendChild(addS);
    catPorn();
};



function catPorn () {
    var xxx,
        imgXXX,
        imgXXXX;
    xxx = document.createElement('div');
    xxx.setAttribute('style', 'content:"";width:100%; height:100%;overflow:hidden;background:black;position:fixed;top:0;text-align:center;');
    xxx.innerHTML += '<h1 id="catPornId">CAT PORN</h1>';//style="color:orangered"
    imgXXX = document.createElement('img');
    imgXXX.setAttribute('style','width:400px; height:300px; margin: 50px auto;');
    imgXXX.setAttribute('src','600x450.jpg');
    imgXXXX = document.createElement('img');
    imgXXXX.setAttribute('style','position:absolute; right: 30px; height: 150px; width: 112px; -webkit-transition: ease 6s;');
    imgXXXX.setAttribute('src','338x450.jpg');
    imgXXXX.setAttribute('id','kissa');
    xxx.appendChild(imgXXX);
    xxx.appendChild(imgXXXX);
    xxx.innerHTML += '<h1 style="color:orangered" onclick="catPornText()">WAITING FOR YOU</h1>';
    document.body.appendChild(xxx);
};

function rgbaToSet (r,g,b,a) { // для правильного преобразования rgba в нужных интервалах.
    var i;
    for (i = 0; i < 3; i++) {
        arguments[i] = parseInt(arguments[i]);
        if (rgbaString == 'undefind') {
            console.log('подготовка к определению переменной');
            rgbaString = [0,0,0,1];
            console.log('переменная определена, теперь проверим');
            /*return rgbaString;*/
        };
        if (isNaN(arguments[i]) || arguments[i] < 0 || arguments[i] > 255) {
            arguments[i] = 0;
        };
        console.log(arguments[i] + ' проверка №' + i + '---' + typeof arguments[i]);
        if (0 <= arguments[3] && arguments[3] <= 1.00) {
            console.log(arguments[3] + 'правильный промежуток');
        }
        else {arguments[3] = 1}; //непойму когда происходит parseInt[3] аргумента, по идее она не должна проводиться??
        rgbaObj = arguments;
        return arguments;
    };
};
function rgbaToString () {
    rgbaString = 'rgba(' + rgbaObj[0] + ',' + rgbaObj[1] + ',' + rgbaObj[2] + ',' + rgbaObj[3] +')';
    return rgbaString;
};
var rgbaObj, rgbaString;
function rgbaDynamic (){
    var i = 0,
        rgbaInterval;
    rgbaInterval = setInterval (
        function(){
            console.log(rgbaObj[0]);
            rgbaObj[0] += 5;
            rgbaObj[0] = parseInt(rgbaObj[0]);
            rgbaToString();
            document.getElementById('catPornId').style.color = rgbaString;
            if (rgbaObj[0] >= 255) {
                console.log(rgbaObj[0] + ' больше 255 стоппэ');
                rgbaObj[0] = 140;
                rgbaToString();
                clearInterval(rgbaInterval);
                i++;
                if (i >= 10) {
                    clearInterval(rgbaInterval);
                    rgbaObj[0] = 255;
                };
            };
        },10);
};


var topKissa;
function catPornText () {
    var kissa;
    rgbaToSet (0,0,0,1);
    rgbaToString();
    rgbaDynamic();
    document.getElementById('catPornId').style.color = rgbaString;
    kissa = document.getElementById('kissa').
        kissa.style.top = topKissa;
    kissa.onclick = catKissa;


};
function catKissa() {
    var i;
    for (i = 70; i <= 600; ) {
        i++;
        topKissa = i + 'px';
        document.getElementById('kissa').style.top = topKissa;
        document.getElementById('kissa').style.transition = 'ease 5s';
        console.log('topKissa');

    };
};

