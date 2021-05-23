function sendEmail() {
    Email.send({
        Host: "mail.autoparte.cl",
        Username: "contacto@autoparte.cl",
        Password: "contacto.autoparte",
        To: 'luismellareyes@gmail.com',
        From: "contacto@autoparte.cl",
        Subject: "prueba1",
        Body: "Esto es una prueba de Email",
    }).then(
        message => alert("mail sent successfully")
    );
}