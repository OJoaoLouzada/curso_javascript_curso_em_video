// console.log(this)

function Usuario(){
  this.nome = 'João'
  this.idade = 31
  this.soma = function(a, b) {
    return a + b
  }
}
// Usuario()
// console.log(new Usuario())

// Call

function Personagem() {
  console.log(this)
}

var personagemThis = {
  nome: 'Arthur'
}

// Personagem.call(personagemThis)

// Apply

// Personagem.apply(personagemThis)

// Bind

var pers = Personagem.bind(personagemThis)
pers()



// Arrow Functions


/*
var soma = (a, b) => {
  return a + b
}
*/

// Forma curta
var soma = (a, b) => a + b

console.log(soma(6, 7))