let upperCase = /[A-Z]/;
let lowerCase = /[a-z]/g;
let numbers = /[0-9]/g;
let allow = /[A-Za-z0-9]/g;



document.getElementById('phone').onkeypress = function(event){
    if (event.key.match(numbers) || event.key == '+'){
         return true;
     }
     return false;  
}

document.getElementById('phone').onkeyup = function(event){
    let myPhoneValue = document.getElementById('phone').value;
    console.log(myPhoneValue);

   
}

document.getElementById('password').onkeypress = function(event){
   if (event.key.match(allow)){
        return true;
    }
    return false;  
}

document.getElementById('password').onkeyup = function(event){
   let myPasswordValue = document.getElementById('password').value;
   let barScale = document.querySelector('#barScale');

function isStringHasNumbers(myPasswordValue){
    if (myPasswordValue.match(numbers)){
        return true;
    }
    return false;
}

function isStringHasUpperCase(myPasswordValue){
    if (myPasswordValue.match(upperCase)){
        return true;
    }
    return false;
}

function isStringHasLowerCase(myPasswordValue){
    if (myPasswordValue.match(lowerCase)){
        return true;
    }
    return false;
}

function isValid(myPasswordValue){
    if (isStringHasNumbers(myPasswordValue) &&
    isStringHasUpperCase(myPasswordValue) &&
    isStringHasLowerCase(myPasswordValue)){
        return true;
    }
    return false;
}

function isPasswordLow(myPasswordValue){
    if (myPasswordValue.length >0 &&
        myPasswordValue.length <6 || 
        myPasswordValue.length >0 &&
        isValid(myPasswordValue) == false){
            return true;
        }
    return false;  
}

function isPasswordMedium(myPasswordValue){
    if (myPasswordValue.length >= 6 && 
         myPasswordValue.length <= 8 &&
         isValid(myPasswordValue)){
            return true;
        }
        return false; 
    }
    
function isPasswordHigh(myPasswordValue){
    if (myPasswordValue.length >8 && 
        isValid(myPasswordValue)){
            return true;
        } 
        return false ;     
}

function setProgressBar(setLength){
    barScale.setAttribute('style', 'width:'+ setLength +'%')
    if (setLength > 0 && setLength <= 33){
        barScale.style.background = 'red';
    } 
    if (setLength > 33 && setLength <= 67){
        barScale.style.background = 'yellow';
    }
    if (setLength > 67 && setLength <= 100){
        barScale.style.background = '#cddc39';
    }
}

function checkPassword(myPasswordValue){
    if (isPasswordLow(myPasswordValue)){
        return setProgressBar(33);
    } 
    if (isPasswordMedium(myPasswordValue)){
        return setProgressBar(67);
    }  
    if (isPasswordHigh(myPasswordValue)){
        return setProgressBar(100);
    }
    return setProgressBar(0);
}

checkPassword(myPasswordValue);
}
