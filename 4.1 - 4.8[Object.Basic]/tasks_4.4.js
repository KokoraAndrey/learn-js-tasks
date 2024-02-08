//? 1. Использование "this" в литерале объекта
//* Ответ: undefined;

//? 2. Создайте калькулятор
let calculator = {
    read(number1, number2) {
        this.a = number1;
        this.b = number2;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read(5, 5);
console.log(calculator.sum());
console.log(calculator.mul());

//? 3. Цепь вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        // показывает текущую ступеньку
        alert(this.step);
        return this;
    },
};

ladder.up().up().down().showStep().down();
