
const mainContent= document.querySelector('.container')
const icon = document.querySelector('i')


mainContent.addEventListener('dblclick', function(){
    icon.style.transform= 'translate(-50%,-50%) scale(1)';
     icon.style.opacity='0.8'

     setTimeout(() => {
          icon.style.transform='0'
     }, 1000);
     
    setTimeout(() => {
        icon.style.transform= 'translate(-50%,-50%) scale(0)';
        icon.style.color='red'
        
    }, 2000);
   
})


