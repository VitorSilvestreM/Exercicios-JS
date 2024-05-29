// Construir um menu que é possível escolher um exercicio entre os exercicios anteriores, para ser executado.
//Faça com que o menu repita a sua execução, disponibilize as opçoes para o usuário, até que seja digitado "sair"

// function exercicioLogin() {

//     let username = prompt("Digite o seu usuário: ");

//     let senha = prompt("Digite sua senha: ");

//     if(username == "admin" && senha == "senha123"){
//         console.log("Login bem sucedido")
//     }
//     else{
//         console.log("Você não tem permissão de acesso!")
//     }
// }

// let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Login")

// switch (opcao) {
//     case "1":
//         exercicioLogin()
//         break;
//     default:
//         break;    


            
// }

function exercicioSemana() {
    let dia = prompt ("Informe um número de 1 a 7")

    if (dia == 1) {
        console.log ("Hoje é segunda-feira!")
    }

    else if (dia == 2) {
        console.log ("Hoje é terça-feira!")
    }

    else if (dia == 3) {
        console.log ("Hoje é quarta-feira!")
    }

    else if (dia == 4) {
        console.log ("Hoje é quinta-feira!")
    }

    else if (dia == 5) {
        console.log ("Hoje é sexta-feira!")
    }

    else if (dia == 6) {
        console.log ("Hoje é sábado!")
    }

    else if (dia == 7) {
        console.log ("Hoje é domingo!")
    }
}

let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n1 - Exercicio Semana  \n\n2 - Exercicio Par ou Impar  \n\n3 - Exercicio Notas Escolares  \n\n4 - Numeros de 1 a 10  \n\n5 - Numeros pares 1 ao 10  \n\n6 - Numeros impares 1 ao 50  \n\n7 - Tabuada  \n\n8 - Sequencia de Fibonacci")

switch (opcao) {
    case "1":
        exercicioSemana()
        break;
    default:
        break;    
           
}

function exercicioPar() {
    let number = parseInt (prompt ("Insira um número"))

    if (number % 2 == 0) {
        console.log ("Número par!")
    }

    else {
        console.log ("Número impar!")
    }
}

switch (opcao) {
    case "2":
        exercicioPar()
        break;
    default:
        break;    
         
}

function exercicioNota() {
    let nota1 = parseInt (prompt ("Digite a nota 1"))
    let nota2 = parseInt (prompt ("Digite a nota 2"))
    let nota3 = parseInt (prompt ("Digite a nota 3"))
    let nota4 = parseInt (prompt ("Digite a nota 4"))
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    console.log (media)

    if (media >= 7) {
        console.log ("APROVADO!")
}

    else if (media > 4 && media < 7) {
        console.log ("RECUPERAÇÃO!")
    }

    else if (media < 5) {
        console.log ("REPROVADO!")
    }
}

switch (opcao) {
    case "3":
        exercicioNota()
        break;
    default:
        break;    
         
}

function exercicio1ao10() {
    for(let num = 1; num <=10; num++) {
        console.log(num);
    }
}

switch (opcao) {
    case "4":
        exercicio1ao10()
        break;
    default:
        break;    
         
}

function exercicioPares1ao10() {
    for (let num = 2; num <= 10; num+=2) {
        console.log (num)
    }
}

switch (opcao) {
    case "5":
        exercicioPares1ao10()
        break;
    default:
        break;    
         
}

function exercicioImpares1ao50() {
    for (let num = 1; num <= 50; num+=2) {
        console.log (num)
    }
}
switch (opcao) {
    case "6":
        exercicioImpares1ao50()
        break;
    default:
        break;    
         
}

function tabuada() {
    const numero = parseInt(prompt("Coloque um numero para realizarmos a sua tabuada ate o 10:"));


    if (isNaN(numero)) {
        console.log("Por favor, ingrese un número válido.");
    } else {
        console.log(`Tabuada de ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
}

switch (opcao) {
    case "7":
        tabuada()
        break;
    default:
        break;    
         
}

function Fibonacci() {
    
    function fibonacci(n) {
        let fib = [0, 1]; 

        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }

        return fib;
    }

    console.log("os primeros 10 números de Fibonacci sao:");
    console.log(fibonacci(10));
}

switch (opcao) {
    case "8":
        Fibonacci()
        break;
    default:
        break;    
         
}

do {

} while(opcao != "sair");


