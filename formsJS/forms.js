//acesso aos dados do forulario 

// console.log(document.forms[0].usuario.value)

//acesso dos dados do formulario pelo NAME  
console.log(document.forms.frm_login)
console.log(document.forms.frm_login.senha)

//eventos focus e blur
// focus acontece quando 'clica/entra' no elemento 
// blur é quando 'clica/sai' do elemento

let form = document.forms.frm_login

// form.usuario.addEventListener('focus', () => {
//     console.log('usuario selecionado')
// })

// form.usuario.addEventListener('blur', () => {
//     console.log('usuario saiu')
//     if(form.usuario.value == 'leandro'){
//         document.querySelector('#erro').style.display = 'none'
//     } 
//     else{
//         document.querySelector('#erro').style.display = 'block'
//     }
// })

//toda vez valor do input é alterado
// form.senha.addEventListener('change', () =>{
//     console.log('alterado')
// })


//toda vez que algo for inserido
// form.senha.addEventListener('input', () =>{
//     console.log('introduzido pelo input')
// })

//copy, cut e paste (observar input type)
// form.senha.addEventListener('copy', (el) =>{
    
//     console.log('texto copiado')
// })

//obter lista de erros

let lista = document.querySelectorAll('.verificacao > li')

//verificação de senha
form.senha.addEventListener('input', (el) => {
    let forca = 0
    


    if(match('/[a-z]+/')){
        console.log('minuscula ok')
    }
})

