const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
  todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', e => {
  e.preventDefault()
  addTodo()
})

function addTodo(todo) {
  let todoText = input.value
  if (todo) {
    todoText = todo.text
  }
  if (todoText) {
    const todoEl = document.createElement('li')
    // 对storage中的数据进行判断
    if (todo && todo.completed) {
      todoEl.classList.add('completed')
    }
    todoEl.innerText = todoText
    // 监听鼠标左键点击事件
    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS()
    })
    // 监听鼠标点击右键或者按下键盘上的菜单键
    todoEl.addEventListener('contextmenu', e => {
      e.preventDefault()
      todoEl.remove()
      updateLS()
    })
    // 元素追加
    todosUL.appendChild(todoEl)
    input.value = ''
    updateLS()
  }
}

function updateLS() {
  todosEl = document.querySelectorAll('li')
  const todos = []
  todosEl.forEach(item => {
    todos.push({
      text: item.innerText,
      completed: item.classList.contains('completed'),
    })
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
