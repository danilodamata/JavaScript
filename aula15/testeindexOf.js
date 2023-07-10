let num = [4,5,6,7,8]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posicoes.`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor esta na posicao ${pos}`)
}