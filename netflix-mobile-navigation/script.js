const open_btn=document.querySelector('.open-btn')
const close_btn=document.querySelector('.close-btn')

const navs=document.querySelectorAll('.nav')

open_btn.addEventListener('click',()=>{
    navs.forEach(nav=>nav.classList.add('visible'))
})

close_btn.addEventListener('click',()=>{
    navs.forEach(nav=>nav.classList.remove('visible'))
})