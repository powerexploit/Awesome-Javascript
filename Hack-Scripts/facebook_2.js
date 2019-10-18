function acceptFriendRequests(){
    var counter=0, htmlCode, ipos;
    var buttons = document.getElementsByTagName("button");
    for (i = 0; i < buttons.length; i++){
    htmlCode = buttons[i].outerHTML.toLowerCase();
    ipos = htmlCode.indexOf("confirm");
    if(ipos > -1){
    buttons[i].click();
    counter++;
    }
    }
    alert(counter + " friend requests auto confirmed");
    }