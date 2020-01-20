function exibeAlgo(){
    console.log("Hello")
}

// executar várias vezes a msm função dentro de um intervalo
// em milissegundos

// setInterval(exibeAlgo(), 1000) // executa a função
// setInterval(exibeAlgo, 1000) // função como parâmetro

// executar uma vez uma função depois de um intervalo
// em milissegundos
setTimeout(exibeAlgo, 1000)
