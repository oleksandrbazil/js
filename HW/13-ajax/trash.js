/*переделать под JQuery - что бы классы не заменялись (setAtttribute), а добавлялись*/

function bildComment(commentID, commentAUTHOR, commentURL, commentTEXT, commentDATE, commentTARGER, commentBADGE) {
    /* zero level */
    var generalDiv = document.createElement('div');
    var generalP = document.createElement('p');
    var authorImg = document.createElement('img');
    var generalSpan = document.createElement('span');
    var generalButton = document.createElement('button');
    var generalBr = document.createElement('br');
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn');
    var span = generalSpan.cloneNode();
    span.setAttribute('class', 'glyphicon');
    span.setAttribute('aria-hidden', 'true');


    /* 1 level */
    var commentDiv = generalDiv.cloneNode();
    commentDiv.setAttribute('class', 'comment');
    commentDiv.setAttribute('commentid', commentID);

    /* 2 level */
    var rowDiv = generalDiv.cloneNode();
    rowDiv.setAttribute('class', 'col-xs-12 col-sm-12 col-md-12 col-lg-12');
    var firstRowDiv = rowDiv.cloneNode();
    var secondRowDiv = rowDiv.cloneNode();


    /* 3 level */
    var divAuthorDate = generalDiv.cloneNode();
    divAuthorDate.setAttribute('class', 'col-xs-12 col-sm-6 col-md-3 col-lg-3');
    var authorDiv = divAuthorDate.cloneNode();
    authorDiv.setAttribute('class', 'comment-author');
    var dateDiv = divAuthorDate.cloneNode();
    dateDiv.setAttribute('class', 'comment-date');


    var divBodyButtons = generalDiv.cloneNode();
    divBodyButtons.setAttribute('class', 'col-xs-12 col-sm-6 col-md-9 col-lg-9');
    var bodyDiv = divAuthorDate.cloneNode();
    bodyDiv.setAttribute('class', 'comment-body');
    var buttonsDiv = divAuthorDate.cloneNode();
    buttonsDiv.setAttribute('class', 'comment-buttons');

    /* 4 level */
    /*for comment-author*/
    var authorP = generalP.cloneNode();
    authorP.innerHTML = commentAUTHOR;

    authorImg.setAttribute('src', commentURL);
    authorImg.setAttribute('alt', commentAUTHOR);

    var badgeSpan = generalSpan.cloneNode();
    badgeSpan.setAttribute('class', 'badge');
    badgeSpan.innerHTML = commentBADGE;

    var buttonLike = button.cloneNode();
    buttonLike.setAttribute('class', 'btn-success c-like');

    var buttonDislike = button.cloneNode();
    buttonDislike.setAttribute('class', 'btn-danger c-dislike');


    /*for comment-date*/
    var dateP = generalP.cloneNode();
    dateP.innerHTML = commentDATE;


    /*for comment-body*/
    var bodyP = generalP.cloneNode();
    if (commentTARGER) {
        console.log('target задан');
        bodyP.innerHTML = '<strong>' + commentTARGER + '</strong>' + commentTEXT;
    } else {
        console.log('target не указан');
        bodyP.innerHTML = commentTEXT;
    }


    /*for comment-buttons*/
    var buttonAnswer = button.cloneNode();
    buttonAnswer.setAttribute('class', 'btn-default c-answer');
    buttonAnswer.text = ('ANSWER ');

    var buttonDelete = button.cloneNode();
    buttonDelete.setAttribute('class', 'btn-danger c-delete');
    buttonDelete.text = ('DELETE ');

    var buttonHide = button.cloneNode();
    buttonHide.setAttribute('class', 'btn-info c-hide');
    buttonHide.text = ('>HIDE ');


    /* 5 level */
    /*for comment-author*/
    var spanLike = span.cloneNode();
    spanLike.setAttribute('class', ' glyphicon-thumbs-up');

    var spanDislike = span.cloneNode();
    spanDislike.setAttribute('class', ' glyphicon-thumbs-down');


    /*for comment-buttons*/
    var spanAnswer = span.cloneNode();
    spanAnswer.setAttribute('class', ' glyphicon-check');

    var spanDelete = span.cloneNode();
    spanDelete.setAttribute('class', ' glyphicon-trash');


    var spanHide = span.cloneNode();
    spanHide.setAttribute('class', ' glyphicon-eye-close');


    /*installation components from 5 to 1 level*/
    /* setting 4 level*/
    buttonLike.appendChild(spanLike);
    buttonDislike.appendChild(spanDislike);

    buttonAnswer.appendChild(spanAnswer);
    buttonDelete.appendChild(spanDelete);
    buttonHide.appendChild(spanHide);

    /* setting 3 level*/
    authorDiv.appendChild(authorP);
    authorDiv.appendChild(authorImg);
    authorDiv.appendChild(generalBr);
    authorDiv.appendChild(badgeSpan);
    authorDiv.appendChild(generalBr);
    authorDiv.appendChild(buttonLike);
    authorDiv.appendChild(buttonDislike);

    dateDiv.appendChild(dateP);

    bodyDiv.appendChild(bodyP);

    buttonsDiv.appendChild(buttonAnswer);
    buttonsDiv.appendChild(buttonDelete);
    buttonsDiv.appendChild(buttonHide);


    /* setting 2 level*/
    firstRowDiv.appendChild(authorDiv);
    firstRowDiv.appendChild(bodyDiv);

    secondRowDiv.appendChild(dateDiv);
    secondRowDiv.appendChild(buttonsDiv);


    /* setting 1 level*/
    commentDiv.appendChild(firstRowDiv);
    commentDiv.appendChild(secondRowDiv);


    console.log(commentDiv);
    var $savedComments = $('#savedComments');
    $savedComments.append(commentDiv);

}