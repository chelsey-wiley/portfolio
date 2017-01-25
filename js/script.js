console.log ('hellow');

var regHead = document.querySelector('.reg-head');
var home = document.querySelector('.home');
var theImg = document.querySelector('.the-img');

theImg.addEventListener('click', function() {
  console.log('clicked with gusto')

//This grabs the HTML dom element with class name of read this

  regHead.classList.toggle('head-height')

});
