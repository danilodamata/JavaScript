
    var agora = new Date()
    var hora = agora.getHours()
    console.log(`Sao ${hora} horas.`)
    if (hora < 12 || hora >= 6) {
        console.log('Bom dia!')
    } else if (hora<= 18)
        console.log('Boa tarde!')
    if (hora >18)
    console.log('Boa noite!')
    else if (hora <6) {
        console.log('Boa madrugada!')
    }
   
