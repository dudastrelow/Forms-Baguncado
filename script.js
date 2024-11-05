function verificarSenha() {
    event.preventDefault();
    const nomeUsuario = document.getElementById("usuario").value;
    alert(nomeUsuario + "sua senha está incorreta, a certa é 1234*");
}