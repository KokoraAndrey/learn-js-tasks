//? Использование "this" в литерале объекта
//* Ответ: undefined;

//? Создайте калькулятор
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
