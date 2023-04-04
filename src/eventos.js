
console.log('passei aqui');

function clicouBotao() {
    console.log('cliquei no botão');
    let elem = document.getElementById('titulo')
    console.log(elem);
    elem.innerHTML = '<span class="badge bg-secondary">Alguma coisa</span>'
    let nome = prompt('Escreva seu nome:')
    let elemMsg = document.getElementById('mensagem')
    //console.log(elemMsg);
    elemMsg.innerHTML = '<p>Oi <span class="badge bg-secondary">' + nome + '</span> tudo bem com vc?</p>'
}

function passouMouseBotao() {
    console.log('passou mouse no botão');
}

let fazAlgo = (valor, outro) => {
    console.log('fazAlgo: ',valor + outro);
}

export { clicouBotao, passouMouseBotao, fazAlgo }