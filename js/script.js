console.log ('hellow');

var regHead = document.querySelector('.reg-head');
var home = document.querySelector('.home');
var theImg = document.querySelector('.the-img');

var diva = document.querySelector('.div-a');
var divb = document.querySelector('.div-b');
var divc = document.querySelector('.div-c');

theImg.addEventListener('click', function() {
  regHead.classList.toggle('head-height');
});

diva.addEventListener('click', function(){
  diva.classList.toggle('topic-height');
});

divb.addEventListener('click', function(){
  divb.classList.toggle('topic-height');
});

divc.addEventListener('click', function(){
  divc.classList.toggle('topic-height');
});
