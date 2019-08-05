//Входные данные и их обработка
var num = prompt('Введите число');
var g = parseInt(num);
var f = g % 10; 

//Массивы для сравнения
var arr = [1];
var arr2 = [2, 3, 4];

//Проверки 
if (num == null || num == '') {
  alert('Вы ничего не ввели!');
}

if (g == NaN) {
  alert('Вы ввели не число!');
} else {
  //Подбор правильного слова
  if (arr.includes(f) && g != 11) {
    document.querySelector('body').innerHTML = "<h1>" + num + " программист</h1>";
  } else if (arr2.includes(f) && g != 12 && g != 13 && g != 14) {
    document.querySelector('body').innerHTML = "<h1>" + num + " программиста</h1>";
  } else {
    document.querySelector('body').innerHTML = "<h1>" + num + " программистов</h1>";
  }
}