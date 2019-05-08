//zadanie 1 :

console.log('Zadanie pierwsze');
// dodanie do siebie dwoch zmiennych
const greeting = 'Hello';
const greetingSecond = 'Beautiful World';

const result = (`The answer is: ${greeting} ${greetingSecond}`);
console.log(result)

// zadanie 2 :
// funkcja multiply , wyrazenie funkcyjne ( arrow functions )
console.log('Zadanie drugie');
const multiply = (a = 0, b = 1) => (a * b);
console.log(`${multiply(5)}`);

// zadanie 3 :

console.log('Zadanie trzecie');
let average = (...argument) => {
    let sum = 0;
    for (let arg of argument) sum += arg;
    return sum; //zwraca let
}

console.log(average(1)); // 1
console.log(average(1, 2)); // 3
console.log(average(1, 2, 3)); // 6

// zadanie 4 :

console.log('Zadanie czwarte');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]; //tablica
const newGrades = average(...grades); // nowa tablica z poprzednim zadaniem
console.log(newGrades);

// zadanie 5 :

console.log('Zadanie piate');
// [1, 4, 'Iwona', false, 'Nowak'] wyciagniecie z tablicy :
const info = [1, 4, 'Iwona', false, 'Nowak'];
const [, , Name, , LastName] = info;
console.log(`${Name} ${LastName}`);