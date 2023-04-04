
import { clicouBotao, passouMouseBotao, fazAlgo } from "./eventos.js"

console.log(`oi gen ${5+6} te 'algo' `)

let elemBtn01 = document.getElementById('btn01')

elemBtn01.onclick = () => {
    console.log('cliquei no botão');
}
elemBtn01.onmousemove = function() {
    console.log('passei mouse');
}

fazAlgo('alguma coisa', 1010)
let x = 5

function funcao1() {
    let y = 23
    x++
    console.log('passei aqui funcao01');
    console.log('x ',x);
    console.log('y ',y);
}

console.log('passei aqui funcao01 '+x);
funcao1()

// NOTAÇÃO JSON
let pessoa = {
    nome: 'Ana',
    idade: 23,
    fazAniversario() {
        this.idade++
    }
}


console.log(pessoa);
pessoa.fazAniversario()
console.log(pessoa);
