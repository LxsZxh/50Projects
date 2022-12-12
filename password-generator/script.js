const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

function getRandomLower() {
  // 返回由指定的 UTF-16 代码单元序列创建的字符串。
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

clipboardEl.addEventListener('click', () => {
  const password = resultEl.innerText
  if (!password) return
  // 将字符串写入到剪切板
  navigator.clipboard.writeText(password)
  alert('Password copied to clipboard')
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = ''
  const typesCount = lower + upper + number + symbol
  
  const typeArr=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])

  if(typesCount===0) return ''

  for(let i=0;i<length;i+=typesCount){
    typeArr.forEach(type=>{
        const funcName=Object.keys(type)[0]
        generatePassword +=randomFunc[funcName]()
    })
  }
  const finalPassword=generatePassword.slice(0,length)
  return finalPassword
}
