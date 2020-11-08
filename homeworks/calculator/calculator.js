// Implemente as funções de uma calculadora.
// Não permitir divisões por zero.
// Não permitir strings como valores (notificar o usuário)


let entry1 = document.getElementById('entrada-1');
let entry2 = document.getElementById('entrada-2');
const clearBtn = document.getElementById('btn-clear');
const sum = document.getElementById('btn-soma');
const subtraction = document.getElementById('btn-subtracao');
const multiplication = document.getElementById('btn-multiplicacao');
const division = document.getElementById('btn-divisao');
let result = document.getElementById('resultado');

sum.addEventListener('click', () => {
    if (error(entry1.value, entry2.value) == false) {
        result.innerText = parseFloat(entry1.value) + parseFloat(entry2.value);
    } else {
        result.innerText;
    }
})

subtraction.addEventListener('click', () => {
    if (error(entry1.value, entry2.value) == false) {
        result.innerText = parseFloat(entry1.value) - parseFloat(entry2.value);
    } else {
        result.innerText;
    }
})

multiplication.addEventListener('click', () => {
    if (error(entry1.value, entry2.value) == false) {
        result.innerText = parseFloat(entry1.value) * parseFloat(entry2.value);
    } else {
        result.innerText;
    }
})

division.addEventListener('click', () => {

    if (entry2.value == '0') {
        result.innerText = 'It is not possible to divide by zero';
    } else {
        if (error(entry1.value, entry2.value) == false) {
            result.innerText = parseFloat(entry1.value) * parseFloat(entry2.value);
        } else {
            result.innerText;
        }
    }
})

clearBtn.addEventListener('click', () => {
    clear();
});

function clear() {
    entry1.value = '';
    entry2.value = '';
    result.innerText = '';
}

function error(value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        result.innerText = 'Error: You entered a character';
        return result.innerText;
    } else {
        return false;
    }
}