document.querySelector('#amarelo').onclick = function(){
    let texto = document.querySelector('#texto')
    

    
    if(texto.style.backgroundColor == ''){
        console.log('teste')
       texto.style.backgroundColor = 'yellow'
       amarelo.textContent = "Fundo transparente"
    } else{
        texto.style.backgroundColor = ''
        amarelo.textContent = "Fundo amarelo"
    }
} 







