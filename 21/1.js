// Задание 1
/*
function numbers(a,b,c){
	if (a < b){
		return a;
	}else if(b < c){
		return b;
	}else if(a == b && b == c){
		return 'Все числа равны';
	}else{
		return c;
	}
}

let a = prompt('Введите первое число')
let b = prompt('Введите второе число')
let c = prompt('Введите третье число')

console.log(numbers(a,b,c));

// Задание 2

function seconds(a,b,c){
	return a * 86400 + b * 3600 + c * 60; 
}

let days = prompt('Введите количество дней')
let hours = prompt('Введите количество часов')
let min = prompt('Введите количество минут')

console.log(seconds(days,hours,min));
*/


// Задание 3

function getFactorial(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}

var n  = prompt('Введите число')
var result = getFactorial(n); 
console.log(result);


// Задание 4




// Задание 5

