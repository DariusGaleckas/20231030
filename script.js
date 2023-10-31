//1 Užduotis
//Sukurkite funkciją, kuri patikrina, ar duotas masyvas turi tam tikrą elementą.
let array = [1, 2, 3, 4, 5, 6, 7];

function isInArray(num) {
    if (array.includes(num)) {
        return console.log(`${num} is in an array`);
    } else {
        return console.log(`No number ${num} in an array`);
    }
}
isInArray(2);
isInArray(-2);

//2 Užduotis
//Sukurkite funkciją, kuri apskaičiuoja kvadrato plotą pagal kraštinės ilgį.
const squareArea = (num) => num ** 2;

console.log(squareArea(10));

//3 Užduotis
//Sukurkite funkciją, kuri patikrina,
//ar duotas skaičius yra teigiamas, neigiamas ar nulis.

const whatNum = (num) => {
    if (num > 0) {
        return `${num} is positive`;
    } else if (num < 0) {
        return `${num} is negative`;
    } else {
        return `${num} is zero`;
    }
};
console.log(whatNum(5));
console.log(whatNum(-5));
console.log(whatNum(0));

//4 Užduotis
//Sukurkite funkciją,
// kuri surūšiuoja masyvą didėjimo arba mažėjimo tvarka
let array1 = [1, 3, -5, 7, 9, 0, 11];

const arraySortAsc = (elm) => elm.sort((a, b) => a-b);
const arraySortDesc = (elm) => elm.sort((a, b) => b - a);
console.log(arraySortAsc(array1));
console.log(arraySortDesc(array1));

