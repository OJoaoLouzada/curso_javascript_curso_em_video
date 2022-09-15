/*
var novoUsuario = {
  nome: 'João',
  idade: 31,
  pais: 'Brasil'
}

var nome = novoUsuario.nome
var pais = novoUsuario.pais

console.log(nome)
console.log(pais)

// Forma curta de transformar as chaves de um objeto em variáveis

var {idade} = novoUsuario
console.log(idade)
var {nome, idade, pais} = novoUsuario
console.log(nome, idade, pais)

var {nome: primeiroNome} = novoUsuario
console.log(primeiroNome)

//

var novoUsuario2 = {
  nome: {
    primeiro: 'João Paulo',
    
  }
}

// Forma longa
var primeiro = novoUsuario2.nome.primeiro
console.log(primeiro)

// Forma curta
var {nome: {primeiro}} = novoUsuario2
console.log(primeiro)

// Extrair propriedade que não existe no objeto
var {nome: {ultimo = 'Louzada'}} = novoUsuario2
console.log(ultimo)



//



function imprimeUsuario(usuario) {
  console.log(usuario.nome)
  console.log(usuario.idade)
  console.log(usuario.sexo)
}

var usuarioFunction = {
  nome: 'Gisele',
  idade: 31,
  sexo: 'F'
}
imprimeUsuario(usuarioFunction)

// OU

function imprimeUsuario({nome, idade, sexo}) {
  console.log(nome)
  console.log(idade)
  console.log(sexo)
}

var usuarioFunction = {
  nome: 'Gisele',
  idade: 31,
  sexo: 'F'
}
imprimeUsuario(usuarioFunction)


console.log(Object.keys(usuarioFunction))
console.log(Object.values(usuarioFunction))
*/


// LOOPS

var usuarioFunction = {
  nome: 'Gisele',
  idade: 31,
  sexo: 'F',
  pais: 'Brasil'
}

var props = Object.keys(usuarioFunction)
console.log(props)

for (var i = 0; i < props.length; i++) {
  console.log(props[i])
  console.log(usuarioFunction[props[i]])
}

for (var prop of props) {
  console.log(usuarioFunction[prop])
}

// O objeto pode herdar propriedades de outros objetos, seja por variáveis com mesmo nome, libs, etc... Use o hasOwnProperty

for (var prop2 in usuarioFunction){
  if (usuarioFunction.hasOwnProperty(prop2)){
    console.log(prop2, usuarioFunction[prop2])
  }
}