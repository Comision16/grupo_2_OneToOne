console.log('register');
const $ = (id) => document.getElementById(id);
const exRegEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i



$('name').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})

$('surname').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})
$('email').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})
$('password').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})
$('password2').addEventListener('focus', function () {
    this.classList.remove('is-invalid')
    
})
//---------------------------------------------------------------//

$('name').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-name').innerHTML = "El nombre es requerido"
            break;
            case this.value.length <2 :
                this.classList.add('is-invalid');
                $('error-name').innerHTML = "el nombre requiere minimo 2 caracteres"
                break;
        default:
            this.classList.remove('is-invalid');
                $('error-name').innerHTML = null
            break;
    }
    
})

$('surname').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-surname').innerHTML = "El apellido es requerido"
            break;
            case this.value.length <2 :
                this.classList.add('is-invalid');
                $('error-surname').innerHTML = "el apellido requiere minimo 2 caracteres"
                break;
        default:
            this.classList.remove('is-invalid');
                $('error-surname').innerHTML = null
            break;
    }
    
})
$('email').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email es requerido"
            break;
            case !exRegEmail.test(this.value):
                this.classList.add('is-invalid');
                $('error-email').innerHTML = "Email con formato invalido"
                break;
                
        default:
            this.classList.remove('is-invalid');
                $('error-email').innerHTML = null
            break;
    }
    
})
$('password').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña es requerida";
            break;
        case this.value.length < 8:
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña debe tener al menos 8 caracteres";
            break;
        case !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}/.test(this.value):
            this.classList.add('is-invalid');
            $('error-password').innerHTML = "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-password').innerHTML = null;
            break;
    }
});

$('button-eye').addEventListener('click', function () {
    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash") 
 $('password').type = $ ('password').type === "password" ? "text" : "password"
   
});



$('password2').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-password2').innerHTML = "La confirmación de la contraseña es requerida";
            break;
        case this.value !== $('password').value:
            this.classList.add('is-invalid');
            $('error-password2').innerHTML = "Las contraseñas no coinciden";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-password2').innerHTML = null;
            break;
    }
});
 
$('button-eye2').addEventListener('click', function () {
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
    $('password2').type = $('password2').type === "password" ? "text" : "password";
});






//---------------------------------------------------------------//

$('form-register').addEventListener('submit', function (e){
    e.preventDefault()
    let error = false;
    for (let i = 0; i < this.elements.length -2; i++) {
       if (!this.elements[i].value) {
        error= true;
        this.elements[i].classList.add('is-invalid')
        
       }
        
    }
    !error ? this.submit() : $('msg-error').hidden = false
})


