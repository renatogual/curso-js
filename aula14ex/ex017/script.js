function gerar() {
    let num = Number(document.getElementById('num').value) 
    let res = document.getElementById('res')
    res.innerHTML = ''
    
    if (num == 0) {
        alert('Digite um numero por favor')
    } else {
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} X ${i} = ${num*i}`
            res.appendChild(item)
        }
    }
    
    
    
}