let num = [3, 4, 7, 2, 1]
console.log(num)

/*
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num){
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}