//? 1.Две функции - один объект
const myData = {
    name: 'John',
    age: 30,
};

function A(obj, isAdmin) {
    return myData;
}

function B(obj, isActive) {
    return myData;
}

const a = new A();
const b = new B();

console.log(a == b);

// Ответ: true

//? 2. Создайте калькулятор при помощи конструктора, new Calculator
function Calculator() {
    this.read = function () {
        this.a = prompt('Введите первое число', 0);
        this.b = prompt('Введите второе число', 0);
    };
    this.sum = function () {
        return +this.a + +this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());

//? 3. Создайте new Accumulator
function Accamulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        let num = +prompt('Введите число', 0);
        this.value += num;
    };
}

let accamulator = new Accamulator(5);
accamulator.read();
accamulator.read();

alert(accamulator.value);
