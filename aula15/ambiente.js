let num = [5, 8, 2, 9, 3]
console.log(num)

console.log(`O vetor tem ${num.length} elementos`)

num.sort()

console.log(`Em ordem crescente, o vetor fica ${num}`)
num.push(0)
console.log(num)

let pos = num.indexOf(50)

if (pos == -1){
  console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor 8 está na posição ${pos}`)
}