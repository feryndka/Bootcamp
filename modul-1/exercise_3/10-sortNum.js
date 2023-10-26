let num1 = 27;
let num2 = 42;
let num3 = 18;
let temp = 0;

if (num1 < num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

if (num2 < num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}

if (num3 < num1) {
    temp = num3;
    num3 = num1;
    num1 = temp;
}

console.log(num1, num2, num3)