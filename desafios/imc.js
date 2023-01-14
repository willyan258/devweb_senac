// imc = peso / (altura * altura)
// tablea imc: 
// Menor que 18.5 - Abaixo do peso ;
// Entre 18.5 e 24.9 - Peso normal ;
// Entre 25.0 e 29.9 - Pré-obesidade ;
// Entre 30.0 e 34.9 - Obesidade Grau 1 ;
// Entre 35.0 e 39.9 - Obesidade Grau 2 ;
// Acima de 40 - Obesidade Grau 3




 let calcular = document.querySelector('#calcular').onclick = () =>{
    let nome = document.getElementById("nome").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let soma = peso / (altura * altura)
    let imc = ''
    console.log(nome)
    console.log(peso)
    console.log(altura)
    console.log('imc: ' + soma.toFixed(2))

    if(soma >= 18.5 && soma <= 24.9){
        imc = 'Normal'
    } else if(soma >= 25 && soma <= 29.9){
        imc ='pré-obesidade'
    } else if(soma >= 30 && soma <= 34.9){
        imc = 'Obesidade grau I'
    } else if(soma >= 35 && soma <= 39.9){
        imc = 'Obesidade grau I'
    } else if(soma >= 40){
        imc = 'Obesidade grau I'
    } else{
        imc ='Abaixo do peso'
    }
    
    let resultado = document.querySelector('#resultado') 
        let newElement = document.createElement('span')
    
        newElement.innerText = 
        `Olá, ${nome}! Você mede ${altura}cm, pesa ${peso}Kg, seu imc é de ${soma.toFixed(2)} e sua classificação é ${imc}`
         newElement.style.color = 'white'
         newElement.style.fontSize = '20px'
         resultado.appendChild(newElement)
     }
    

     






