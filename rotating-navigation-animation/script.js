const openBar=document.getElementById('open')
const closeBar=document.getElementById('close')
const container=document.querySelector('.container')

openBar.addEventListener('click',()=>{
    container.classList.add('show-nav')
})
closeBar.addEventListener('click',()=>{
    container.classList.remove('show-nav')
})