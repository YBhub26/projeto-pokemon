/* 
OBJETIVO 1 - quando clicarmos na seta avançar, temos que mostrar o próximo cartão da lista
    passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    passso 2 - dar um jeito de identificar o clique do usuário na seta avançar
    passo 3 - fazer aparecer o próximo cartão da lista
    passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta voltar, temos que mostrar o cartão anterior da lista
    passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    passso 2 - dar um jeito de identificar o clique do usuário na seta voltar
    passo 3 - fazer aparecer o cartão anterior da lista
    passo 4 - buscar o cartão que está selecionado e esconder
*/

//passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
//passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById('btn-voltar');
//passo 3 - fazer aparecer o próximo cartão da lista
const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

//passso 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function(){
    if (cartaoAtual === cartoes.length - 1) return;

    //passo 4 - buscar o cartão que está selecionado e esconder
    esconderCartaoSelecionado();
    
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

//passso 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener('click', function(){
    if (cartaoAtual === 0) return;

    //passo 4 - buscar o cartão que está selecionado e esconder
    esconderCartaoSelecionado();

    cartaoAtual--; 
    mostrarCartao(cartaoAtual);
}); 