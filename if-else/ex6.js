/*Exercício 6: Verificação de idade
Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.*/

let nascimento = prompt ("Digite seu ano de nascimento: ")

if (nascimento < 2006) {
    console.log ("Você é maior de idade!")
}

else {
    console.log ("Você é menor de idade!")
}