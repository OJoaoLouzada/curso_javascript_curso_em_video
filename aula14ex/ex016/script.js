function contar() {
  var inicio = document.querySelector('input#inicio')
  var fim = document.querySelector('input#fim')
  var passo = document.querySelector('input#passo')
  var res = document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert(`Faltam dados!`)
  } else {
    res.innerHTML = `Contando: <br>`
    var start = Number(inicio.value)
    var end = Number(fim.value)
    var step = Number(passo.value)

    if (step <= 0) {
      alert(`Passo inválido! Considerando Passo = 1`)
      step = 1
    }

    if (start < end) {
      // Contagem crescente
      for (var c = start; c <= end; c += step) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } else {
      // Contagem decrescente
      for (var c = start; c >= end; c -= step) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }

  
}