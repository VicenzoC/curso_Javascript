function carregar(ex) {
    var msg = window.document.getElementById('horas');
    var img = window.document.getElementById('imagem');
    var horas = new Date().getHours();
    msg.innerHTML = `Agora são ${horas} horas.`;
    if (horas >=0 && horas < 12) {
        img.src = 'imagens/manha.jpg';
        document.body.style.background = '#8ac9f9';
    } else if (horas >=12 && horas < 18) {
        img.src = 'imagens/tarde.jpg';
        document.body.style.background = '#ff984e';
    } else {
        img.src = 'imagens/noite.jpg';
        document.body.style.background = '#200093';
    };
    footer(ex)
}

function footer(ex) {
    var proxex = ex + 1;
    var antex = ex - 1;
    var next = document.querySelector('#next');
    var previous = document.getElementById('previous');
    next.href = `../ex${proxex}/index.html`;
    if (antex >= 1) {
        previous.href = `../ex${proxex}/index.html`;
    } else {
        previous.style.display = 'none'
    }
}