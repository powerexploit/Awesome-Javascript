function generatePassword( length ){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*-+?.';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    alert('Password: ' + result);
}

function generatePassword1(length) {
    var result = '';
    var charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charsLower = 'abcdefghijklmnopqrstuvwxyz';
    var charsSpecial = '!@#$%&*-+?.';
    
    var localCt = 0;
    var type = 0;
    
    for(var i = 0; i < length; i++) {
        if(type == 0) {
            result += charsLower.charAt(Math.floor(Math.random() * charsLower.length));
            localCt++;
            
            if(localCt == 3) { 
                type = 2;
                localCt = 0;
            }
        }
        else if(type == 1) {
            result += charsUpper.charAt(Math.floor(Math.random() * charsUpper.length));
            localCt++;
            
            if(localCt == 3) { 
                type = 2;
                localCt = 0;
            }
        }
        else if(type == 2) {
            result += Math.floor(Math.random()*(999-100+1)+100);
            type = 3;
        }
        else {
            result += charsSpecial.charAt(Math.floor(Math.random() * charsSpecial.length));
            type = 1;
        }
    }
    alert('Password: ' + result);
}