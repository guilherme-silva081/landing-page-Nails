function enviarwhats(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const telefone = "5581984975054";

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;

    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank");
}