// document.querySelector('#amarelo').onclick = function(){
//     let texto = document.querySelector('#texto')
    

    
//     if(texto.style.backgroundColor == ''){
//         console.log('teste')
//        texto.style.backgroundColor = 'yellow'
//        amarelo.textContent = "Fundo transparente"
//     } else{
//         texto.style.backgroundColor = ''
//         amarelo.textContent = "Fundo amarelo"
//     }

    
// } 

document.querySelector('#amarelo').onclick = (btn) => {
    let h1 = document.querySelector('#texto')

    if(h1.style.backgroundColor == ''){
        texto.style.backgroundColor = 'yellow'
        btn.target.innerText = "Fundo transparente"
    } else{
        texto.style.backgroundColor = ''
        btn.target.innerText = "Fundo amarelo"

    }
}











