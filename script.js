
//WHILE
/*ELEMENTOS NECESSÁRIOS
inicialização de variável
condição de continuação
um conjunto de ações
uma alteração*/
/*
console.log("Prática guiada I - WHILE")
let numero = +prompt("Digite um número para somar ou 0 para sair")

let soma = 0 */

//while /*ENQUANTO ESSA FUNÇÃO FOR VERDADEIRA/TRUE*/( numero!==0 /*condição de continuação*/){
    /* Um conjunto de ações*/
 /*   soma = soma + numero
    console.log(soma)
    console.log(numero)
    numero = Number(prompt("Digite um número para somar ou 0 para sair"))
}
console.log(Soma = soma);
*/
//_________________________

//FOR
/*ELEMENTOS NECESSÁRIOS
inicialização de variável
condição de continuação
um conjunto de ações
uma alteração*/

/*console.log("Prática guiada II - FOR")

const numero = +prompt("Digite um número para somar ou 0 para sair")
for (let i=0; i<=numero; i++)*//*i++ = i+1*//*{
console.log(i)
}*/

/*console.log("Prática guiada III - FOR em ARRAYS")

const listaDeNum = [2,4,6,8,10,12,14]

for (let i=0; i<listaDeNum.length; i++){
console.log(`O número do índice ${i} é ${listaDeNum[i]}`);
}
console.log("FIM")*/

/*const listaA = [{a:"Oi", b:"Olá", c:"Tchau"}]

for (let i=0; i<listaA.length; i++){
console.log(`O número do índice ${i} é ${listaA[i].c}`);
} //PERCORRE O ÍNDICE DO ARRAY*/


//EXERCÍCIO DE FIXAÇÃO

//1

/*let usuario = prompt('Qual é o seu tipo de usuário? \nA = Administrador \nB = Usuário comum \nC = Usuário assinante').toUpperCase()*/

//COMO USAR O TOUPPERCASE NESSA ESTRUTURA --- NÃO USAR CONTADOR PARA TO UPPER CASE

//let contador = 0 //Contagem de itens dentro do WHILE

/*while(usuario !== "A"){
    console.log("Acesso negado")
    usuario = prompt('Qual é o seu tipo de usuário? \nA = Administrador \nB = Usuário comum \nC = Usuário assinante').toUpperCase() */// TRAZER A PERGUNTA JUNTO COM A CONSTANTE PARA RECEBER O RESULTADO DESEJADO
 //   contador = contador++; 
/*}
console.log("Seja bem-vindo(a), Administrador")*/

//2

//ESCREVA, USANDO FOR, UM CÓDIGO QUE FAÇA A TABUADA DE 2

/*for (let i = 0; i <=10; i++) {
    console.log(i*2)
}*/

//3 - CRIE UM LAÇO FOR QUE RECEBA UM ARRAY DE STRING E IMPRIMA A STRING EM CAIXA ALTA

const materialEscolar = ["lápis", "caderno", "apontador", "borracha", "caneta"]

for (let i=0; i<materialEscolar.length; i++){
console.log(`Lista de materiais escolares: ${materialEscolar[i].toUpperCase()}`);
}
console.log("Boas aulas")