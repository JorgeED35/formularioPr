/* const regExp =/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

console.log(regExp.test("jomar@hotmail.com")) */

const formu = document.getElementById('formulario')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')

const alertSuccess = document.getElementById('alertSuccess')
const alertEmail = document.getElementById('alertEmail')
const alertName = document.getElementById('alertName')

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none')
    alertSuccess.textContent ="Mensaje enviado con exito"
}

const pintarMsjError = (mistakes) => {
    mistakes.forEach(item => {
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msj
    });
}

formu.addEventListener('submit', e => {
    alertSuccess.classList.add('d-none')
    
    const mistakes = [];
    //console.log(!nombre.value.trim())
    
    e.preventDefault();
    
    if(!regUserName.test(nombre.value) || !nombre.value.trim()){
       nombre.classList.add('is-invalid')
        mistakes.push({
            tipo: alertName,
            msj: "Formato no valido en el campo nombre, solo letras "
        })
    }else{
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")
        alertName.classList.add("d-none")
    }
    if(!regEmail.test(apellido.value) || !apellido.value.trim()){
       apellido.classList.add('is-invalid')
        mistakes.push({
            tipo: alertEmail,
            msj: "Formato no valido en el campo email, caracteres validos"
        })
    }else{
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }
    
    if(mistakes.length !== 0){
        pintarMsjError(mistakes)
        return
    }

        pintarMensajeExito()
        console.log('Formato enviado')
})