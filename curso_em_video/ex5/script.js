function carregar(ex) {
    footer(ex)
    
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


var lista = []
function adiciona(){
    window.prompt()
    document.querySelector('div#resultado').innerHTML = ``
    let num = document.querySelector('input#numero')
    let n = Number(num.value)
    if ((100 >= n && n > 0) && (lista.indexOf(n) == -1)) {
        lista.push(n)
        document.querySelector('div#lista').innerHTML += `<p>${lista[lista.length - 1]}</p>`
    }
    num.value = ''
    num.focus()
}


function resultado(){
    if (lista.length == 0) {
        return
    }
    let soma = 0
    let max = lista[0]
    let min = lista[0]
    for(pos in lista){
        soma += lista[pos]
        if (max < lista[pos]){
            max = lista[pos]
        }
        if (min > lista[pos]){
            min = lista[pos]
        }
    }
    let tam = lista.length
    let med = soma/tam
    document.querySelector('div#resultado').innerHTML = `<p>Tamanho da lista: ${tam}</p>`
    document.querySelector('div#resultado').innerHTML += `<p>Maior número da lista: ${max}</p>`
    document.querySelector('div#resultado').innerHTML += `<p>Menor número da lista: ${min}</p>`
    document.querySelector('div#resultado').innerHTML += `<p>Soma dos números da lista: ${soma}</p>`
    document.querySelector('div#resultado').innerHTML += `<p>Média dos números da lista: ${med}</p>`
}