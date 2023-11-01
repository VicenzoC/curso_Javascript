function carregar(ex) {
    footer(ex)
    var data = document.getElementById('data')
    var anoatual = new Date().getFullYear()
    data.max = anoatual

}

function footer(ex) {
    var proxex = ex + 1
    var antex = ex - 1
    var next = document.querySelector('#next')
    var previous = document.getElementById('previous')
    next.href = `../ex${proxex}/index.html`
    if (antex >= 1) {
        previous.href = `../ex${antex}/index.html`
    } else {
        previous.style.display = 'none'
    }
}

function verificar() {
    var data = document.getElementById('data').value
    var sexo = document.getElementById('sexo').value
    var resultado = document.getElementById('resultado')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var anoatual = new Date().getFullYear()
    var gen = ''
    if (sexo == 'M'){
        gen = 'Homem'
    } else {
        gen = 'Mulher'
    }
    if (data > anoatual || data.length == 0) {
        resultado.innerText = 'Ano inválido'
    } else {
        var idade = anoatual - data
        resultado.innerText = `Detectamos ${gen} com ${idade} anos` 
        if(idade < 12) {
            img.src = `imagens/crianca${sexo}.jpg`
        } else if (idade < 25) {
            img.src = `imagens/jovem${sexo}.jpg`
        } else if (idade < 65) {
            img.src = `imagens/adulto${sexo}.jpg`
        } else {
            img.src = `imagens/idoso${sexo}.jpg`
        }
    }   resultado.appendChild(img)
}