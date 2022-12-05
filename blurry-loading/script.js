const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0) // 透明度
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` // 高斯模糊
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  // 100 * (-1) / 100 + 1 = 0
  // 100 * (-30) / 100 + 30 = 0
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
