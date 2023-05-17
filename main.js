/*
Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

*/
alert('Olá, podemos realizar cálculos para você')
let pupil = prompt('Qual o seu nome ?')
let numberOne = prompt(pupil + ' insira um número ')
let numberTwo = prompt('Insira outro número')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let checkEquals = numberOne === numberTwo ? 'são iguais' : 'são diferentes'

const sum = numberOne + numberTwo

let evenOrOdd = sum % 2 == 0 ? 'par' : 'ímpar'

const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`Os dois números inseridos ${checkEquals}`)
alert('soma ' + sum)
alert(`A soma dos dois números é ${evenOrOdd}`)
alert('subtração ' + sub)
alert('divisão ' + div)
alert('Resto da divisão ' + restDiv)

/*
💡 Para saber o tipo de dado você pode usar o operador `typeof`

var valor = 42; // Altere o valor aqui para testar diferentes casos

if (typeof valor === 'number') {
  console.log('É um número');
} else {
  console.log('Não é um número');
}


var valor = true; // Altere o valor aqui para testar diferentes casos

if (typeof valor === 'boolean') {
  console.log('É um booleano');
} else {
  console.log('Não é um booleano');
}







*/
