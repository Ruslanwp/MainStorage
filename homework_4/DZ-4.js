/* 1. Клонирование массива
Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал. */

let steps = [12,22,54,23,62];

function copyArr(arr1) {
    return arr1.slice(0);
};

let arr2 = copyArr(steps);

console.log(arr2);



/* 2. Преобразование массива в строку
Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
Элементы массива будут разделены запятой. Получите результат двумя разными методами
 */

 let array = ['24','345','535','12341'];

 console.log(array.join(','));

 console.log(array.slice(0));

 /* 3.1 Заполните массив 10-ю иксами с помощью цикла. */

 let x_array = [];


 for (i = 1; i <= 10; i++) {
     x_array.push('x,') 
 }

 console.log(x_array);

 /* 3.2 Заполните массив числами от 1 до 10 с помощью цикла */

 let countArray = [];

 for (i = 1; i <= 10; i++) {
    countArray.push(i)
}

 console.log(countArray);

/* Заполните массив 10-ю случайными числами (дробями)
 от 0 до 1 с помощью цикла. 
Дроби округляйте до двух знаков в дробной части. */

let fractionArray = [];

for (i = 1; i <= 10; i++) {
    fractionArray.push(Math.random().toFixed(2))
}

 console.log(fractionArray);

 /* Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. */

 let arrRandom = [];

 for (i = 1; i <= 10; i++) {
    arrRandom.push(Math.floor(Math.random() * 10) + 1);
}

 console.log(arrRandom);


/*  Дан массив с числами. С помощью цикла выведите только те элементы массива,
  которые больше нуля и меньше 10-ти.  */

  function  arrayFilter(value) {
      return value  <= 10 && value > 0;
  }

  let numOfArray = [123,9,21,93,453,4,23,7,10].filter(arrayFilter);

  console.log(numOfArray);
  

/*   Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
   Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.
    Если такого элемента нет - ничего не выводите. */

    

    function findArray(value) {
        return value == 5;
    }

    let arrayWithNumbers = [12,45,3536,23,5,1235,5,215,32].find(findArray);

    console.log(arrayWithNumbers); // вывело первую пятерку из массива и оборвало цикл


    /* Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. */

    let SumArray = [12,9,36,456,12,39];
    let sum = 0;
    
    for (i=0; i < SumArray.length; i++) {

        sum += SumArray[i]; // sumArray[i] - берет из массива каждый индекс и складывает к результату
    }

    console.log(sum);

   /*  Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. */

    
   let fullArray = [12,9,-3];
   let ourResult = 0;
   
   for (i=0; i < fullArray.length; i++) {

       ourResult += Math.pow(fullArray[i], 2); //  Math.pow(fullArray[i], 2)- складывает возведенные в квадрат числа с массива, начиная с нулевого индекса
   }

   console.log(ourResult);

   /* Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество) */


   let overalNumber = [34,45,22,-28,13];
   let overalResult = 0;

   for (i=0; i < overalNumber.length; i++) {

    overalResult += overalNumber[i]; //  Math.pow(fullArray[i], 2)- складывает возведенные в квадрат числа с массива, начиная с нулевого индекса
}
    console.log(Math.floor(overalResult / overalNumber.length)); // полученное значение округлил в меньшую сторону до целого числа

   /*  Пользователь вводит многозначное число через promt. 
    Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами. 
    Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. */



    /* multiNumber = [prompt('Введите число!')];
    num = multiNumber;

    function colonOdd(num) {
       for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 1)
        i++;
        console.log(num);
        }
    }
    
    console.log(colonOdd(); */



   /*  Напишите функцию removeDuplicates(arr), 
    которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr 
    (игнорируйте чувствительность к регистру). */

    let arrayRepeat = [12,35,255,23,12,45,35,56,67];

    

    /* Напишите функцию getFirst(array, n), которая возвращает фрагмент массива,
     содержащий первые 'n' элементов массива. */
     

     /* Сумма элементов двух массивов
     Напишите код, который создаёт массив элементов 
     представляющих собой сумму соответствующих элементов заданных массивов. */
     

     array_1 = [123,467,356,25];
     array_2 = [163,462,833,88];
     array_result = array_1.concat(array_2);
     finalResult = 0;

    for (i = 0; i < array_result.length; i++){  // длинна массива указана массивом конкатонации
        finalResult += array_result[i]; // сложение чисел сконкотонировавшего массива
    }

    
   
    console.log(finalResult);// произошла конкотонация

    /* Объединить два массива без дублирования элементов
    Напишите функцию union, которая возвращает массив 
    состоящий только из уникальных элементов из каждого массива.   ///////////////////////////////////////////////////////////////////////////
 */

    
