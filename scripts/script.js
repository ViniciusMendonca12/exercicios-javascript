function carregar(){
    var getTime = new Date()
    var horaAtual = getTime.getHours()
    var fundo = document.getElementById("bdHoraDiaInterativo") 
    var horaSite = document.getElementById("agoraSao")
    var imagem = document.getElementById("imagem")
    
    horaSite.innerHTML = `Agora são ${horaAtual} horas!!`
    if(horaAtual >= 6 && horaAtual < 12){
        fundo.style.backgroundColor = "#f2f2b2"
        imagem.src = "../img/imgDeDia.jpg"

    } else if(horaAtual >=12 && horaAtual < 18){
        fundo.style.backgroundColor = "#fcbea4"
        imagem.src = "../img/imgDeTarde.jpg"

    }else if(horaAtual >= 18 && horaAtual <= 23){
        fundo.style.backgroundColor = "#131819"
        imagem.src = "../img/imgDeNoite.jpg"

    }else {
        fundo.style.backgroundColor = "#2c6c8b"
        imagem.src = "../img/imgDeMadrugada.jpg"

    }
    

}

function verificar(){
    
    var ano = document.getElementById("txtano")
    var getdata = new Date()
    var data = getdata.getFullYear()
    if(ano.value >= data || ano.value.length < 1){
        window.alert("Erro. Preencha novamente o seu ano de nascimento.")
    }else{
        var anoFinal = Number.parseInt(data) - Number.parseInt(ano.value)
        var resultadoIdade = document.getElementById("resultadoIdade")
        var resultadoImagem = document.getElementById("resultadoImagem")
        var resultadoSexo = document.getElementById("resultadoSexo")
        resultadoIdade.innerHTML =`A sua idade é ${anoFinal} anos`
        var sexo = document.getElementsByName("radsex")
        var genero = ''
        var imagem = document.createElement("imagem")
        imagem.setAttribute('id','img')

        if(sexo[0].checked){
            genero = "Masculino"
            resultadoSexo.innerHTML = genero

            if(anoFinal > 0 && anoFinal <=  10){
                resultadoImagem.src = '../img/crianca10m.jpg' 

            }else if(anoFinal <= 20){
                resultadoImagem.src = '../img/adolescente20H.jpg' 

            }else if(anoFinal <= 60){
                resultadoImagem.src = '../img/adulto50H.jpg' 

            }else if(anoFinal <= 80 || anoFinal > 80 ){
                resultadoImagem.src = '../img/idoso80H.jpg' 

            }

        }else if(sexo[1].checked){
            genero = "Feminino"
            resultadoSexo.innerHTML = genero

            if(anoFinal > 0 && anoFinal <=  10){
                resultadoImagem.src = '../img/crianca10f.jpg' 

            }else if(anoFinal <= 20){
                resultadoImagem.src = '../img/adolescente20F.jpg' 

            }else if(anoFinal <= 60){
                resultadoImagem.src = '../img/adulto50F.jpg' 

            }else if(anoFinal <= 80 || anoFinal > 80 ){
                resultadoImagem.src = '../img/idoso80F.jpg' 

            }
        }
    }
        

}


function fazerContagem(){
    var inicioElemento = document.getElementById("inicio")
    var fimElemento = document.getElementById("fim")
    var passoElemento = document.getElementById("passo")
    var resultadoContagem = document.getElementById("resultadoContagem")

    

    if(inicioElemento.value.length == 0 || fimElemento.value.length == 0 || passoElemento.value.length == 0 ){
        window.alert("Preencha todos os valores")

    }else{
        inicio = Number(inicioElemento.value)
        fim = Number(fimElemento.value)
        passo = Number(passoElemento.value)

        if(inicio < fim){
            for(let c = inicio; c <= fim; c+= passo){

                resultadoContagem.innerHTML += `${c} `
            }
        } else{
            for(let c = inicio; c >= fim; c -= passo){
                resultadoContagem.innerHTML += `${c} `

            }
        }
        
         
    }
   
}


function gerarTabuada(){
    var nmrTabuada = Number(document.getElementById("numeroTabuada").value)
    var inputTabuada = document.getElementById("inputTabuada")
    
    if(nmrTabuada == ""){
        window.alert("Você deve preencher o campo com um valor!!")
    }else{
        inputTabuada.text =''
        for(var c = 1; c <= 10; c++ ){
            var multiplicacao = nmrTabuada * c
            var item = document.createElement('option')
            item.setAttribute('id','option')
            item.text = `${nmrTabuada} x ${c} = ${multiplicacao} `
            item.value = `tab${c}`
            inputTabuada.appendChild(item) 
    
        }

    }
    

}

let itens = []

function inserirNumero(){
    var numeroParaAnalise = Number(document.getElementById("numeroParaAnalise").value)
    var inputNumerosAnalise = document.getElementById("inputNumerosAnalise")
    console.log(itens)
    if(numeroParaAnalise <= 1 || numeroParaAnalise >= 100 || numeroParaAnalise == ''){
        window.alert("Siga as instruções corretamente!!")
    }else{
        var item = document.createElement('option')
        item.setAttribute('id','option')
        item.text = ` Valor ${numeroParaAnalise} inserido `
        inputNumerosAnalise.appendChild(item)
        itens.push(numeroParaAnalise)
        console.log(itens)
        document.getElementById("numeroParaAnalise").value = ""
    }

}

function btnFinalizar(){
    var respostaDiv = document.getElementById("respostaDiv")
    respostaDiv.innerText = ""
    console.log("teste")
    respostaDiv.innerHTML = ` <p> Ao todo, temos ${itens.length} números cadastrados <p>`
    respostaDiv.innerHTML += `<p> O maior valor informado foi ${maiorNumero()} <p> `
    respostaDiv.innerHTML += `<p> O menor valor informado foi ${menorNumero()} <p> `
    respostaDiv.innerHTML += `<p> Somando todos os valores, temos ${somandoValores()} <p> `
    respostaDiv.innerHTML += `<p> Tirando a media dos valores, temos ${mediaValores()} <p> `

   

   

}


function maiorNumero(){
    c = 0
    var maiorElemento = itens[0]
    while(c < itens.length){
        if(itens[c]> maiorElemento){
            maiorElemento = itens[c]

        }
        c++

    }
    return maiorElemento
}

function menorNumero(){
    c = 0
    var menorElemento = itens[0]
    while(c < itens.length){
        if(itens[c] < menorElemento){
            menorElemento = itens[c]

        }
        c++

    }
    return menorElemento
}

function somandoValores(){
    var somaValores = 0 
    for(let c in itens){
         somaValores += itens[c]
    }
    return somaValores
}

function mediaValores(){
    var somaValores = 0 
    for(let c in itens){
         somaValores += itens[c]
    }
    var media = somaValores / itens.length
    return media
}
     

    



