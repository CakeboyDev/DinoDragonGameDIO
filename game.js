const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const score = document.querySelector('.placar');
let local=5;
let pulando=false;
let dano=false; danando=false;
let gameover=false;

window.addEventListener('keypress', pularei);



function pularei(e){
  key = e.keyCode;
  if(key===13){
    if(!dano){
      setTimeout(function(){danando=false;
      },3000)
      setTimeout(function(){dano=false;
      },9000)
    matar()}};
  if(key===32){
    if(!pulando){
    pular();}}}

function matar(){
  danando=true;
  dano=true;

  let morfar=setInterval(function(){

    if(danando){
      dino.style.left=5+'vw';

      dino.style.backgroundImage="url('boom.gif')";
      dino.style.width=20+'vw';
      dino.style.height=40+'vh';
      dino.style.transform= "scale(1.4,1.3)";
    }else{
      dino.style.transform= "scale(0.5,0.6)";
      dino.style.backgroundImage= "url('goku.gif')";
      dino.style.width= 17+'vw';
      dino.style.height= 30.3+'vh';
}

},20);
};



function pular(){
  pulando = true;
  let puloso =setInterval(function(){
  if(local<=10&&local>=0){
    local+=2;
    dino.style.bottom=local+'vh'}
  if(local<=20&&local>10){
    local+=1.8;
    dino.style.bottom=local+'vh'}
  if(local<=30&&local>20){
    local+=1.2;
    dino.style.bottom=local+'vh'}
  if(local<=40&&local>30){
    local+=0.9;
    dino.style.bottom=local+'vh'}
  if(local<=50&&local>40){
    local+=0.5;
    dino.style.bottom=local+'vh'}

  if(local>=49){
    clearInterval(puloso);

    let caindo = setInterval(function(){
      if(local<=15&&local>5){
        local-=2.2;
        dino.style.bottom=local+'vh'}
      if(local<=25&&local>15){
        local-=1.8;
        dino.style.bottom=local+'vh'}
      if(local<=35&&local>25){
        local-=1.5;
        dino.style.bottom=local+'vh'}
      if(local<=45&&local>35){
        local-=1;
        dino.style.bottom=local+'vh'}
      if(local<=55&&local>45){
        local-=0.7;
        dino.style.bottom=local+'vh'}
      if(local<=5){

        pulando=false;
        clearInterval(caindo)}},9)}
},9)}

function criaCactus(){
  let tempro = Math.random()*(5000-100)+100;
  let cactus = document.createElement('div');

  cactus.style.bottom=13.5+'vh';
  let poposi = 75;
  cactus.classList.add('obs');
  background.appendChild(cactus);

let cactusMove = setInterval(function(){
    poposi-=0.8;
    cactus.style.left=poposi+'vw';
    if(poposi<-30){
      clearInterval(cactusMove);
      background.removeChild(cactus)}
    if(poposi<15&&local<20&&poposi>1&&danando&&!gameover){
      pontos+=10;
      clearInterval(cactusMove);
      background.removeChild(cactus)}
    else if(poposi<10&&local<20&&poposi>1&&!danando){
      gameover=true;
      clearInterval(cactusMove);
      clearInterval(pontuacion);
      document.body.innerHTML='<div class="endgame"><h1 class="end-game">Fim de jogo!</h1> <h1 class="end-game">Você fez '+pontos+' pontos!</h1></div>';
      document.body.style.backgroundImage= "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.9)), url('supremo.jpg')";
  }},20)
setTimeout(criaCactus, tempro)}





var pontos = 0;
let pontuacion=setInterval(function(){

pontos++;
score.innerHTML=pontos;
},1000)
















criaCactus();
