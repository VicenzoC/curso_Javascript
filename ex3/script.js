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

function contar() {
    var ini = parseInt(document.querySelector('input#inicio').value)
    var fim = parseInt(document.querySelector('input#fim').value)
    var pas = parseInt(document.querySelector('input#passo').value)
    var res = document.createElement('p')
    var resultado = document.querySelector('div#resultado')
    if (ini.length == 0 || fim.length == 0 || pas.length == 0 || pas == 0){
        res.innerText = 'Dados inválidos, tente novamente!'
    } else {
        if(ini<fim){
            for(x = ini; x <= fim; x += pas){
                res.append(`${x} -> `)
            }
        } else {
            for(x = ini; x >= fim; x -= pas){
                res.append(`${x} -> `)
            }
        }
        res.append('FIM!')
    }
    resultado.appendChild(res)
}

function limpar(){
    res = document.querySelector('div#resultado > p')
    while (res != null){
        res.remove()
        res = document.querySelector('div#resultado > p')
    }
}