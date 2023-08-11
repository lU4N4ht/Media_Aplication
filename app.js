//nome 
//nota
//calcular media
/****************************************************************
* Objetivo: Criar um sistema de calculo de média via terminal
* Autora: Luana Magalhães Freire
* Data: 04/08/23
* Versão: 1.0.23
*****************************************************************/
const { stdin } = require('process');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('-------------------------------------------')

entradaDados.question('Digite o nome do aluno: ', function(nomeAluno){
    let nome = nomeAluno
        entradaDados.question('Digite a nota do primeiro bimestre:',function(primeiraNota){
            let nota1 = primeiraNota
                entradaDados.question('Digite a nota do segundo bimestre:',function(segundaNota){
                let nota2 = segundaNota
                 entradaDados.question('Digite a nota do terceiro bimestre:',function(terceiraNota){
                     let nota3 = terceiraNota
                        entradaDados.question('Digite a nota do quarto bimestre:',function(quartaNota){
                            let nota4 = quartaNota

                           nota1 = parseFloat(primeiraNota)
                           nota2 = parseFloat(segundaNota)
                           nota3 = parseFloat(terceiraNota)
                           nota4 = parseFloat(quartaNota)

                           let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4
                           
                           if(nota1 != null && nota2 != null && nota3 != null && nota4 != null){

                            if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10){

                               console.log('-------------------------------------------')
                               console.log('ERRO: Informe Uma Nota ENTRE 0 e 10')
                               console.log('-------------------------------------------')

                                } else{

                                    console.log('-------------------------------------------')
                                    console.log('-Nome do aluno: '+ nome)
                                    console.log('-Nota do primeiro bimestre: ' + nota1)
                                    console.log('-Nota do segundo bimestre: ' + nota2)
                                    console.log('-Nota do terceiro bimestre: ' + nota3)
                                    console.log('-Nota do quarto bimestre: ' + nota4)
                                    console.log('-Média final do aluno: ' + mediaFinal)
        
                                        if(mediaFinal >= 5){
                                        console.log('-Situação do aluno: APROVADO!')
                                        } else if(mediaFinal < 5){
                                        console.log('-Situação do aluno: REPROVADO!')
                                        }   
                                       console.log('-------------------------------------------')

                                    }
                                    
                           } else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){

                            console.log('-------------------------------------------')
                            console.log('ERRO: A Entrada de Números é OBRIGATÓRIA!!!')
                            console.log('-------------------------------------------')

                           } else{

                            console.log('-------------------------------------------')
                            console.log('ERRO: Preencha TODAS as Notas do Aluno!!!')
                            console.log('-------------------------------------------')
                        }

                        entradaDados.close();
                   })
                })
            })
        })
    })