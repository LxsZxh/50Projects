const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', e => {
  // 点击图片：检查是否有下一个兄弟元素
  if (
    e.target.parentNode.classList.contains('rating') &&
    e.target.nextElementSibling
  ) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
  // 点击文字：检查是否有上一个兄弟元素且兄弟元素为IMG
  else if (
    e.target.parentNode.classList.contains('rating') &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === 'IMG'
  ) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.innerHTML
  }
})

sendBtn.addEventListener('click', e => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br/>
        <strong>Feedback:${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
  }
}
