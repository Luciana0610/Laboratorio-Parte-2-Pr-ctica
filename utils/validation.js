function validarEmail(email) {
    // Expresión regular para email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

// Ejemplos de uso
const emails = [
    "usuario@dominio.com",
    "correo.invalido@",
    "prueba@midominio.org"
];

emails.forEach(email => {
    if (validarEmail(email)) {
        console.log(`${email} ✅ válido`);
    } else {
        console.log(`${email} ❌ inválido`);
    }
});
