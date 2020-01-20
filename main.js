function retornaSexo(sexo){
    // 1 == '1'//true
    // 1 === '1'//false
    // if(sexo === 'M'){
        // return 'Masculino'
    // }

    switch (sexo) {
        case 'M':
            return 'Masculino'
        case 'F':
            return 'Feminino'
        default:
            return 'Outro'
    }
}

console.log(retornaSexo('M'))
