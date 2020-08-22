function contar() {
    var ini =  Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('resultado')

    if (ini == 0 || fim == 0 || passo == 0) {
        alert('Favor preencher todos os dados')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: '
        if (ini < fim) {
            // Contagem crescente
            for (ini; ini <= fim; ini += passo) {
                res.innerHTML += `${ini} &#10151`    
            }
        } else {
            for (ini; ini >= fim; ini -= passo) {
                res.innerHTML += `${ini} &#10151`
            }
        }
        res.innerHTML += '&#9872'
    }   
}


