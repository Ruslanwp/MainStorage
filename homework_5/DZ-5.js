/* 0.Палиндром
Палиндром — слово, предложение или последовательность символов, 
которая абсолютно одинаково читается как в привычном направлении, 
так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.


Постановка
Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
 если строка является палиндромом, и false — если нет. 
 При этом нужно учитывать пробелы и знаки препинания. */



 function getPalindromeName(string) {
    string = string.toUpperCase()
    return string === string.split('').reverse().join('');
 }

 console.log(getPalindromeName('ротор'));



  /*  1.Анаграмма
Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.

Постановка
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, 
причем регистр букв не имеет значения. Учитываются лишь символы; 
пробелы или знаки препинания в расчет не берутся. */


function getAnagram(first, second) {
    let array1 = first.toUpperCase().replace(/[^\w]/g, '').split('').sort()
    let array2 = second.toUpperCase().replace(/[^\w]/g, '').split('').sort()
   if (array1.length !== array2.length){
      return 'It`s not anagram';
   }
      
   for (let i = 0; i < array1.length; i++) {
   if (array1[i] !== array2[i]){
      console.log(`Words ${first} and ${second} are not anagrams`)
      return;
   }
   }
   console.log(`Words '${first}' and '${second}' are anagrams`)
   }


   


getAnagram('raven', 'vernA')



/* console.log('verna'.toUpperCase().replace(/[^\w]/g, '').split('').sort()) */





/* 2.Поиск гласных
Достаточно простая задача, которая часто попадается на собеседованиях.
Постановка
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую 
количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
 */














/* 3.Фибоначчи
Классическая задача, которую можно встретить на собеседованиях 
самого разного уровня. Стоит напомнить, что последовательность 
Фибоначчи — это ряд чисел, где каждое последующее является суммой 
двух предыдущих. 
Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Постановка
Нужно написать функцию, которая возвращает n-ную запись в определенной 
последовательности, причем n — число, которое передается в качестве 
аргумента функции. */








/* Задача. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
тремя разными способами (через substr, substring, slice). */

let string = 'aaa bbb ccc'

console.log(string.substr(4,3));

console.log(string.substring(4,7))

console.log(string.slice(4,-3))


/* Задача. В переменной date лежит дата в формате '2025-12-31'. 
Преобразуйте эту дату в формат '31/12/2025'. */

let date = '2025-12-31';

date = date.replace(/-/g, '.').split('.').reverse().join('/')

   console.log(date);


/* 
   Дана строка 'js'. Сделайте из нее строку 'JS'.
 Дана строка 'JS'. Сделайте из нее строку 'js'. */


 let str1 = 'js'
 console.log(str1.toUpperCase())

 let str2 = 'JS'
 console.log(str2.toLowerCase())



 /* Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. */

 countSymbols = 'я учу javascript!'



 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



 /* Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' 
 тремя разными способами (через substr, substring, slice). */


 myString = 'я учу javascript!'

 console.log(myString.substr(2, 14));
 console.log(myString.substring(2, 16));
 console.log(myString.slice(2, -1));



 /* Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'. */

 console.log(myString.indexOf('javascript!'));



/*  Дана переменная str, в которой хранится какой-либо текст.  
 Реализуйте обрезание длинного текста по следующему принципу: 
 если количество символов этого текста больше заданного в переменной n, 
 то в переменную result запишем первые n символов строки str и добавим в конец 
 троеточие '...'. В противном случае в переменную result 
 запишем содержимое переменной str. */

 let str = 'если символов больше чем 10, то ты не увидишь весь текст'

 let n = 15;

 result = '';

 if (str.length > n){
   result = console.log(str.substring(0, n) + '...');
 }
else {result = (console.log(str))};


/* Дана строка 'я учу javascript!'. С помощью метода split 
запишите каждое слово этой строки в отдельный элемент массива. */

let ourString = 'я учу javascript!'

splitArray = ourString.split(' ')

console.log(splitArray);



/* Дана строка 'я учу javascript!'. С помощью метода split 
запишите каждый символ этой строки в отдельный элемент массива. */

let yourString = 'я учу javascript!'

newSplitArray = yourString.split('')

console.log(newSplitArray);



/* В переменной date лежит дата в формате '2025-12-31'.
Преобразуйте эту дату в формат '31.12.2025'. */

let ourDate = '2025-12-31';
ourDate = ourDate.split('-').reverse().join('.');
console.log(ourDate);




/* Дан массив ['я', 'учу', 'javascript', '!']. 
С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. */

joinArray = ['я', 'учу', 'javascript', '!'];
console.log(joinArray.join('+'));

/* Преобразуйте первую букву строки в верхний регистр. */

let letterUp = 'hector ruslan igor'
firstLetterUp = letterUp[0].toUpperCase() + letterUp.slice(1);

console.log(firstLetterUp)

/* Преобразуйте первую букву каждого слова строки в верхний регистр. */

/* arrayUp = letterUp.split(' ')

   mas = arrayUp[0][0].toUpperCase() + arrayUp.slice(1);

console.log(mas)
 *////////////////////////////////////////////////////////////


 /* Преобразуйте строку 'var_test_text' в 'varTestText'. 
 Скрипт, конечно же, должен работать с любыми аналогичными строками. */




 /* Напишите функцию stringToarray(str), 
 которая преобразует строку в массив слов. */

 function stringToarray(str) {
    return str.split(' ');
 }

 console.log(stringToarray('first second third'))



 /* Напишите функцию delete_characters(str, length), 
 которая возвращает подстроку, состоящую из указанного количества символов. */



 /* function delete_characters(str, length) {
    
   arr = str.split(' ')
   
 }


 delete_characters('я учу javascript', 1)
 */



