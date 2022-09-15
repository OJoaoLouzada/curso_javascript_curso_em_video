function verificar() {
  var data = new Date()  
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert(`Verifique os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'img/bebe_homem.jpg')
      } else if (idade <= 21) {
        img.setAttribute('src', 'img/jovem_homem.jpg')
      } else if (idade < 60) {
        img.setAttribute('src', 'img/adulto_homem.jpg')
      } else {
        img.setAttribute('src', 'img/idoso_homem.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'img/bebe_mulher.jpg')
      } else if (idade <= 21) {
        img.setAttribute('src', 'img/jovem_mulher.jpg')
      } else if (idade < 60) {
        img.setAttribute('src', 'img/adulto_mulher.jpg')
      } else {
        img.setAttribute('src', 'img/idoso_mulher.jpg')
      }
    }
    res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    res.appendChild(img)
  }

}