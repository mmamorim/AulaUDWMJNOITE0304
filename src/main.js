
console.log(`oi gen ${5+6} te 'algo' `)

let elemBtn01 = document.getElementById('btn01')

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
elemBtn01.onclick = clicouBotao
