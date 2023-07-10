let val = [3,3,5,5,2,6,7]
val.sort()
/*for (let pos = 0; pos < val.length; pos++) {
console.log(`A posicao ${pos} tem o valor ${val[pos]}`)
}

for (let pos = 0; pos<num.length; pos++){
    console.log(num[pos])
}*/

//modo simplificado de fazer a mesma coisa
for (let pos in val) {
    console.log(`A posicao ${pos} tem o valor ${val[pos]}`)
}