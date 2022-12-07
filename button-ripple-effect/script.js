const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // 鼠标坐标
    const x = e.pageX
    const y = e.pageY

    // 按钮最左侧的边相对于父元素的位置
    const buttonLeft = e.target.offsetLeft
    const buttonTop = e.target.offsetTop

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)
    setTimeout(() => circle.remove(), 500)
  })
})
