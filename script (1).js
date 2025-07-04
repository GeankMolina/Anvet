document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    document.getElementById("respuesta").textContent = `Gracias, ${nombre}. Hemos recibido tu mensaje.`;
    this.reset();
});
