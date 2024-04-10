console.log('perfil');
const $ = (id) => document.getElementById(id);
const exRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

$('name').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
});

$('surname').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
});

$('email').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
});

$('password').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
});

$('confirmPassword').addEventListener('focus', function () {
    this.classList.remove('is-invalid');
});

$('name').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-name').innerHTML = "El nombre es requerido";
            break;
        case this.value.length < 2:
            this.classList.add('is-invalid');
            $('error-name').innerHTML = "El nombre requiere mínimo 2 caracteres";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-name').innerHTML = null;
            break;
    }
});

$('surname').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-surname').innerHTML = "El apellido es requerido";
            break;
        case this.value.length < 2:
            this.classList.add('is-invalid');
            $('error-surname').innerHTML = "El apellido requiere mínimo 2 caracteres";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-surname').innerHTML = null;
            break;
    }
});

$('email').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "El email es requerido";
            break;
        case !exRegEmail.test(this.value):
            this.classList.add('is-invalid');
            $('error-email').innerHTML = "Email con formato inválido";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-email').innerHTML = null;
            break;
    }
});

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
        case !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}/.test(this.value):
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
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
    $('password').type = $('password').type === "password" ? "text" : "password";
});

$('confirmPassword').addEventListener('blur', function () {
    switch (true) {
        case !this.value:
            this.classList.add('is-invalid');
            $('error-confirmPassword').innerHTML = "La confirmación de la contraseña es requerida";
            break;
        case this.value !== $('password').value:
            this.classList.add('is-invalid');
            $('error-confirmPassword').innerHTML = "Las contraseñas no coinciden";
            break;
        default:
            this.classList.remove('is-invalid');
            $('error-confirmPassword').innerHTML = null;
            break;
    }
});


$('form-perfil').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío automático del formulario
    
    let error = false;

    // Validación de los campos
    const name = $('name');
    const surname = $('surname');
    const email = $('email');
    const password = $('password');
    const confirmPassword = $('confirmPassword');

    if (!name.value) {
        name.classList.add('is-invalid');
        $('error-name').innerHTML = "El nombre es requerido";
        error = true;
    }

    if (!surname.value) {
        surname.classList.add('is-invalid');
        $('error-surname').innerHTML = "El apellido es requerido";
        error = true;
    }

    if (!email.value) {
        email.classList.add('is-invalid');
        $('error-email').innerHTML = "El email es requerido";
        error = true;
    } else if (!exRegEmail.test(email.value)) {
        email.classList.add('is-invalid');
        $('error-email').innerHTML = "Email con formato inválido";
        error = true;
    }

    if (!password.value) {
        password.classList.add('is-invalid');
        $('error-password').innerHTML = "La contraseña es requerida";
        error = true;
    } else if (password.value.length < 8) {
        password.classList.add('is-invalid');
        $('error-password').innerHTML = "La contraseña debe tener al menos 8 caracteres";
        error = true;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}/.test(password.value)) {
        password.classList.add('is-invalid');
        $('error-password').innerHTML = "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial";
        error = true;
    }

    if (!confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        $('error-confirmPassword').innerHTML = "La confirmación de la contraseña es requerida";
        error = true;
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        $('error-confirmPassword').innerHTML = "Las contraseñas no coinciden";
        error = true;
    }

    if (!error) {
        this.submit(); // Envía el formulario si no hay errores
    } else {
        $('msg-error').hidden = false;
    }
});