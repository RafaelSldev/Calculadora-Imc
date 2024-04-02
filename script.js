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
    
    if (isNaN(calculo())){
        exibir.innerHTML = "ERRO"
    }

    if (imc < 18.5){
        valor.innerHTML = `<strong>Seu IMC é: ${calculo().toFixed(1)}</strong>`
        exibir.innerHTML = "Peso baixo"
    }
    if (18.6 < imc && imc <= 24.9){
        valor.innerHTML = `<strong>Seu IMC é: ${calculo().toFixed(1)}</strong>`
        exibir.innerHTML = "Normal"
    }
    if (25 < imc && imc <= 29.9){
        valor.innerHTML = `<strong>Seu IMC é: ${calculo().toFixed(1)}</strong>`
        exibir.innerHTML = "Sobrepeso"
    }
    if (30 < imc && imc <= 39.9){
        valor.innerHTML = `<strong>Seu IMC é: ${calculo().toFixed(1)}</strong>`
        exibir.innerHTML = "Obesidade"
    }
    if (imc > 39.9){
        valor.innerHTML = `<strong>Seu IMC é: ${calculo().toFixed(1)}</strong>`
        exibir.innerHTML = "Obesidade Mórbida"
    }
}
function clearInput(){
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var exibir = document.getElementById('resultado_imc')
    var valor = document.getElementById('valor_imc')

    if(altura != "" || peso != "" || exibir != "" || valor != ""){
        altura.value = ""
        peso.value = ""
        exibir.innerHTML = ""
        valor.innerHTML = ""
    }
    
}
