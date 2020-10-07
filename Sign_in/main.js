let upperCase = /[A-Z]/g;
let lowerCase = /[a-z]/g;
let numbers = /[0-9]/g;
let allow = /[A-Za-z0-9]/g;


document.getElementById('password').onkeypress = function(event){
   if (event.key.match(allow)){
        return true;
    }else {
        return false;
    }
}

document.getElementById('password').onkeyup= function(event){
    let myPasswordValue = document.getElementById('password').value
   let barScale = document.querySelector('#barScale');

function isStringHasNumbers(myPasswordValue){
    if (myPasswordValue.match(numbers)){
        return true;
    }
    return false;
}

isStringHasNumbers(myPasswordValue)// вызов функции

function isStringHasUpperCase(myPasswordValue){
    for (let i=0; i<myPasswordValue.length; i++){
        if (!myPasswordValue[i].match(numbers) && myPasswordValue[i] == myPasswordValue[i].toUpperCase()){
            return true;
        }
    }
    return false;
}

isStringHasUpperCase(myPasswordValue)// вызов функции

function isStringHasLowerCase(myPasswordValue){
    for (let i=0; i<myPasswordValue.length; i++){
        if (!myPasswordValue[i].match(numbers) && myPasswordValue[i] == myPasswordValue[i].toLowerCase()){
            return true;
        }
    }
    return false;
}

isStringHasLowerCase(myPasswordValue)// вызов функции

function setProgressBar(color, width){
    barScale.classList.add(color)
    barScale.setAttribute('style', width)
}

function removeProgressBar(color, width){
    barScale.classList.remove(color, width);
}

if (myPasswordValue.length == myPasswordValue.length){
    barScale.setAttribute('style', 'width:0%')
}
// убрал баг с прогресс баром (перебил бутстрап стили)

// if (myPasswordValue )

function passwordLow(){
    if (myPasswordValue.length >0 &&
        myPasswordValue.length <6){
            return setProgressBar('bg-danger', 'width:33%');
        }
    return removeProgressBar('bg-danger', 'width:0%');  
}

function passwordMedium(){
    if (myPasswordValue.length >= 6 && 
         myPasswordValue.length <= 8 &&
        isStringHasLowerCase(myPasswordValue)  &&
        isStringHasUpperCase(myPasswordValue)  &&
        isStringHasNumbers(myPasswordValue)){
            return setProgressBar('bg-warning', 'width:67%');
        }
        return removeProgressBar('bg-warning', 'width:0%')
    }
    
function passwordHigh(){
    if (myPasswordValue.length >8 && 
        isStringHasLowerCase(myPasswordValue) &&
        isStringHasUpperCase(myPasswordValue) &&
        isStringHasNumbers(myPasswordValue)){
            return setProgressBar('bg-success', 'width:100%');
        } 
    return removeProgressBar('bg-success', 'width:0%')    
}

passwordLow();
passwordMedium();
passwordHigh();

}
