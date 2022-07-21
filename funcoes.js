let numero = 4.3;

console.log(Math.round(numero));

console.log(Math.trunc(numero));

console.log(Math.sqrt(numero));

console.log(Math.min(0, 150, 30, 20, -8, -200));

console.log(Math.max(0, 150, 30, 20, -8, -200));

function soma(num1, num2){
    return num1+num2;
}

function multiplicacao(a, b){
    return a*b;
}

console.log(multiplicacao(soma(2,2), soma(1,1)));