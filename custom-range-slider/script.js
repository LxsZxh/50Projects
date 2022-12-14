const range = document.getElementById('range')

range.addEventListener('input', e => {
  const value = +e.target.value
  const label = e.target.nextElementSibling
  // 获取滑动区域宽度：300px（带单位）
  const range_width = getComputedStyle(e.target).getPropertyValue('width')
  console.log('range_width: ', range_width);
  // 获取label宽度：80px
  const label_width = getComputedStyle(label).getPropertyValue('width')

  // 去掉px,获取单纯数字
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)

  const max = +e.target.max
  const min = +e.target.min

  const left =
  value * (num_width / max) -
  num_label_width / 2 +
  scale(value, min, max, 10, -10)
  
  // label元素位置
  label.style.left = `${left}px`
  label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
