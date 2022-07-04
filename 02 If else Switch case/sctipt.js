//Функция которая возвращает значения true или false с помощью двойной вилки ветвлений if else
//////////////////////////////////////////////////////////////////////////////
function f1 () {                                            //Объявляем функцию f1 которая возвращает true или else        
   let value = document.querySelector('.i-1').value;        //Объявляем переменную value в значение которой помещяем значение инпута .i-1
   if (value == 4) {                                        //Если значение переменной value равно 4
     return true;                                           //Функция f1 возвращает true
   } else {                                                 //Иначе...   
     return = false;                                        //Функция f1 возвращает false
   }
}

//Функция которая вовзращает некие значения с помощью тройной вилки ветвлений if else if
////////////////////////////////////////////////////////////////////////
function f5 () {                                            //Объявляем функцию f5 возврата неких значений
   let value = document.querySelector('.i-5').value;        //Объявляем переменную value в значение которой помещяем значение инпута .i-5
   if (value < 0) {                                         //Если значение переменной value меньше 0
    return 'm';                                             //Функция f5 возвращает строку в виде буквы 'm'        
   } else if (value == 0) {                                 //Иначе если переменная value равна 0      
      return 0;                                             //Функция f5 возвращает число в виде 0
   } else {                                                 //Иначе...
      return 1;                                             //Функция f5 возвращает число в виде 1
   }
}

//Функция которая возвращает некие значения после проверки кратности числен на 2
////////////////////////////////////////////////////////////////////////////////
function f6 () {                                            //Объявляем функцию f6 которая возвращает некие значения
   let value = document.querySelector('.i-6').value;        //Объявляем переменную value в значение которой помещяем значение инпута .i-6
   if (value % 2 == 0) {                                    //Если переменная value деленная на 2 дает 0
      return 'even';                                        //Функция f6 возвращает строку в виде 'even'
   } else {                                                 //Иначе...
      return 'odd';                                         //Функция f6 возвращает строку в виде 'odd'
   }
}

//Функция которая возвращает некие значения с помощью тройной вилки switch case
///////////////////////////////////////////////////////////////////////////////
function f8 () {                                           //Объявляем функцию f8 которая возвращает некие значения 
   let value = document.querySelector('.s-8').value;       //Объявляем переменную value в значение которой помещяем значение инпута .i-8 
   switch (parseInt(value)) {                              //С момощью switch в скобках обращаемся к переменной value предварительно преобразовывая её в число с помощью parseInt 
       case 1:                                             //Если переменная value равно 1
       out.innerHTML = 'one';                              //Выводим в переменную out строку в виде 'one' 
       break;                                              //Прерываем проверку если предыдущее зачение case вернуло нам true
       case 2:                                             //Если переменная value равно 2 
       out.innerHTML = 'two';                              //Выводим в переменную out строку в виде 'two'  
       break;                                              //Прерываем проверку если предыдущее зачение case вернуло нам true 
       case 3:                                             //Если переменная value равно 3 
       out.innerHTML = 'three';                            //Выводим в переменную out строку в виде 'three'  
       break;                                              //Прерываем проверку... 
}

//Функция которая возвращает некие значения после проверки диапазона чисел с помощью вилок ветвлений if else if
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function f9 () {                                           //Объявляем функцию f9 которая возвращает некие значения 
   let value = document.querySelector('.i-9').value;       //Объявляем переменную value в значение которой помещяем значение инпута .i-9 
   if (value >= 1 && value <= 32) {                        //Если значение value находится в диапазоне от 1 до 32         
      return 1;                                            //Функция f9 возвратит число в виде 1 
   } else if (value >= 33 && value <= 43) {                //Если значение value находится в диапазоне от 33 до 43  
      return 2;                                            //Функция f9 возвратит число в виде 2  
   } else if (value >= 44 && value <= 64) {                //Если значение value находится в диапазоне от 44 до 64  
      return 3;                                            //Функция f9 возвратит число в виде 3  
   } else {                                                //Иначе...
      return 0;                                            //Функция f9 возвратит число в виде 0 
   }
}  

//Передача аргументов в функцию нахождения наибольшего из двух чисел по нажатию на кнопку
///////////////////////////////////////////
function f2 (a21, a22) {                                    //Объявляем функцию f2 нахождения наибильшего из двух чисел, которая принимает внутри себя два аргумента 
   if (a21 > a22) {                                         //Если переменная а21 больше переменной а22         
     return = a21;                                          //Функция f2 возвращает переменную a21 (true)
   } else {                                                 //Иначе...
     return a22;                                            //Функция f2 возвращает переменную a22 (false)
   }
}
let button = document.querySelector('.b-2');                //Объявляем переменную button со значением в виде кнопки .b-2     
button.addEventListener('click', f2.bind(button, 10, 6));   //Прослушиваем на button событие click, по срабатывании котрого запускаем функцию f2 и передаем в параметр а21 арумент 10 и в параметр а22 аргумент 6  

//Функция которая возвращает значение 1 или 0 после проверки операторами &&(и) и ||(или) 
////////////////////////////////////////////////////////////////////////////////////////
function f15 () {                                           //Объявляем функцию возврата 1 или 0          
   let num1 = document.querySelector('.s-151').value;       //Объявляем переменную num1 в значение которой получаем значение из селекта .s-151
   let select = document.querySelector('.s-152').value;     //Объявляем переменную select в значение которой получаем значение из селекта .s-152
   let num2 = document.querySelector('.s-153').value;       //Объявляем переменную select в значение которой получаем значение из селекта .s-153
   if (select == '&&') {                                    //Если значение переменной select равно &&
      return num1 && num2;                                  //Функция f15 возвращает результат сравнения num1 И num2
   } else {                                                 //Иначе...
      return num1 || num2;                                  //Функция f15 возвращает результат сравнения num1 ИЛИ num2
   }
 } 

//Функция простейший калькулятор 
/////////////////////////////////////////////////////////////////////
 function f14 () {                                         //Объявляем функцию f14 которая возвращает результаты неких выражений       
   let num1 =+ document.querySelector('.i-141').value;     //Объявляем переменную num1 в значение которой получаем значение из инпута .i-141 
   let num2 =+ document.querySelector('.i-142').value;     //Объявляем переменную num2 в значение которой получаем значение из инпута .i-142 
   let value = document.querySelector('.s-143').value;     //Объявляем переменную value в значение которой получаем значение из селекта .s-143   
   if (value == '+') {                                     //Если значение переменной value равно знаку + 
      return num1 + num2;                                  //Функция f14 возвращает результат выражения num1 + num2 
   } else if (value == '-') {                              //Иначе если значение переменной value равно знаку - 
      return num1 - num2;                                  //Функция f14 возвращает результат выражения num1 - num2  
   } else if (value == '*') {                              //Иначе если значение переменной value равно знаку *  
      return num1 * num2;                                  //Функция f14 возвращает результат выражения num1 * num2  
   } else if (value == '/') {                              //Иначе если значение переменной value равно знаку /     
      return num1 / num2;                                  //Функция f14 возвращает результат выражения num1 / num2  
   }
} 
