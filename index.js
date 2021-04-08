const button = document.querySelector('#timeout');
//button.addEventListener('click', () => {
  //  console.log('clicou!!');
//});

console.log('ANTES');

setTimeout(() => {
    console.log('result futuro');
}, 2000);

console.log('depois');


button.addEventListener('click', () =>{
    setTimeout(() => {
        console.log('Clicou no botao 3 segundos atras');
    }, 3000);
});

const buttonInterval = document.querySelector('#interval');
const divContagem = document.querySelector('#contagem');

buttonInterval.addEventListener('click', () =>{
    let contagem = 0;
    divContagem.textContent = contagem; 
    const interval = setInterval(() => {
      divContagem.textContent = ++contagem;
        if(contagem >= 10){
            clearInterval(interval);
        }
    }, 1000);
})


