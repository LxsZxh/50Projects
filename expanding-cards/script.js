const ctnEl = document.querySelector('.container')

ctnEl.addEventListener('click', function (event) {
  Array.prototype.forEach.call(this.children, (el) => {   
    el.classList.remove('active')
  })
  event.target.classList.add('active')
})