let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function maxArray(arr) {
    return Math.max.apply(null, arr)
}

function minArray(arr) {
    return Math.min.apply(null, arr)
}

function sumArray(total, num) {
    return total + num
}

function analisar() {
    document.getElementById('total').innerHTML = `Ao todo, temos ${valores.length} números cadastrados`
    document.getElementById('max').innerHTML = `O maior valor informado foi ${maxArray(valores)}`
    document.getElementById('min').innerHTML = `O menor valor informado foi ${minArray(valores)}`
    document.getElementById('soma').innerHTML = `A soma de todos os valores é ${valores.reduce(sumArray)}`
    document.getElementById('media').innerHTML = `A média de todos os valores é ${(valores.reduce(sumArray)) / (valores.length)}`
}