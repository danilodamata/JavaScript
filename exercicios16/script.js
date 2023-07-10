/*Primeira parte do codigo declara variaveis para armazenar referencias 
a elementos HTML na pagina, como um campo de entrada de numeros, 
uma lista suspensa e um elemento de exibicao de resultados
*/
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

/*Esta funcao verifica se e um numero valido dentro do intervalo
*/
function isNumero(n) {
    if(Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

/*Esta funcao recebe dois parametros: 'n' e o numero a ser
verificado e 'l' e a lista de valores. Verifica se o numero ja 
existe na lista
*/
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

/*Verifica se o numero digitado e valido e se ja nao esta presente na 
lista. Se as condicoes forem atendidas, o codigo dentro do 
bloco if sera executado
*/
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja existente!')
    }
    num.value = ''
    num.focus()
}
    function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
            res.innerHTML += `<p>A media dos valores digitados e ${media}.</p>`
        }
    }


