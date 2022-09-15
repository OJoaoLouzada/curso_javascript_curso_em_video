var usuario = {
  nome: 'João',
  profissão: 'Multimídia',
  idade: 31,
  'ultimo-nome': 'Louzada'
}
console.log(usuario)
console.log(usuario.nome)
console.log(usuario.profissão)
console.log(usuario.idade)
console.log(usuario['ultimo-nome'])

usuario.ano = 2022
console.log(usuario)

delete usuario.idade
console.log(usuario)


var usuario2 = {
  digaOi: function(name) { //Pode apagar o : e o function
    return `Olá ${name}`
  }
}
console.log(usuario2.digaOi('JoMpAvip'))


var cor = 'Azul'
var usuario3 = {
  nome: 'Arthur',
  cor
}
console.log(usuario3)


// Juntando vários objetos em um só
var usuario4 = {
  nome: 'Arthur',
  idade: 1
}
var extraInfo = {
  pais: 'Brasil',
  estado: 'RJ'
}
var novoObjeto = Object.assign({}, usuario4, extraInfo)
console.log(novoObjeto)

Object.assign(usuario4, extraInfo)
console.log(usuario4)

// Spread
var novoUsuario = {
  ...usuario4,
  ...extraInfo,
  sexo: 'M',
  idade: 31
}
console.log(novoUsuario)



var nomeVariavel = 'Estado'
var nomee = 'FirstName'
var usuario5 = {
  [nomee]: 'João',
  [nomeVariavel]: 'Rio de Janeiro'
}
console.log(usuario5)

// Getters e setters
var users = [
  {
    nome: 'João',
    idade: 31
  },
  {
    nome: 'Gisele',
    idade: 31
  },
  {
    nome: 'Arthur',
    idade: 0
  }
]
console.log(users)

var user = {
  posicao: 0,
  get atual() { // Get retorna um valor
    return users[this.posicao]
  },
  set atual(posicao) { // Set define um valor
    this.posicao = posicao
  },
  proximo() {
    ++this.posicao
  },
  anterior() {
    --this.posicao
  }
}
console.log(user.atual)
user.proximo()

console.log(user.atual)

user.proximo()
console.log(user.atual)

user.anterior()
console.log(user.atual)

user.atual = 0
console.log(user.atual)

user.atual = 2
console.log(user.atual)
