
/* Работа с классами
Для решения задач данного блока вам понадобятся следующие свойства: classList.
 Дан элемент #elem. Добавьте ему класс www.
 Дан элемент #elem. Удалите у него класс www.
 Дан элемент #elem. Проверьте наличие у него класса www.
 Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
 Дан элемент #elem. Узнайте количество его классов.
 Дан элемент #elem. Выведите последовательно алертом его классы.
 */
/* 
let elem = document.getElementById('elem');
elem.classList.add('www');

console.log(elem)

elem.classList.remove('www');

console.log(elem.classList.contains('fff'));

elem.classList.toggle('ttt');

let length = elem.classList.length;
document.write(length + '<br>');


let classNames = elem.classList;
for (let i = 0; i <classNames.length; i++) {
    document.write(classNames[i] + '<br>');
}


 */


/* Работа с CSS
Для решения задач данного блока вам понадобятся следующие свойства: cssText.
 Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. 
 */


 let paragraph = document.getElementById('newView');
 newView.style.cssText = ('color: red; font-size: 14px; border: 2px dotted purple;');



 /* Свойство tagName
Для решения задач данного блока вам понадобятся следующие свойства: tagName.
 Дан элемент #elem. По клику на него выведите название его тега.
 Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
 Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре. */



 /* function toggle() {
	 elem = document.getElementById('elem');
	classList.toggle('active');
} */// not working


/* Вставка элементов через appendChild
Для решения задач данного блока вам понадобятся следующие методы: createElement, appendChild.
 Дан ol. Вставьте ему в конец li с текстом 'пункт'.
 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
 */

 parent = document.getElementById('parent');

 let li = document.createElement('li');
 li.innerHTML = 'Пункт';
 
 parent.appendChild(li);
        
 
arr = [4,5,6,7];

let parentUl = document.getElementById('addLi');

 for (let i = 0; i < arr.length; i++) {
    let childLi = document.createElement('li')
    childLi.innerHTML = arr[i];

    parentUl.appendChild(childLi);
 }


                   /*  Привязывание событий при вставке
 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так,
 чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li 
 было привязано следующее событие: 
 по нажатию на li она должна вывести на экран свой текст */


 array = ['космос' , 'ракета' , 'звезда'];

 let mainUlparent = document.getElementById('clickTest');

 for (let i = 0; i < array.length; i++) {
     let newElememt = document.createElement('li');
     newElememt.innerHTML = array[i];

     mainUlparent.appendChild(newElememt);
 }  //not finished
 



 /* Вставка элементов через insertBefore
Для решения задач данного блока вам понадобятся следующие методы: insertBefore.
 Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'. */



 let father = document.getElementById('father')
 let element = document.getElementById('element')

 li_text = document.createElement('li');
 li_text.innerHTML = '!!!';

 father.insertBefore(li_text, element);


 /* Вставка элементов через insertAdjacentHTML
Для решения задач данного блока вам понадобятся следующие методы: 
insertAdjacentHTML.
 Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
 Дан элемент #elem. Вставьте после него span с текстом '!!!'.
 Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.
 Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'. */


 let targetPlace = document.getElementById('target');
 targetPlace.insertAdjacentHTML('afterend', '<span> !!! </span>')  // вывел всеми способами\



 /* Потомки
Для решения задач данного блока вам понадобятся следующие свойства: firstElementChild, lastElementChild, children.
 Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
 Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
 Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'. */


 let children = document.getElementById('tag');
tag.firstElementChild.style.color = 'red'

let lastChild = document.getElementById('tag');
tag.lastElementChild.style.color = ('red');


let eachChild = document.getElementById('tag');
let elems = tag.children;

for (let i = 0; i < elems.length; i++) {
    document.write(elems[i].innerHTML + '!' + '<br>')
}
 


/* Соседи
Для решения задач данного блока вам понадобятся следующие свойства: previousElementSibling, nextElementSibling.
 Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
 Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
 Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
 */

let elem_P = document.getElementById('elem_P');

let prev = elem_P.previousElementSibling;
document.write('<br>' + prev.innerHTML + '!');

let next = elem_P.nextElementSibling;
document.write('<br>' + next.innerHTML + '!');


let neighbour = elem_P.nextElementSibling.nextElementSibling;
document.write('<br>' + neighbour.innerHTML + '!');


/* Родители
Для решения задач данного блока вам понадобятся следующие свойства: parentElement, parentNode.
 Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
 Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
 */


  
 let  mainParent = document.getElementById('mainParent');
console.log(mainParent.parentElement)
mainParent.parentElement.style.cssText = 'color: red;'

let parent_Ol = mainParent.parentElement.parentElement;
document.write('<br>' + parent_Ol.tagName)

// как покрасить тег????

/* Удаление и клонирование
Для решения задач данного блока вам понадобятся следующие свойства: removeChild.
 Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
 Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
 Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
 Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
 */


 let parent_ul = document.getElementById('parent_ul');
 let removeLi = document.getElementById('removeLi');

 let pushButtonRemove = document.getElementById('remove');
 remove.addEventListener('click', function(){
    parent_ul.removeChild(removeLi)
})


let parentOfLi = document.getElementById('showLast');
let elemList = parentOfLi.lastElementChild;
let enter = document.getElementById('lastChild');

enter.addEventListener('click', function(){
    parentOfLi.removeChild(elemList);
})


let clickString = document.getElementById('push');
clickString.addEventListener('click', function(){
    this.remove();
})



let tagParent = document.getElementById('daddy');
let childTag = tagParent.children;
    for(let i = 0; i <childTag.length; i++) {
        childTag[i].addEventListener('click', function(){
            this.parentElement.removeChild(this);
        });
    }




