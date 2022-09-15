function escreva() {
  console.log('Olá, programador!')
}
escreva()

function escrevaMensagem(mensagem) {
  console.log(mensagem)
}

escrevaMensagem('Olá pessoal!!!')
escrevaMensagem('Tudo certo??')

function soma(a, b) {
  return a + b
}

var resultado = soma(10, 5)
console.log(resultado)

function somaTudo(numeros) {
  var total = 0
  for(var num of numeros) {
    total = total + num
  }
  return total
}
var arrayNumeros = [3, 5, 7, 10, 9, 12]
var result = somaTudo(arrayNumeros)
console.log(result)

//Parâmetro rest (quando não sabe quantos parâmetros a função vai receber)
function escreverEndereco(rua, cidade, pais, ...complementos) {
  console.log(rua)
  console.log(cidade)
  console.log(pais)
  console.log(complementos)
}
escreverEndereco('Avenida Sete', 'Rio de Janeiro', 'Brasil', 'Bloco 38', 'Ap 301', 'CEP 21941-535')


/*//Função autoinvocável
( function autoExecuta(nome) {
  console.log('Executei!', nome)
}('João') )*/


// O nome da função 'subtrai' não serve pra nada, então ele pode ser omitido (função anônima)
var subtraiDoisNumeros = function subtrai(a, b){
  return a - b
}
console.log(subtraiDoisNumeros(10, 3))

// Funções Callback (função que chama outra função)
function somaCallback(a, b, fnCallback) {
  return fnCallback(a + b)
}
console.log(somaCallback(5, 6, function(total) {
  return total * 2
}))

// Definindo valor padrão de parâmetros para funções
function escreveNome(nome = 'João', idade = 31) {
  console.log(nome)
  console.log(idade)
}
escreveNome()
escreveNome('Gisele', '30')