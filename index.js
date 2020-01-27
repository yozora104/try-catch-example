function validar(nombre, email, password, repassword) {
    // TODO: código de validación
    if (nombre.length==0){
        throw new Error("El campo nombre está vacio. ");
    }

    if(email.length==0){
            throw new Error ("El campo email está vacío. ");
    }
    if (password.length==0){
        throw new Error("El campo contraseña está vacío");
    }
    if (repassword.length==0){
        throw new Error("El campo repetir contraseña está vacío");
    }
    if (password.length !=repassword.length){
        throw new Error("Las contraseñas son diferentes");
    }
        
    return true;
}

try {
    validar("fdfdfdf","hghghg", "12345", "dfdfdf")
} catch (err) {
    console.log(err.message);
}