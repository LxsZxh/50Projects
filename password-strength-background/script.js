const password = document.getElementById('password')
const background = document.getElementById('bg')

password.addEventListener('input', e => {
  const input = e.target.value
  const len = input.length
  const blurValue = 20 - len * 2
  background.style.filter=`blur(${blurValue}px)`
})
