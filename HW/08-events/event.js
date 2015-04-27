/**
 * Created by Y0da on 27.04.2015.
 */
var Event = new function () {
   /* сделаем выпдающий список*/
    var homeworkList;
    homeworkList = document.querySelector('.box-l > ul > span');
    homeworkList.addEventListener('click', function () {
    }, false);

    this.hiddenText = function () {
        var txt = document.getElementById('text');
        txt.parentNode.removeChild(txt)
    };
    this.hiddenThemself = function () {
        var themself = document.getElementById('themselfID');
        themself.setAttribute('style', 'display:none');
    };
};