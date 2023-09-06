const vermelho = document.querySelector('.amarelo');
const amarelo = document.querySelector('.vermelho');
const verde = document.querySelector('.verde'); 



 

 let contador =1;

 setInterval(() =>{

if(contador <= 1){
    vermelho.classList.add('amarelo-ativo');
}   else if (contador === 5) {
    amarelo.classList.add('vermelho-ativo');
    vermelho.classList.remove('amarelo-ativo');
}else if (contador === 10){
    verde.classList.add('verde-ativo');
    amarelo.classList.remove('verde-ativo');

}else if (contador === 15){
verde.classList.remove('verde-ativo');
contado = 0;
}






 })