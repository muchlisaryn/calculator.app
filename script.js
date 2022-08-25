const calculatorScreen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll('.operator')
const numbers =  document.querySelectorAll ('.number')
const equalSign = document.querySelector ('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const delBtn = document.querySelector('.del')
const decimal = document.querySelector('.decimal')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '.':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default :
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const updateScreen = (operator) => {
    calculatorScreen.value = operator
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator += operator
    currentNumber = ''
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
       inputNumber(event.target.value)
       updateScreen(currentNumber)
    })
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const del = () => {
    prevNumber = '0'
    currentNumber = '0'
    calculationOperator = ''
}

delBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

operators.forEach((operator) => {
    operator.addEventListener("click",(event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})

equalSign.addEventListener('click', () => {
    calculate ()
    updateScreen(currentNumber)
})

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

decimal.addEventListener('click', (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
})