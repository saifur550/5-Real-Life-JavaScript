
const isStatus = document.querySelector('h5')
const btn = document.querySelector('#add')
const userInfo = document.querySelector('#userInfo')
let check = 0;

btn.addEventListener('click', function(){
  check = 1 - check;
  isStatus.innerHTML = check ? 'friend': 'stranger'
  isStatus.style.color = check ? 'green':'coral'
  btn.innerHTML = check? 'remove friend': 'add friend'
})