let num1; 
let num2;
let operacao;
let escolha;
do {
        num1 = prompt("Digite um número")
        num2 = prompt("Digite outro número")
        operacao = prompt` 
        soma............1
        subtração......2
        multiplicação...3
        divisão.........4
        Qual operação deseja executar? 
        `
        if(operacao == "1"){
                function somar (n1,n2){

                return Number(n1) + Number(n2)
                }
                alert(somar(num1,num2))

        }else if(operacao == "2"){
                function subtrair (n1,n2){

                return Number(n1) - Number(n2)
                }
                alert(subtrair(num1,num2))
        }else if(operacao == "3"){
                function multiplicar (n1,n2){

                return Number(n1) * Number(n2)
                }
                alert(multiplicar(num1,num2))
        }else if(operacao == "4"){
                function subtrair (n1,n2){

                return Number(n1) / Number(n2)
                }
                alert(subtrair(num1,num2))
        }else{
                alert("Operacão invalida")
        }

        escolha = prompt("Deseja continuar? S/N")
}while(escolha == "S" || escolha == "s")