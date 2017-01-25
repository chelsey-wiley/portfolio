console.log('howscript');

var diva = document.querySelector('.div-a');
var divb = document.querySelector('.div-b');
var divc = document.querySelector('.div-c');


diva.addEventListener('click', function(){
  diva.classList.toggle('topic-height');
});

divb.addEventListener('click', function(){
  divb.classList.toggle('topic-height');
});

divc.addEventListener('click', function(){
  divc.classList.toggle('topic-height');
});
