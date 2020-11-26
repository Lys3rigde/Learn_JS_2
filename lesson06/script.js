
"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

    function randomNumber() {
       let random = Math.floor(Math.random() * 100);

        if ( random === 0 ) {
            random = 1;
        }
        console.log(random);

        function guessNumber() {
            
                let inputNumber = prompt("Угадай число от 1 до 100");

                    if (inputNumber === null) {
                        alert("Игра окончена");
                    }   else if (!isNumber(inputNumber) || (parseFloat(inputNumber) > 100)) {
                        alert("Введи число!");
                        return guessNumber();
                    }   else if (inputNumber == random) {
                        alert ("Поздравляю, Вы угадали!!!");
                    }   else if (inputNumber > random) {
                        alert ("Загаданное число меньше");
                        return guessNumber();
                    }   else if (inputNumber < random) {
                        alert ("Загаданное число больше");
                        return guessNumber();
                    }
        }
        guessNumber();
    }
    randomNumber();