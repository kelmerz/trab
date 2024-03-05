function gravar() {
    var email = formCadastro.email;
    var senha = formCadastro.senha;
    var cpf = formCadastro.cpf;
    var telefone = formCadastro.telefone;

    if (email.value === "" || senha.value === "" || cpf.value === "" || telefone.value === "") {
        alert("Preencha os campos corretamente.");
    } else {
        var form = document.getElementById("formCadastro");
        var dados = new FormData(form);
        
        fetch("php/cadastrar.php", {
            method: "POST",
            body: dados
        });
    }
}
