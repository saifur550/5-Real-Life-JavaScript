const showMsg = document.querySelector('i')
showMsg.style.transform =  'rotate(300deg)' , 'rotate(0deg)';

let clr = 0

showMsg.addEventListener('click', function(){
  clr = 1 - clr
  showMsg.style.color = clr ? 'red': 'green';
  showMsg.style.transform = clr ? 'rotate(45deg)' : 'rotate(0deg)';
    
})


