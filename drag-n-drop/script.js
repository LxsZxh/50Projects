const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}
// 当用户开始拖动一个元素或者一个选择文本的时候触发
function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
}
// 在可拖动的元素或者被选择的文本进入一个有效的放置目标时触发。
function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}
// 当元素或者选择的文本被拖拽到一个有效的放置目标上时触发
function dragOver(e) {
   // 组织默认动作 
  e.preventDefault()
}
// 在拖动的元素或选中的文本离开一个有效的放置目标时被触发
function dragLeave() {
  this.className = 'empty'
}
// 在元素或选中的文本被放置在有效的放置目标上时被触发。
function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
// 在拖放操作结束时触发
function dragEnd() {
  this.className = 'fill'
}