/* 
    let union = function() {
        for (let i = 0; i <arrayConcat; i--){

        }
        let arrayConcat = arrayUnion1.concat(arrayUnion2);

    } */
    
   /*  Напишите функцию union, которая возвращает массив, 
    содержащий все элементы arr1, которые не находятся в arr2 и наоборот. */   ///////////////////////////////////////////////////////////////////////

    function union() {

    }




   /*  Напишите функцию compareNumbers(arr), которая возвращает массив, 
   элементы которого отсортированы по убыванию их значений. */


  


   /* Напишите функцию sumOfSquares(arr),
    которая возвращает сумму квадратов значений массива */

    /* let arrayOfSquares = [2,4,5,2,13];
    res= 0;

    function sumOfSquares(arr) {{
        for (let i = 0; i < arrayOfSquares.length; i++)
        res += (Math.pow(arrayOfSquares[i], 2))
        arr = res;
    }
        return arr;
    }

    console.log(sumOfSquares()) */   ////// успех......

    
    /* Напишите код, который определяет сумму и произведение значений массива. */

    let mainArray = [12,15,6,9];

     let sumOfArray = 0;
    let mulOfArray = 0;


    for (let i = 0; i < mainArray.length; i++) {
        sumOfArray += mainArray[i]
        mulOfArray += (Math.pow(mainArray[i], 2));
    }

    console.log('Сумма всех индексов массива = ' + sumOfArray);
    console.log('произведение всех индексов массива = ' + mulOfArray);

   
 /*   
    Напишите функцию filterFalse(arr), которая очищает массив от ложных 
    (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка). */








   /*  Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка). */








   /* Переместить элемент массива из одной позиции в другую
Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to. */

    

    function moveElement(arr,from,to) {
     arr.splice(to,0,arr.splice(from,1)[0]);
     return arr;
    }   

    let arr = [1,4,2,3,5,6];
    console.log(moveElement(arr,1,3)); // [1, 2, 3, 4, 5, 6]


   
   /*  Напишите функцию generateNumbers(start, len), 
    которая генерирует массив заданной длины len, заполненный целыми числами, 
    где каждое число больше предыдущего на единицу. */

    

    function generateNumbers(start, len) {
       let finalArray =  Array(len);
       for (let i = 0; i < len; i++, start++)   {
        finalArray[i] = start;
       }
       return finalArray;
    }
    
    console.log(generateNumbers(-2, 6));





   /*  Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
    Используя метод reduce() напишите функцию currentSums(numbers),
    которая возвращает новый массив из такого же числа элементов, 
    в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно. */

    
    let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
    
    function currentSums(numbers) {
      let result = [];

      numbers.reduce(function(sum, current, i) {
          return result[i] = sum + current;
      }, 0);

      alert(result);
    }

    currentSums(numbers);// списал.... не смог разобраться как что выходит



    /* Задача. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. */

    let arrayPlus = ['a', 'b', 'c'];
    total = arrayPlus.push('1','2','3')
    console.log(arrayPlus);


    /* Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */

    let myArray = [1, 2, 3];
    let reversed = myArray.reverse();   // const reversed - перебило выдачу индексов массива (let reversed работает)

    console.log(reversed);


    /* Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */

    let ourArray = [1, 2, 3];
    ourArray.unshift(4,5,6);

    console.log(ourArray);

    





    /* Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. */

    let stringArray = ['js', 'css', 'jq'];
    console.log(stringArray.pop());



    /* Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. */

    let numArray = [1, 2, 3, 4, 5];
    let addNumbers = numArray.slice(3);// выводит 4,5

    console.log(addNumbers);



    /* Дан массив [1, 2, 3, 4, 5].
     С помощью метода splice преобразуйте массив в [1, 4, 5]. */


     let cutArray = [1, 2, 3, 4, 5];
     let spliceResult = cutArray.splice(1, 2) // 1,4,5

     console.log(cutArray);


     /* Дан массив [1, 2, 3, 4, 5]. 
     С помощью метода splice запишите в новый массив элементы [2, 3, 4]. */

     let old_array = [1, 2, 3, 4, 5];
     let result_array = old_array.splice(1,3);

     console.log(result_array);//[2, 3, 4]


     /* Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. 
     Выведите на экран цифру 4 из этого массива. */

     TwoDimensionalArray = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

     console.log(TwoDimensionalArray[1][0]);// выбираем второй массив внутри двумерного (по индексу 1), потом по индексу 0 достаем первое число.


     /* Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'. */

     let choiceLang = {
        js:['jQuery', 'Angular'], 
        php: 'hello',
        css: 'world'
     }

     console.log(choiceLang.js[0])// объединение с ключом объекта через точку


     /* Создайте массив arr = ['a', 'b', 'c']. 
     Выведите его на экран с помощью функции alert */

    
     arrNumber = ['a', 'b', 'c'];

     alert(arrNumber);

     /* С помощью массива arr из предыдущего номера 
     выведите на экран содержимое первого, второго и третьего элементов. */

      for (let i = 0; i < arrNumber.length; i++){
        alert(arrNumber[i]);
     }
 

     /* Создайте массив arr = ['a', 'b', 'c', 'd'] 
     и с его помощью выведите на экран строку 'a+b, c+d'. */

     arr_num = ['a', 'b', 'c', 'd'];
     alert(arr_num[0] + '+' + arr_num[1] + ', ' + arr_num[2] + '+' + arr_num[3]);


     /* Создайте массив arr с элементами 2, 5, 3, 9. 
     Умножьте первый элемент массива на второй, 
     а третий элемент на четвертый.
      Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной. */

     let array_last = [2, 5, 3, 9];
     let firstSum = array_last[0] * array_last[1];
     let secondSum = array_last[2] * array_last[3];

     let resultOfSum = firstSum + secondSum;
     alert(resultOfSum);