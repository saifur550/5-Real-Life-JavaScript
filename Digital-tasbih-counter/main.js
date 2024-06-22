
//selecting the required elements
function getById (id){return document.getElementById(id);};


const subhanAllahDisplay = getById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = getById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn = getById('subhanAllahDecrimentBtn')


let subhanAllahValue =0

subhanAllahIncrimentBtn.addEventListener('click', function(){
   if(subhanAllahValue===33){
      return alert('Done 33')
   }

   subhanAllahValue += 1
   subhanAllahDisplay.innerText = subhanAllahValue
})

subhanAllahDecrimentBtn.addEventListener('click', function(){
    if(subhanAllahValue === 0){
        return alert('Done 0')
    }
    subhanAllahValue -= 1
    subhanAllahDisplay.innerText = subhanAllahValue
    
})

const alhamdulillahDisplay = getById('alhamdulillahDisplay')
const alhamdulillahIncrimentBtn = getById('alhamdulillahIncrimentBtn')
const alhamdulillahDecrimentBtn = getById('alhamdulillahDecrimentBtn')


let alhamdulillahValue =0

alhamdulillahIncrimentBtn.addEventListener('click', function(){
   if(alhamdulillahValue===33){
      return alert('Done 33')
   }

   alhamdulillahValue += 1
   alhamdulillahDisplay.innerText = alhamdulillahValue
})

alhamdulillahDecrimentBtn.addEventListener('click', function(){
    if(alhamdulillahValue === 0){
        return alert('Done 0')
    }
    alhamdulillahValue -= 1
    alhamdulillahDisplay.innerText = alhamdulillahValue
    
})

const allahAkberDisplay = getById('allahAkberDisplay')
const allahAkberIncrimentBtn = getById('allahAkberIncrimentBtn')
const allahAkberDecrimentBtn = getById('allahAkberDecrimentBtn')

let allahAkberValue =0

allahAkberIncrimentBtn.addEventListener('click', function(){
   if(allahAkberValue===33){
      return alert('Done 33')
   }

   allahAkberValue += 1
   allahAkberDisplay.innerText = allahAkberValue
})

allahAkberDecrimentBtn.addEventListener('click', function(){
    if(allahAkberValue === 0){
        return alert('Done 0')
    }
    allahAkberValue -= 1
    allahAkberDisplay.innerText = allahAkberValue
    
})