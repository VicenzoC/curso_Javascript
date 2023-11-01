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
        previous.href = `../ex${proxex}/index.html`
    } else {
        previous.style.display = 'none'
    }
}
function tabuada() {
    var n = document.querySelector('input#numero').value 
    if(n.length == 0) {
        alert('Digite um número para gerar a tabuada!')
        exit()
    }
    var resultado = document.querySelector('div#resultado')
    resultado.innerHTML = ''
    for(x=1; x<=10; x++){
        var res = document.createElement('p')
        res.innerText= `${n} x ${x} = ${n*x}`
        resultado.appendChild(res)
    }
    
}

