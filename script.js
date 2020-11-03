const dino = document.querySelector('.dino');
const background = document.querySelector('.fundo');
let pulo = false;
let posicao = 0;
let fim = false;
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!pulo) {
      pular();
    }
  }
}
function pular() {
  pulo = true;
  let upInterval = setInterval(()=>{
    if (posicao >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(()=>{
        if (posicao <= 0) {
          clearInterval(downInterval);
          pulo = false;
        } else {
          posicao -= 20;
          dino.style.bottom = posicao + 'px';
        }
      }, 20);
    } else {
      posicao += 20;
      dino.style.bottom = posicao + 'px';
    }
  }, 20);
}
function criarcacto() {
  const cacto = document.createElement('div');
  let posicaoCacto = 1000;
  let aleatorio = Math.random()*6000;
  if(fim) return;
  cacto.classList.add('cacto');
  background.appendChild(cacto);
  cacto.style.left = posicaoCacto + 'px';
  let leftTimer = setInterval(()=>{
    if (posicaoCacto < -60) {
      clearInterval(leftTimer);
      background.removeChild(cacto);
    } else if (posicaoCacto > 0 && posicaoCacto < 60 && posicao < 60) {
      clearInterval(leftTimer);
      fim = true;
      document.body.innerHTML = '<h1 class="fimjogo">Fim de jogo</h1>';
    } else {
      posicaoCacto -= 10;
      cacto.style.left = posicaoCacto + 'px';
    }
  }, 20);
  setTimeout(criarcacto, aleatorio);
}
criarcacto();
document.addEventListener('keyup', handleKeyUp);