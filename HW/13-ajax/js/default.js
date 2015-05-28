/**
 * Created by Y0da on 28.05.2015.
 */



/*############################################################*/
/*###################### COOKIE AND ##########################*/
/*#################### LOCAL STORAGE #########################*/
/*############################################################*/

/*############################################################*/
/*###################### FUNCTIONS ###########################*/
/*############################################################*/

function getCookie(name) { //copy-past было бы круто рабозраться как выдираеться значение
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, count, countValue) {
    if (name == undefined || value == undefined) {
        return false;
    } else {
        var newExpires = new Date();
        newExpires.setFullYear(newExpires.getFullYear() + 2);
        newExpires = newExpires.toUTCString();

        if (count == 'count') {
            var newValue = parseInt(getCookie(name)) + parseInt(countValue);
            document.cookie = ( name + '=' + newValue + '; expires =' + newExpires);
        } else {
            document.cookie = (name + '=' + value + '; expires=' + newExpires);
        }
    }
}

function updateIndicators() {
    $('.cookie-visits').text(getCookie('visits'));
    $('.cookie-clicks').text(getCookie('clicks'));
    $('.cookie-answer').text(getCookie('answer'));
    $('.localStorage-visits').text(localStorage.visits);
    $('.localStorage-clicks').text(localStorage.clicks);
    $('.localStorage-answer').text(localStorage.answer);
}

function delCookie(name) {
    var dateCookie = new Date();
    dateCookie = dateCookie.toUTCString();
    document.cookie = (name + '=; expires=' + dateCookie);
}
function dellAllCookies() {
    delCookie('visits');
    delCookie('clicks');
    delCookie('answer');
    delCookie('answerTable');
}
function localStorageCounter(name) {
    var value = parseInt(localStorage.getItem(name));
    value += 1;
    localStorage.setItem(name, value);
}


