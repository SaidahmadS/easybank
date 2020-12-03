var menuscript = document.querySelector('#menu-script');
var bgrButton = document.querySelector('#headersrc');
var linksrc = document.querySelector('#innersrc')

menuscript.addEventListener('click', function() {

  this.classList.toggle('menu-close');
  bgrButton.classList.toggle('header-script');
  linksrc.classList.toggle('link-script');
});