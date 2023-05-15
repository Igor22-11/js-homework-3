/* Task 1 */

let number1;
let number2;

for (let i = 0; i < 1; i++) {
  number1 = +prompt('Введите первое число диапазона', '');
  number2 = +prompt('Введите второе число диапазона', '');
  if ((Math.abs(number2 - number1) + 1) < 5 || !Number.isInteger(number1) || !Number.isInteger(number2)) {
    i--
  }
  if (number1 < number2) {
    for (let j = number1; j <= number2; j++) {
      console.log(j);
    }
  } else {
    for (let j = number1; j >= number2; j--) {
      console.log(j);
    }
  }
};


/* Task 2 */

const pin = '1234';
const puk = '4321';
let attemptsPin = 3;
let attemptsPuk = 3;

let enteredPin = prompt(`Введите PIN. Количество попыток ${attemptsPin}`, '')

if (pin === enteredPin) {
  alert('Доступ разрешен')
} else {
  attemptsPin--;
  while (attemptsPin > 0 && pin !== enteredPin) {
    enteredPin = prompt(`Неверный PIN. Введите PIN. Количество попыток ${attemptsPin}`, '')
    attemptsPin--;
  }
  if (pin === enteredPin) {
    alert('Доступ разрешен');
  } else {
    alert('Доступ закрыт');
    let enteredPuk = prompt(`Введите PUK. Количество попыток ${attemptsPuk}`, '')


    //****
    if (puk === enteredPuk) {
      alert('Доступ разрешен')
    } else {
      attemptsPuk--;
      while (attemptsPuk > 0 && puk !== enteredPuk) {
        enteredPuk = prompt(`Неверный PUK. Введите PUK. Количество попыток ${attemptsPuk}`, '')
        attemptsPuk--;
      }
      if (puk === enteredPuk) {
        alert('Доступ разрешен');
      } else {
        alert('Доступ закрыт');
      }
    }

  }
}







/* Task 3 */

const startNumber = prompt('Введите число, начало произвольного диапазона', '')
const finishNumber = prompt('Введите число, конец произвольного диапазона', '')


if (startNumber === null || finishNumber === null) {
  alert('Операция отменена пользователем!');
} else if (startNumber === '' || finishNumber === '') {
  alert('Пожалуйста, введите числа.')
} else if (isNaN(+startNumber) || isNaN(+finishNumber)) {
  alert('Некорректный ввод! Пожалуйста, введите числа.');
}

if (startNumber < finishNumber) {

  for (let i = +startNumber; i <= +finishNumber; i++) {
    let result = `Число ${i}`;

    if (i > 100) {
      result += ` больше ста`;
    } else if (i < 100) {
      result += ` меньше ста`;
    } else {
      result += ` равно сто`;
    }

    if (i % 2 === 0) {
      result += `, четное`;
    } else {
      result += `, нечетное`;
    }

    if (i < 0) {
      result += `, отрицательное`;
    } else if (i > 0) {
      result += `, положительное`;
    } else {
      result += `, равно 0`;
    }

    if (Number.isInteger(i)) {
      result += `, недробное`;
    } else {
      result += `, дробное`;
    }

    console.log(result);
  }


} else {
  for (let i = +startNumber; i > +finishNumber; i--) {
    let result = `Число ${i}`;

    if (i > 100) {
      result += ` больше ста`;
    } else if (i < 100) {
      result += ` меньше ста`;
    } else {
      result += ` равно сто`;
    }

    if (i % 2 === 0) {
      result += `, четное`;
    } else {
      result += `, нечетное`;
    }

    if (i < 0) {
      result += ` , отрицательное`;
    } else if (i > 0) {
      result += `, положительное`;
    } else {
      result += `, равно 0`;
    }

    if (Number.isInteger(i)) {
      result += `, недробное`;
    } else {
      result += `, дробное`;
    }

    console.log(result);
  }
}



/* Task 4 */

const startNumber = prompt('Введите число, начало произвольного диапазона', '')
const finishNumber = prompt('Введите число, конец произвольного диапазона', '')


if (startNumber === null || finishNumber === null) {
  alert('Операция отменена пользователем!');
} else if (startNumber === '' || finishNumber === '') {
  alert('Пожалуйста, введите числа.')
} else if (isNaN(+startNumber) || isNaN(+finishNumber)) {
  alert('Некорректный ввод! Пожалуйста, введите числа.');
}

if (startNumber < finishNumber) {

  for (let i = +startNumber, count = 1; i <= +finishNumber; i++, count++) {
    console.log(i);
    if (count === 7) {
      break;
    }
  }
} else {
  for (let i = +startNumber, count = 1; i >= +finishNumber; i--, count++) {
    console.log(i);
    if (count === 7) {
      break;
    }
  }
}
