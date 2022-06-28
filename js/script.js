
const mario = document.querySelector(".mario");

const jump = ()=>{
    const mario = document.querySelector(".mario");
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

window.addEventListener('keydown', function(e) {
    if( e.keyCode == 32){
        jump()
    }
  });

  const loop = setInterval(()=>{
    const pipe = document.querySelector(".pipe");
    const mario = document.querySelector(".mario");
    const clouds = document.querySelector(".clouds");

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
    }

  }, 10)
