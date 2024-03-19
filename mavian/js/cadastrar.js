function gravar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var cpf = document.getElementById("cpf").value;
    var telefone = document.getElementById("telefone").value;

    let expressaoemail = /[a-z]@/;
    expressaoemail = expressaoemail.test(email)
    let expressaosenha = /[a-z]|[A-Z]{1}[0-9]{1}/
    expressaosenha = expressaosenha.test(senha)
    let expressaocpf = /[0-9]{11}/
    expressaocpf = expressaocpf.test(cpf)
    let expressaotelefone = /[0-9]{5}-[0-9]{4}/
    expressaotelefone = expressaotelefone.test(telefone)

    var hashsenha = CryptoJS.SHA512(senha)


    if (expressaoemail == true && expressaosenha == true && expressaocpf == true && expressaotelefone == true) {
        var dados = new FormData();
        dados.append('email', email);
        dados.append('senha', hashsenha );
        dados.append('cpf', cpf);
        dados.append('telefone', telefone);
        fetch("php/cadastrar.php", {
            method: "POST",
            body: dados
        });
    } else {
        console.log("Preencha os campos corretamente.")
    }


}
