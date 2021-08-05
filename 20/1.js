// Задание 1

var ap_n = Number(prompt('Введите номер квартиры'));
if (ap_n < 1 || ap_n > 100){
	console.log("Введите номер квартиры от 1 до 100");
} else if(ap_n >= 1 && ap_n <= 20){
	console.log("Подъезд №1");
}else if(ap_n >= 21 && ap_n <= 40){
	console.log("Подъезд №2");
}else if(ap_n >= 41 && ap_n <= 60){
	console.log("Подъезд №3");
}else if(ap_n >= 61 && ap_n <= 80){
	console.log("Подъезд №4");
}else if(ap_n >= 81 && ap_n <= 100){
	console.log("Подъезд №5")
}else{
	console.log("Введите номер квартиры от 1 до 100");
}


// Задание 2

var i_c = String(prompt('Введите название марки авто'));
switch(i_c){
	case 'Ford':alert('Ford - старна происхождения США');
	break;
	case 'BMW':alert('BMW - старна происхождения Германия');
	break;
	case 'Peugeot':alert('Peugeot - старна происхождения Франция');
	break;
	case 'Volkswagen':alert('Volkswagen - старна происхождения Германия');
	break;
	case 'Renault':alert('Renault - старна происхождения Франция');
	break;
	case 'Kia':alert('Kia - старна происхождения Южная Корея');
	break;
	default:alert('some_input – страна происхождения неизвестна')
}


// Задание 3

var year = Number(prompt('Введите год'))

if (year % 4 === 0){
	alert('Високосный');
}else{alert('Невисокосный')}



// Задание 4

var num = Number(prompt('Введите число от 1 до 20'))

for (var i = 1; i <= 10; i++) {
	var variable = num * i;
	console.log(num + ' * ' + i + ' = ' + variable);
}



// Задание 5

let sum_n = 0; 

for (var i = 1; i <= 50; i++){
	if (i % 2 != 0){
		sum_n = sum_n + i;
	}
}

console.log('Сумма нечетных чисел = ' + sum_n);



// Задание 6


let pred = 1, p_pred = 0, c = 0, mem = 0;

for (var i = 0; i < 15; i++){
	if (i == 0){
		c = p_pred;
	}else if(i ==1){
		c = pred;
	}else{
		mem = pred;
		c = pred + p_pred;
		pred = c;
		p_pred = mem;
	}

	console.log(c);
}




//Задание 7

let row = '';
let col = '';
for (var i = 1; i <= 4; i++){
	row = '';
	for (var n = 1; n <= 8; n++){
		if (i%2 ==0){
			if (n % 2 == 0) {
				row = row + ' ';
			}else{
				row = row + '#';
			}
		}else{
			if (n % 2 == 0) {
				row = row + '#';
			}else{
				row = row + ' ';
			}	
		}
	}
	console.log(row);
}