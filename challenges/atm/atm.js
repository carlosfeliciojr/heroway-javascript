// Cash Machine
// O Problema
// Desenvolva uma aplicação que simule a entrega de notas quando um cliente efetuar um saque em um caixa eletrônico.

// Sua aplicação deve:

// Entregar sempre o menor número de notas possíveis
// Sacar valores apenas com as notas disponíveis
// Ter saldo do cliente infinito
// Ter quantidade de notas infinita
// Possuir apenas notas de R$ 100,00, R$ 50,00, R$ 20,00 e R$ 10,00
// Retornar mensagens de erro em caso de entradas inválidas
// Observação:

// Exemplos:
// Entrada: 30.00
// Resultado: [20.00, 10.00]

// Entrada: 80.00
// Resultado: [50.00, 20.00, 10.00]

// Entrada: 125.00
// Resultado: Erro de notas indisponíveis

// Entrada: -130.00
// Resultado: Erro de valor inválido

// Entrada: NULL
// Resultado: Erro de valor nulo

const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const btnClear = document.getElementById('clear');
const btnConfirm = document.getElementById('confirm');
const billsDisplayed = document.getElementById('bills-displayer');
let amountToWithdraw = document.getElementById('displayer');
const balance = document.getElementsByClassName('value');

n0.addEventListener('click', () => insertIntoDisplay(n0));
n1.addEventListener('click', () => insertIntoDisplay(n1));
n2.addEventListener('click', () => insertIntoDisplay(n2));
n3.addEventListener('click', () => insertIntoDisplay(n3));
n4.addEventListener('click', () => insertIntoDisplay(n4));
n5.addEventListener('click', () => insertIntoDisplay(n5));
n6.addEventListener('click', () => insertIntoDisplay(n6));
n7.addEventListener('click', () => insertIntoDisplay(n7));
n8.addEventListener('click', () => insertIntoDisplay(n8));
n9.addEventListener('click', () => insertIntoDisplay(n9));

btnClear.addEventListener('click', () => {
    amountToWithdraw.value = '';
    billsDisplayed.innerHTML = '';
});

btnConfirm.addEventListener('click', () => {
    const value = Number.parseInt(amountToWithdraw.value);
    let stringValue = validateString(amountToWithdraw.value);

    if (value < 0) {
        amount = 'Invalid value';
        clearDisplay();
    } else if (amountToWithdraw.value === '') {
        amountToWithdraw.value = 'Null value';
        clearDisplay();
    } else if (stringValue == false) {
        amountToWithdraw.value = 'Banknotes indisponible';
        clearDisplay();
    } else {
        const bankNotes = {
            oneHundredBanknotes: {
                valueNotes: '100.00',
                qtdBanknotes: ''
            },
            fiftyBanknotes: {
                valueNotes: '50.00',
                qtdBanknotes: ''
            },
            twentyBanknotes: {
                valueNotes: '20.00',
                qtdBanknotes: ''
            },
            tenBanknotes: {
                valueNotes: '10.00',
                qtdBanknotes: ''
            }
        }

        const totalBankNotes = [bankNotes.oneHundredBanknotes, bankNotes.fiftyBanknotes, bankNotes.twentyBanknotes, bankNotes.tenBanknotes];

        for(let i = 0; i < 4; i++) {
            totalBankNotes[i].qtdBanknotes = qtdNotes(amountToWithdraw.value, totalBankNotes[i].valueNotes);
            if(totalBankNotes[i].qtdBanknotes > 0) {
                billsDisplayed.innerHTML = billsDisplayed.innerHTML + `[${totalBankNotes[i].qtdBanknotes}x $ ${totalBankNotes[i].valueNotes}] `;
            }
        }

        setTimeout(() => {
            amountToWithdraw.value = ''
            billsDisplayed.innerHTML = '';
        }, 5000);
    }
});

function insertIntoDisplay(element) {
    amountToWithdraw.value = amountToWithdraw.value + element.innerHTML;
}

function qtdNotes(value, noteValue) {
    const qtd = Math.trunc(value / noteValue);
    amountToWithdraw.value = value - (qtd * noteValue);
    return qtd;
}

function validateString(string) {
    const isValid = string.substr((string.length - 1), 1);
    if( isValid === '0') {
        return true;
    } else {
        return false;
    }
}

function clearDisplay() {
    setTimeout(() => {
        amountToWithdraw.value = '';
    }, 1500);
}