const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
  // 点击两次最后一个则索引减1
  if (idx === 7 && smallCups[idx].classList.contains('full')) {
    idx--
  }
  // 当前被点一次了且后面一杯水没被点,在点一次自身就会索引-1
  else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--
  }
  // 小于等于当前索引值的增加full类，否则移除
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length 
  
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
