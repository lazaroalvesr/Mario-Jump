const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const canoposicao = cano.offsetLeft;
    const marioposicao = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoposicao <= 120 && canoposicao > 0 && marioposicao < 90) {

        cano.style.animation = 'none';
        cano.style.left = `${canoposicao}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposicao}px`;

        mario.src = './imagens/artworks-000532932795-h3i9v3-t500x500-PhotoRoom-removebg-preview.png';
        mario.style.marginLeft = '8px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);