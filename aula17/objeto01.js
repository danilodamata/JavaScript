let amigo = {nome:'Danilo', 
sexo:'M',
peso:'68',
engordar(p=0){
        console.log('Engordou')
        this.peso += p
}}

amigo.engordar(0)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)