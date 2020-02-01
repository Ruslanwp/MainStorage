/* 
Создайте 4 любые математические функции 
 с как минимум одним параметром функции.
 */

/* function getResult(name, text) {
    console.log(name + ": " + text)
}

    getResult('Олег', 'здравствуй!');


function openSite(email, password) {
    console.log('email:' + email, 'пароль:' + password)
}
    
    openSite('fixnet@gmail.com', 'qwerty!');

function setConect(connection) {
        alert(connection)
}
    alert('Связь установлена!');

function getAside(step) {
    console.log('сделать ' + step + " шага!")
}
    getAside('3'); */
    

// Создать 3 функции без параметров и return
 
/* function showSurname() {
    let yourSurname = 'Shevchenko';

    alert(yourSurname);
}
    showSurname();

function getName() {
    let hisName = 'Vasya';

    console.log(hisName);
}

    getName()  

function enterName() {
    let name = 'Ruslan';

    alert(name);
    console.log(name);
}

    enterName(); */


    /* Создать  функции (всегда с параметром)
Функция 



 */



/*Функция  Суммы всех нечетных чисел в передаваемом числе */

/* function countOfOdd(odd) {
    let enterNumber = prompt('enter any number')
    let result=0;
    for (let i = 0; i <= enterNumber; i++)
    if (i % 2 == 1)
    result+=i;
    console.log(result);
}
    countOfOdd(); */


/* Нахождение наибольшего четного числа в передаваемом числе */

/* function getMaxNum(even) {
    yourNumber = prompt('введите число ')
    result = Math.floor(yourNumber)
    if (result > 0 && result % 2 !== 0){
    result -= 1
    alert('Наибольшее четное число введенное вами = ' + result);
    }
    result = Math.ceil(yourNumber)
    if (result < 0 && result % 2 !== 0) {
    result += 1;
    alert('Наибольшее четное число введенное вами = ' + result);
    }
}

getMaxNum();
 */


/* Нажождения последнего нечетного числа в передаваемом числе */

/* function getMaxOdd(odd) {
    lastNum = prompt('введите число ')
    let result = lastNum;
    if (result < 0){
       result = Math.ceil(lastNum)

        if (result % 2 == -1){
            alert(result)
        }

        if (result % 2 == 0){
            result++
            alert(result);
        }

    }

    if (result > 0){
        result = Math.floor(lastNum)
 
         if (result % 2 == 1){
             alert(result)
        }
 
         if (result % 2 == 0){
             result--
             alert(result);
        }
    }
}


getMaxOdd()
 */

/* 
Наибольшее из трех переданных чисел */

/* function getMaxNum() {
    let result = [];
    for(let i = 1; i <= 3; i++){
        let nums = prompt('введите 3 разных числа')
        result.push(nums);
    }
        result.sort(function(a,b) { 
        return b - a
})
    alert('The highest number equal ' + result[0]);
}

    getMaxNum();

 */
    
   
/* Наименьшее из 5 переданных чисел */

/* function getMinNum() {
    let result = [];
    for(let i = 1; i <= 5; i++){
        let nums = prompt('введите 3 разных числа')
        result.push(nums);
    }
        result.sort(function(a,b) { 
        return a - b
})
    alert('The smallest number equal ' + result[0]);
}

    getMinNum()
 */



/* Функция, которая выводит в консоль тип передаваемого параметра -строка,число и т.д */

function getType(num = Array) {
    console.log(typeof num)
}

getType()


//   Array - function
//   num - ['12,12,13'] - object
//   123 - number
//   '' - string
//   null - object
//   NaN - number 
//   'Justin' - string
//   Boolean - function
//    true - boolean
//    undefined - undefined

/* Функция, которая получает число дня недели и выводит в алерт Название дня */

function getDayOfWeek(i) {
    let week = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']
    alert('День недели = ' + week[i+1]);
}

getDayOfWeek([3]);