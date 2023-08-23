function calculo(){
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let result = peso / (altura**2)

    return result
}

function exibeImc(){
    let imc = calculo()
    let exibir = document.getElementById('resultado_imc')
    let valor = document.getElementById('valor_imc')
    valor.innerHTML = `Seu IMC é: ${calculo().toFixed(1)}`

    if (imc <= 18.5){
        exibir.innerHTML = "Voce está abaixo da faixa de imc esperado"
    }
    if (18.5 < imc && imc <= 24.9){
        exibir.innerHTML = "Voce está na faixa de imc esperado"
    }
    if (24.9 < imc && imc <= 29.9){
        exibir.innerHTML = "Voce está abaixo da faixa de imc classificado como sobrepeso"
    }
    if (29.9 < imc && imc <= 39.9){
        exibir.innerHTML = "Voce está abaixo da faixa de imc classificado como obesidade"
    }
    if (imc > 39.9){
        exibir.innerHTML = "Voce está abaixo da faixa de imc classificado como obesidade mórbida"
    }
}