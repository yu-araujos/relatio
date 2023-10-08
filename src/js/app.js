// Add style on header when scroll
function scrollHeader() {
  const nav = document.getElementById('nav');

  if(this.scrollY >= 5) nav.classList.add('active-header'); 
  else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader);

// title animation
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  let dataText = [ 
    "Atraia novos clientes e aumente o faturamento do seu negócio pela internet.", 
    "Aumente as curtidas e o engajamento da sua página nas redes sociais.", 
    "Seu negócio na primeira página do Google .",
    "Receba mensagens diárias de leads qualificados.",
    "Sua marca famosa no Brasil inteiro.",
  ];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text?.length)) {
      // add next character to p
     document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1500);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 100);
     }
     // check if dataText[i] exists
    if (i < dataText[i]?.length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});