function bildSimplePopUp() {
    /*1 уровень*/
    var modul = document.createElement("div");
    $(modul).attr('class', 'modal fade');
    $(modul).attr('tabindex', '-1');
    $(modul).attr('role', 'dialog');
    $(modul).attr('aria-labelledby', 'gopnikPopUp-IDLabel');
    $(modul).attr('aria-hidden', 'true');

    /*2 уровень*/
    var modul_dialig = document.createElement("div");
    $(modul_dialig).attr('class', 'modal-dialog');
    modul.appendChild(modul_dialig);

    /*3 уровень*/
    var modul_content = document.createElement("div");
    $(modul_content).attr('class', 'modal-content');
    modul_dialig.appendChild(modul_content);

    /*4.1 уровень*/
    var modul_header = document.createElement("div");
    $(modul_header).attr('class', 'modal-header');

    /*4.1.1-кнопка уровень*/
    var button_close = document.createElement('Button');
    $(button_close).attr('type', 'button');
    $(button_close).attr('class', 'close');
    $(button_close).attr('data-dismiss', 'modal');
    $(button_close).attr('aria-label', 'close');

    var button_close_span = document.createElement('span');
    $(button_close_span).attr('aria-hidden', 'true');
    $(button_close_span).html('\&times');
    button_close.appendChild(button_close_span);
    modul_header.appendChild(button_close);

    /*4.1.2-titile уровень*/
    var header_title = document.createElement('h4');
    $(header_title).attr('class', 'modal-title');
    $(header_title).attr('id', 'gopnikPopUp-IDLabel');

    modul_header.appendChild(header_title);
    modul_content.appendChild(modul_header);

    /*4.2 уровень*/
    var modul_body = document.createElement("div");
    $(modul_body).attr('class', 'modal-body');
    modul_content.appendChild(modul_body);

    /*4.3 уровень*/
    var modul_footer = document.createElement("div");
    $(modul_footer).attr('class', 'modal-footer');

    /*4.3.1-нопка закрыть */
    var button_ft_close = document.createElement('Button');
    $(button_ft_close).attr('type', 'button');
    $(button_ft_close).attr('class', 'btn btn-default');
    $(button_ft_close).attr('data-dismiss', 'modal');
    modul_footer.appendChild(button_ft_close);

    /*4.3.2-кнопка сохранить */
    var button_ft_save = document.createElement('Button');
    $(button_ft_save).attr('type', 'button');
    $(button_ft_save).attr('class', 'btn btn-primary');
    $(button_ft_save).attr('data-dismiss', 'modal');

    modul_footer.appendChild(button_ft_save);
    modul_content.appendChild(modul_footer);

    document.body.appendChild(modul);
}
function bildGopnikPopUp() {
    bildSimplePopUp();
    var popup = $('.modal.fade');
    popup.attr('id', 'gopnikPopUp-ID');
    $('#gopnikPopUp-IDLabel').text('ну здравствуй Братанчик!');
    $('.modal.fade .modal-body').html('Братик, выручи, дай ровному пацанчику на пивасик! <img src="http://risovach.ru/upload/2012/09/templ_1346834364_orig_Tipichnyj-gopnik.jpg" alt="Гопник">');
    $('.modal.fade .btn-primary').text('Дать денег');
    $('.modal.fade .btn-default').text('Послать гопника');
}
function bildInformPopUp() {
    bildSimplePopUp(); //
    var popup = $('.modal.fade');
    popup.attr('id', 'informPopUp-ID');
    $('#gopnikPopUp-IDLabel').text('Вам доступна следующая информация');
    $('#informPopUp-ID .btn-primary').text('Спасибо');
    $('#informPopUp-ID .btn-default').text('Не интересует');

    var newInformDiv = document.createElement('table');
    newInformDiv.setAttribute('class', 'inform-table table');
    function localStorageVariable() {
        var tdString = '';
        for (var i = 0; i <= localStorage.length; i++) {
            var key = localStorage.key(i);
            (key == null) ? console.log() : tdString += ('<tr class="active"><td colspan="2">' + key + '</td><td colspan="2">' + localStorage[key] + '</td><tr>');
        }
        return tdString;
    }

    function enECMA() {
        if (navigator.javaEnabled()) {
            return 'доступен'
        } else {
            return 'недоступен'
        }
    };
    function enCookie() {
        if (navigator.cookieEnabled) {
            return 'доступны'
        } else {
            return 'недоступны'
        }
    };
    newInformDiv.innerHTML =
        '<tr class="info"><th colspan="2" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">Параметр</th> <th colspan="2" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">Значение</th></tr>' +
        '<tr class="success"><td colspan="4">LOCAL STORAGE [KEY = VALUE]</td></tr>' +
        localStorageVariable() +
        '<tr class="success"><td colspan="4">NAVIGATOR options</td></tr>' +
        '<tr class="active"><td colspan="2">User Agent</td> <td colspan="2">' + navigator.userAgent + '</td></tr>' +
        '<tr class="active"><td colspan="2">User Language</td> <td colspan="2">' + navigator.language + '</td></tr>' +
        '<tr class="success"><td colspan="4">ENEBLING  options</td></tr>' +
        '<tr class="active"><td colspan="2">ECMA Script</td> <td colspan="2">' + enECMA() + '</td></tr>' +
        '<tr class="active"><td colspan="2">Cookie </td> <td colspan="2">' + enCookie() + '</td></tr>' +
        '<tr class="success"><td colspan="4">DISPLAY PARAMETERS</td></tr>' +
        '<tr class="active"><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3" >Device width, px</td> <td class="col-xs-3 col-sm-3 col-md-3 col-lg-3">' + window.outerWidth +
        '</td><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3">Screen width, px</td><td class="col-xs-3 col-sm-3 col-md-3 col-lg-3">' + screen.width + '</td>' +
        '<tr class="active"><td>Device height, px</td> <td>' + window.outerHeight +
        '</td><td>Screen height, px</td> <td>' + screen.height + '</td></tr>';
    $('#informPopUp-ID .modal-body').append(newInformDiv);
}
function buildButtonInfo() {
    var buttonTable = document.createElement('button');
    buttonTable.setAttribute('type', 'button');
    buttonTable.setAttribute('class', 'btn btn-info showInfoTable');
    buttonTable.setAttribute('style', 'position:absolute; right:0');
    buttonTable.innerHTML = ('<span class="glyphicon glyphicon-modal-window" aria-hidden="true"></span> Инфо');
    var ul = document.getElementById('cookie-ul-ID');
    ul.appendChild(buttonTable);
}


/*############################################################*/
/*################### DOCUMENT READY #########################*/
/*############################################################*/