/* Напишите функцию insert_dash(str), 
которая принимает строку str в качестве аргумента и вставляет тире (-) 
между словами. При этом все символы строки необходимо перевести в верхний регистр */

function insert_dash(str) {
   return str.toUpperCase().split(' ').join('-')
}

console.log(insert_dash('весна лето осень зима'))//ВЕСНА-ЛЕТО-ОСЕНЬ-ЗИМА

/* Напишите функцию, которая принимает строку в качестве аргумента 
и преобразует регистр первого символа строки из нижнего регистра в верхний */

function getUpCase(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(getUpCase('gandalf'))


/* Напишите функцию capitalize(str), которая возвращает строку, 
в которой каждое слово начинается с заглавной буквы. */








/* Напишите функцию change_register(str), которая принимает 
в качестве аргумента строку и и заменяет регистр каждого символа 
на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
то на выходе должно быть «кАжДыЙ оХоТнИк». */

function change_register(str) {
      let new_str = "";
      let len = str.length;
        for (let i = 0; i < len; i++) {
          if (str[i] === str[i].toLowerCase()) {
            new_str += str[i].toUpperCase();
          } else {
            new_str += str[i].toLowerCase();
          }
        }
        return new_str;
      }

   console.log(change_register('КаЖдЫй ОхОтНиК'))
   


  /*  Напишите функцию remove_char(str), 
   которая возвращает строку, очищенную от всех не буквенно-цифровых символов. */

   function remove_char(str) {
      clean_str = str.replace("/[^a-zA-Z0-9\s]/", "",).replace(/[^\w]/g, '')
      return clean_str;
   }

   console.log(remove_char('Airbus-747-800  helicopter f25 '))

   /* Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины 
   числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента. */

   function zeros(num, len) {
      
      
   }

      console.log(zeros())
     




/* Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки 
из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы. */



/* Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз. */

function repeatStr(str, n) {
   let countStr = '';
  for (let i = 0; i < n; i++) {
      countStr += str
  }
  return countStr;
}

console.log(repeatStr('heavy ', 5))

/* Напишите функцию insensitive_search(str1, str2), которая 
осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов. */

function insensitive_search(str1, str2) {
   return str1.toLowerCase().indexOf(str2.toLowerCase());
} 

console.log(insensitive_search('я учу js Every day', 'Js'));


/* Напишите функцию path(pathname), которая вовращает имя файла 
(подстрока после последнего символа "\" ) из полного пути к файлу.
var pathname = "/home/user/dir/file.txt"; */

function path(pathname) {
   return pathname.split('/').pop();
}

console.log(path("/home/user/dir/file.txt"))


/* Напишите функцию insert(str, substr, pos), 
которая вставляет подстроку substr в указханную позицию pos строки str.
 По умолчанию подстрока вставляется в начало строки. */

 function insert(string, substr, pos) {
    arrayOld = string.split(' ');
    arrayNew = substr.split(' ');
    finalArray = arrayOld.concat(arrayNew);

    return finalArray
   }

 console.log(insert('А роза на лапу Азора', 'упала', 2));


 //arr.splice(2, 0, "сложный", "язык");




/*  Напишите функцию limitStr(str, n, symb), которая обрезает строку, 
 если она длиннее указанного количества символов n. 
 Усеченная строка должна заканчиваться троеточием «...» 
 (если не задан параметр symb) или заданным символом symb. */




 function limitStr(str, n, symb) {
    result = '';
    symb = symb || '...'
    if (str.length > n) {
        result = console.log(str.substring(0, n)+ symb)
    }
    else console.log(str);
 }
 

 limitStr('11133fftj', 2, '!')


 /* Напишите функцию cutString(str, n)
 которая делит строку на подстроки, состоящие из n символов. */

 function cutString(str, n) {
    result = [];
    for (let i = 0; i < str.length; i += n){
       result.push(str.substr(i, n));
    }
    return result;
 }

console.log(cutString('дефибрилятор', 5))


/* Напишите функцию count(str, stringsearch), 
которая возвращает количество символов stringsearch в строке str. */


function count(str, stringsearch) {
  stringsearch = str.length;
  return stringsearch;
}

console.log(count('Harry Potter'))


/* Напишите функцию cutTegs(str), 
которая возвращает строку str, очищенную от всех HTML-тегов. */




/* Напишите функцию unique_letters(str), которая возвращает строку, 
оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз. */







/* Напишите функцию removeDuplicate(str), которая возвращает строку, 
очищенную от слов-дупликатов, т.е. 
каждое слово должно повторяться не более одного раза. */





/* Напишите функцию findWord(word, str), 
которая проверяет, существует ли в строке str слова word. */

function findWord(word, str){
   return str.search(word);
}

console.log(findWord('нашел', 'я вчера нашел его '))





/* Напишите функцию isUpperCase(str, character), 
которая определяет в каком регистре написан символ строки в указанной позиции.
 Если в верхнем регистре выводится – true, если в нижнем – false. */






 /* Напишите функцию, которая принимает на вход строку, 
 а возвращает эту строку «задом наперед» */


 function getString(str) {
    return str.split('').reverse().join('');
 }


 console.log(getString('Задом на перед'))