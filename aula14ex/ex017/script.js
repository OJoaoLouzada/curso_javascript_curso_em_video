function tabuada() {
  var numero = document.querySelector('input#numero')
  var tab = document.querySelector('select#seltab')

  if (numero.value.length == 0) {
    alert(`Preencha um número para calcular sua tabuada!`)
  } else {
    var n = Number(numero.value)
    tab.innerHTML = ''
    for (var t = 1; t <= 10; t++) {
      var item = document.createElement('option')
      item.text = `${n} x ${t} = ${t*n}`
      item.value = `tab${t}` //Só vai usar isso em PHP
      tab.appendChild(item)
    }
  }
}