$(document).ready(function () {

    /* define cookie data counters if it's not defined before*/
    if (getCookie('clicks') == undefined || getCookie('visits') == undefined) {
        setCookie('clicks', 0);
        setCookie('visits', 0);
        updateIndicators();
    }
    /* define localStorage data counters if it's not defined before*/
    if (localStorage.clicks == undefined || localStorage.visits == undefined) {
        localStorage.setItem('visits', '0');
        localStorage.setItem('clicks', '0');
        updateIndicators();
    }
    /* cheking for showing ingormPopUp*/
    if (localStorage.clicks >= 15 || getCookie('visits') >= 5) {

        if (getCookie('answerTable') !== 'Не интересует' || localStorage.answerTable !== 'Не интересует') {
            console.log('Пользователю ИНТЕРЕСНА информация');
            bildInformPopUp();
            $('#informPopUp-ID').modal('show');

        } else {
            buildButtonInfo();
        }
    } else {
        console.log('еще не доcтиг просмотров или кликов');

    }
    /*counting VISITS variable*/
    setCookie('visits', '', 'count', 1);
    localStorageCounter('visits');

    /*Checking answer for the dialog*/
    if (getCookie('answer') == undefined || getCookie('answer') == 'Игнорировал') {
        bildGopnikPopUp();
        $('#gopnikPopUp-ID').modal('show');
    }

    /* CLICKS Handler for cookies and localStorage*/
    $(document).on('click', function (event) {
        var target = event.target;
        switch (true) {
            case $(target).hasClass('clear-cookies'):
                dellAllCookies();
                localStorage.clear();
                break;
            case $(target).hasClass('showInfoTable'):
                if ($('#informPopUp-ID').length == 0) { //проверяю наличие постоенного попапа в DOM дереве
                    console.log('true');
                    bildInformPopUp()
                } else {
                    console.log('false');
                }
                $('#informPopUp-ID').modal('show');
                break;
            default:
                break;
        }
        setCookie('clicks', '', 'count', 1);
        localStorageCounter('clicks');
        updateIndicators();

    });

    $('#gopnikPopUp-ID').on('click', function (event) {
        var target = event.target;
        switch (true) {
            case $(target).hasClass('btn-default'):
                setCookie('answer', 'Послал');
                localStorage.setItem('answer', 'Послал');
                break;
            case $(target).hasClass('btn-primary'):
                setCookie('answer', 'Дал денег');
                localStorage.setItem('answer', 'Дал денег');
                break;
            default:
                setCookie('answer', 'Игнорировал');
                localStorage.setItem('answer', 'Игнорировал');
        }
        setCookie('clicks', '', 'count', 1);
        localStorageCounter('clicks');
        updateIndicators();
    });
    $('#informPopUp-ID').on('click', function (event) {
        var target = event.target;
        switch (true) {
            case $(target).hasClass('btn-default'):
                setCookie('answerTable', 'Не интересует');
                localStorage.setItem('answerTable', 'Не интересует');
                buildButtonInfo();
                break;
            case $(target).hasClass('btn-primary'):
                setCookie('answerTable', 'Спасибо');
                localStorage.setItem('answerTable', 'Спасибо');
                break;
            default:
                setCookie('answerTable', 'Игнорировал');
                localStorage.setItem('answerTable', 'Игнорировал');
        }
        setCookie('clicks', '', 'count', 1);
        localStorageCounter('clicks');
        updateIndicators();
    });

    updateIndicators(); //show indicators

    /*FUNCTIONS FOR CHANGING URL OF SITE*/
    $(window).on('hashchange', function () {
        var hash = document.location.hash;
        $.ajax({
            url: 'pages/' + hash.replace('#', '') + '.html',
            method: 'GET',
            success: function (data) {
                $('#content').html(data);
                $('.navbar-nav li').removeClass('active');
                $('a[href=' + hash + ']').parent().addClass('active');

                /*####################### SHOW/HIDE COMMENT BLOCK############################*/
                var commentBlock = document.getElementById('commentBlock');
                if (hash == '#comments') {
                    commentBlock.setAttribute('style', 'display:block');
                } else {
                    commentBlock.setAttribute('style', 'display:none');
                }
            }
        });
    });

    $(window).trigger('hashchange'); // Макс, если можешь дай комментарий по поводу этой комманды...


    /*FUNCTIONS FOR CREATING TABLE FOR STAFF PAGE*/
    $(document).on('click', '#getUsers', function () {
        var $getUsers = $('#getUsers');
        $getUsers.text('Loading ...');
        setTimeout(function () {
            $.ajax({
                url: "api/users.json",
                method: "GET",
                success: function (data) {
                    var $usersList = $('.usersList');
                    $usersList.html('');
                    $usersList.append(
                        '<tr class="info"> <th>#</th>' +
                        '<th> Прізвище </th>' +
                        '<th> Ім\'я </th>' +
                        '<th> Побатькові </th> </tr>'
                    );
                    for (var i in data) {
                        if (i % 2 == 0) {
                            $usersList.append(
                                '<tr>' +
                                '<td>' + (parseInt(i, 10) + 1) + '</td>' +
                                '<td>' + data[i].lastNameUKR + '</td>' +
                                '<td>' + data[i].firstNameUKR + '</td>' +
                                '<td>' + data[i].middleNameUKR + '</td>' +
                                '</tr>'
                            );
                        }
                        else {
                            $usersList.append(
                                '<tr class="active">' +
                                '<td>' + (parseInt(i, 10) + 1) + '</td>' +
                                '<td>' + data[i].lastNameUKR + '</td>' +
                                '<td>' + data[i].firstNameUKR + '</td>' +
                                '<td>' + data[i].middleNameUKR + '</td>' +
                                '</tr>'
                            );
                        }
                    }
                },
                error: function () {
                    alert('нихуяшечки');
                    console.log(arguments);
                },
                complete: function () {
                    $getUsers.text('Refresh');
                }
            });
        }, 1000);

    });


});








