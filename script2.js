//Родительский класс
class String{
  constructor(name){
  	this.name = name;
  }
  setString(){
  	document.querySelector('body').innerHTML = `<h1>${num} ${this.name}</h1>`;
  }
};
//Дочерние классы
class Proger1 extends String{
	constructor(){
		super('программист');
	}
}
class Proger2 extends String{
	constructor(){
		super('программиста');
	}
}
class Proger3 extends String{
	constructor(){
		super('программистов');
	}
}

//Входные данные и их обработка
let num = prompt('Введите число');
let g = parseInt(num);
let f = () => g%10;
//Массивы для сравнения
const arr = [1];
const arr2 = [2,3,4];

//Проверки 
if(num == null || num == ''){
	alert('Вы ничего не ввели!');
}
if(g == NaN){
  alert('Вы ввели не число!');
}else{
	//Подбор правильного слова
	if(arr.includes(f()) && g != 11){
		new Proger1().setString();
	}else if(arr2.includes(f()) && g != 12 && g != 13 && g != 14){
		new Proger2().setString();
	}else{
		new Proger3().setString();
	}
}



