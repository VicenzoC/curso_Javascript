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