/*############################################################*/
/*############################################################*/
/*###################### COMMENTS  ###########################*/
/*############################################################*/
/*############################################################*/

/*functions */






$(document).ready(function () {
    var $savedComments = $('#savedComments');
    var commentsStorage = JSON.parse(localStorage.getItem('commentsStorage'));
    if (localStorage.commentID == undefined) {
        console.log('установим первоначальный счётчик комментариев');
        localStorage.commentID = 0;

    }

    if (!commentsStorage) {
        console.log('комментариев нету в Local Storage, по этому создаем пустой обьект');
        commentsStorage = [];
    } else {
        console.log('Найдены комментарии, добавим их на страницу');
        commentsStorage.forEach(function(eachComment){
            function adressTo () {
                if (commentsStorage.commentTarget == "") {
                    return '';
                } else {
                    return ('<strong>' + eachComment.commentTarget + ',</strong>');
                }
            }

            $savedComments.append(
                '<div class="comment" commentID="' + eachComment.commentID + '">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                        '<div class="comment-author col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
                            '<p>' + eachComment.commentAuthor + '</p>' +
                            '<img src="' + eachComment.commentUrl + '" alt="' + eachComment.commentAuthor + '"/> <br/>' +
                            '<span class="badge">' + eachComment.commentBadge + '</span> <br/>' +
                            '<button type="button" class="btn btn-success c-like"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>' +
                            '<button type="button" class="btn btn-danger c-dislike"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>' +
                        '</div>' +
                        '<div class="comment-body col-xs-12 col-sm-6 col-md-9 col-lg-9">' +
                            '<p>' + adressTo() + eachComment.commentText + '</p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                        '<div class="comment-author col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
                        eachComment.commentDate +
                        '</div>' +
                        '<div class="comment-buttons col-xs-12 col-sm-6 col-md-9 col-lg-9">' +
                            '<button type="button" class="btn btn-default c-answer">ANSWER <span class="glyphicon glyphicon-check" aria-hidden="true"></span></button>' +
                            '<button type="button" class="btn btn-danger c-delete">DELETE <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>' +
                            '<button type="button" class="btn btn-info c-hide">HIDE <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span></button>' +
                        '</div>' +
                    '</div>' +
                '</div>'
                );

        });

    }




    var $form = $('#createComment');
    $form.on('submit', function (event) {
        event.preventDefault();
        localStorageCounter('commentID');
        var commentID = localStorage.getItem('commentID');
        var $commentAuthor = $form.find('input[name="author"]');
        var $commentUrl = $form.find('input[name="url"]');
        var $commentText = $form.find('textarea[name="comment"]');
        var commentDate = new Date();
        var $commentTarget = $form.find('input[name="target"]');
        var commentBadge = 0;

        var commonComment = {
                "commentID": commentID,
                "commentAuthor": $commentAuthor.val(),
                "commentUrl": $commentUrl.val(),
                "commentText": $commentText.val(),
                "commentDate": commentDate.toUTCString(),
                "commentTarget": $commentTarget.val(),
                "commentBadge": commentBadge
            };
        commentsStorage.push(commonComment);
        localStorage.setItem('commentsStorage', JSON.stringify(commentsStorage));

        $commentAuthor.val('');
        $commentText.val('');
        $commentUrl.val('http://www.avatar-zone.com/Avatars/Simpsons/Simpsons-15.gif');
        $commentTarget.val('');
        function adressTo () {
            if (commonComment.commentTarget == "") {
                return '';
            } else {
                return ('<strong>' + commonComment.commentTarget + '\,</strong>');
            }
        }
        $savedComments.append(

            '<div class="comment" commentID="' + commonComment.commentID + '">' +
            '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
            '<div class="comment-author col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
            '<p>' + commonComment.commentAuthor + '</p>' +
            '<img src="' + commonComment.commentUrl + '" alt="' + commonComment.commentAuthor + '"/> <br/>' +
            '<span class="badge">' + commonComment.commentBadge + '</span> <br/>' +
            '<button type="button" class="btn btn-success c-like"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>' +
            '<button type="button" class="btn btn-danger c-dislike"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>' +
            '</div>' +
            '<div class="comment-body col-xs-12 col-sm-6 col-md-9 col-lg-9">' +
            '<p>' + adressTo () + commonComment.commentText + '</p>' +
            '</div>' +
            '</div>' +
            '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
            '<div class="comment-author col-xs-12 col-sm-6 col-md-3 col-lg-3">' +
            commonComment.commentDate +
            '</div>' +
            '<div class="comment-buttons col-xs-12 col-sm-6 col-md-9 col-lg-9">' +
            '<button type="button" class="btn btn-default c-answer">ANSWER <span class="glyphicon glyphicon-check" aria-hidden="true"></span></button>' +
            '<button type="button" class="btn btn-danger c-delete">DELETE <span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>' +
            '<button type="button" class="btn btn-info c-hide">HIDE <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span></button>' +
            '</div>' +
            '</div>' +
            '</div>'
        );



    });

    var $comment = $('.comment');
    $comment.on('click', function (event) {
        console.log('start event leastener');
        var target = event.target;
        var commentID = $(target).parents('.comment').attr('commentID');
        
        var commentKEY = commentID-1;
        var commentsStorage = JSON.parse(localStorage.commentsStorage);

        var author = commentsStorage[commentKEY].commentAuthor;
        var $bagde = commentsStorage[commentKEY].commentBadge;
        var $spanBadge = $('.comment[commentid=' + commentID +'] .badge');
        switch (true) {

            case ($(target).hasClass('c-like') || $(target).hasClass('glyphicon-thumbs-up')):
                console.log('like' + commentKEY);
                console.log(commentsStorage[commentKEY]);
                $bagde = parseInt($bagde) + 1;
                commentsStorage[commentKEY].commentBadge = $bagde;
                localStorage.commentsStorage = JSON.stringify(commentsStorage);
                $spanBadge.html($bagde);
                $spanBadge.innerHTML = $bagde;
                console.log($spanBadge);

                break;
            case ($(target).hasClass('c-dislike') || $(target).hasClass('glyphicon-thumbs-down')):
                console.log('dislike' + commentKEY);
                console.log(commentsStorage[commentKEY]);
                $bagde = parseInt($bagde) - 1;
                commentsStorage[commentKEY].commentBadge = $bagde;
                localStorage.commentsStorage = JSON.stringify(commentsStorage);
                $spanBadge.html($bagde);
                $spanBadge.innerHTML = $bagde;
                console.log($spanBadge);
                break;
            case ($(target).hasClass('c-answer') || $(target).hasClass('glyphicon-check')):
                $('input[name="target"]').val(author);
                console.log('answer');
                console.log(commentsStorage);
                break;
            case ($(target).hasClass('c-delete') || $(target).hasClass('glyphicon-trash')):
                console.log('delete');
                console.log(commentsStorage);
                break;
            case ($(target).hasClass('c-hide') || $(target).hasClass('glyphicon-eye-close')):
                console.log('hide');
                console.log(commentsStorage);
                break;
            default:
                console.log('no one case');

        }

    });

});



