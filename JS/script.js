var ponteiro = document.documentElement
ponteiro.addEventListener('mousemove', move=>{
    ponteiro.style.setProperty('--x',move.clientX + 'px')
    ponteiro.style.setProperty('--y',move.clientY + 'px')
})

var link1 = document.getElementById("link1");
var linha1 = document.getElementById("linha1");
var link2 = document.getElementById("link2");
var linha2 = document.getElementById("linha2");
var link3 = document.getElementById("link3");
var linha3 = document.getElementById("linha3");
link1.addEventListener("mouseover",()=>{
    linha1.classList.add("linhaExpandir");
})
link1.addEventListener("mouseout", ()=>{
    linha1.classList.remove("linhaExpandir");
})
// Animações para o segundo link
link2.addEventListener("mouseover",()=>{
    linha2.classList.add("linhaExpandir");
})
link2.addEventListener("mouseout", ()=>{
    linha2.classList.remove("linhaExpandir");
})
// Animações para o terceiro link
link3.addEventListener("mouseover",()=>{
    linha3.classList.add("linhaExpandir");
})
link3.addEventListener("mouseout", ()=>{
    linha3.classList.remove("linhaExpandir");
})

function changeTitleColor(card) {
    const title = card.querySelector('.titulo-projeto');
    title.classList.add('cor-titulo-hover');
}

function resetTitleColor(card) {
    const title = card.querySelector('.titulo-projeto');
    title.classList.remove('cor-titulo-hover');
}


// Função para adicionar/remover a classe dependendo do tamanho da tela
function aplicarEfeitoFixed() {
    var sobreMim = document.getElementById('sobre-mim');
    if (window.innerWidth >= 768) {
        sobreMim.classList.add('fixed-md');
        sobreMim.classList.remove('alinhamento');
    } else {
        sobreMim.classList.remove('fixed-md');
        sobreMim.classList.add('alinhamento');
    }
}

// Adicionar um ouvinte de evento para verificar a mudança de tamanho da tela
window.addEventListener('resize', aplicarEfeitoFixed);

// Chamar a função uma vez para aplicar inicialmente com base no tamanho atual da tela
aplicarEfeitoFixed();
