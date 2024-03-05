function novasenha() {
    var senha = formulario.senha;
    var confirmarsenha = formulario.confirmarsenha;

    if (senha.value != confirmarsenha.value ) {
        alert("As senhas não coincidem");
    } else {
        alert("Sua senha foi redefinida com sucesso.")
        var form = document.getElementById("formulario");
        var dados = new FormData(form);
        
        fetch("php/recsenha.php", {
            method: "POST",
            body: dados
        });
    }
}