/* Клонирование
Для решения задач данного блока вам понадобятся следующие свойства: cloneNode.
 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут. */
    

 let text = document.querySelector('#text');
 let submit = document.querySelector('#submit');
 submit.addEventListener('click', function () {
 let clone = text.cloneNode(false);
 text.parentElement.appendChild(clone);
 })



 /* Практика
 Дан массив. Создайте ul через createElement, затем 
 вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.

 
 */


 let arrayLi = [9,7,5,3,1];

 let newElem = document.createElement('ul')
 for (let i = 0; i < arrayLi.length; i++) {
     let li = document.createElement('li');
     li.innerHTML = arrayLi[i];
     newElem.appendChild(li);
}

document.body.appendChild(newElem)




/* Дан инпут. Рядом с ним находится кнопочка "+". 
 По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
 */

let test = document.getElementById('test');
let addInput = document.getElementById('addInput');
addInput.addEventListener('click', function(){
    let newInputClone = test.cloneNode(true);
    test.parentElement.after(newInputClone)
})



/* Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. 
Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта. */



/////////////////////////////////////////////




/* Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки. */

let inputClick = document.getElementById('position');
inputClick.addEventListener('click', function(){
    this.parentElement.style.cssText = 'display: none;';
})



/* На величину границы
Для решения задач данного блока вам понадобятся следующие методы: clientTop, clientLeft.
 Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы. 
 Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы. 
 */

 let sizeBorders = document.getElementById('border-size');
 document.write(sizeBorders.clientTop + '<br>');

 document.write(sizeBorders.clientLeft)


 /* На полный размер элемента
Для решения задач данного блока вам понадобятся следующие методы: offsetWidth, offsetHeight.
 Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding. 
 Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding. 
 
На размер элемента без границ, но с padding
Для решения задач данного блока вам понадобятся следующие методы: clientWidth, clientHeight.
 Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding. 
 Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding. 
*/


let figure = document.getElementById('oval');
let showSize = document.getElementById('showSize');
showSize.addEventListener('click', function(){
    //document.write(figure.clientWidth);// 100
    document.write(figure.clientHeight);// 60
    //document.write(figure.offsetWidth);  // 106
    //document.write(figure.offsetHeight)//66
})


/* Работа с getComputedStyle
Для решения задач данного блока вам понадобятся следующие функции: getComputedStyle.
 Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.
*/

let square = document.getElementById('square')
let style = getComputedStyle(square);
alert('высота = ' + style.height + '   ширина = ' + style.width)


/* Прокрутка элемента
Для решения задач данного блока вам понадобятся следующие методы: scrollTop, scrollLeft.
 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху. 
 Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен слева.
 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху. 
 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его на 100px вниз от текущего положения. 
 */                               

let scroll = document.getElementById('scroll');
var pushScroll = document.getElementById('pushScroll');
pushScroll.addEventListener('click', function(){
    alert(elem.scrollTop);
});

let horizontalScroll = document.getElementById('horizontalScroll');
let horizontalButton = document.getElementById('horizontalButton')
horizontalButton.addEventListener('click', function(){
    console.log(horizontalScroll.scrollLeft);
    //console.log(horizontalScroll.scrollWidth);
    //Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки. 
});


let verticalScroll = document.getElementById('verticalScroll');
let verticalButton = document.getElementById('verticalButton')
verticalButton.addEventListener('click', function(){
    console.log(verticalScroll.scrollTop = 100);
    //console.log(verticalScroll.scrollHeight);
    //Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
});



/* Прокрутка элемента
Для решения задач данного блока вам понадобятся следующие методы: scrollWidth, scrollHeight.
 
 
 Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.  */


 let scrolling = document.getElementById('scrolling');
let btnScroll = document.getElementById('btnScroll')
btnScroll.addEventListener('click', function(){
    //console.log(scrolling.scrollHeight)//522 px
    console.log(scrolling.scrollHeight) 
    console.log(scrolling.scrollTop = scrolling.scrollHeight - scrolling.clientHeight - 100);// прокрутка в 100рх снизу
    console.log(scrolling.clientHeight)
});


/* Прокрутка страницы
Для решения задач данного блока вам понадобятся следующие методы: pageXOffset, pageYOffset.
 Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали. 
 Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали. 
 */


let doubleScroll = document.getElementById('doubleScroll');
let pusher = document.getElementById('pusher')
pusher.addEventListener('click', function(){
    //Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.
    alert(window.pageYOffset + " vertical")

    //Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали.
    alert(pageXOffset + " horizontal");

    //Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.
    //console.log(doubleScroll.scrollTo(500,300));
    
    //Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вниз от текущего положения. 
    console.log(doubleScroll.scrollBy(0,300))// much times clicker
});




let circle = document.getElementById('circle');
let circle_increase = document.getElementById('circle_increase');
circle_increase.addEventListener('click', function(){
    let firstHeight = circle.offsetHeight;
    let firstWidth = circle.offsetWidth;

    circle.style.width = firstWidth * 2 + 'px';
    circle.style.height = firstHeight * 2 + 'px';
})


let scrollDown = document.getElementById('scrollDown');
scrollDown.addEventListener('click', function(){
    scrollToFooter = document.documentElement;

    console.log(scrollToFooter.offsetHeight);//вся высота окна, с прокруткой
    console.log(scrollToFooter.clientHeight);// высота видимой области (без прокрутки)
    console.log(scrollToFooter.scrollTop);// прокрутка в рх

    console.log(scrollToFooter.scrollTop = scrollToFooter.offsetHeight - scrollToFooter.clientHeight) // прокрутка в самый низ
})




