
"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

    function randomNumber() {
       let random = Math.floor(Math.random() * 100);
       let attempts = 10;

        if ( random === 0 ) {
            random = 1;
        }
        console.log(random);

        function guessNumber() {
            
                let inputNumber = prompt("Угадай число от 1 до 100");
                    if (attempts == 0) {
                        let checkLose = confirm("Вы исчерпали все попытки. Хотите Сыграть снова?");
                        if (checkLose === true) {
                            return randomNumber();
                        }   else {
                            alert("Игра окончена");
                            return;
                        }
                        
                    }

                    attempts--;

                    if (inputNumber === null) {
                        alert("Игра окончена");
                    }   else if (!isNumber(inputNumber) || (parseFloat(inputNumber) > 100)) {
                        alert("Введи число! Осталось попыток: " + attempts);
                        return guessNumber();
                    }   else if (inputNumber == random) {
                        let checkWin = confirm ("Поздравляю, Вы угадали!!! Хотите сыграть еще?");
                            if (checkWin === true) {
                                return randomNumber();
                            }   else {
                                return;
                            }
                    }   else if (inputNumber > random) {
                        alert ("Загаданное число меньше, осталось попыток: " + attempts);
                        return guessNumber();
                    }   else if (inputNumber < random) {
                        alert ("Загаданное число больше, осталось попыток:" + attempts);
                        return guessNumber();
                    }
        }
        guessNumber();
    }
    randomNumber();