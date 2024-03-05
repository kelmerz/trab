<?php
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $cpf = $_POST["cpf"];
    $telefone = $_POST["telefone"];

    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    $senha_hash_10 = mb_substr($senha_hash, 0, 20, 'UTF-8'); 


    $con = mysqli_connect("localhost:3306", "root", "PUC@1234", "mavian");

    $query = "INSERT INTO usuario (email, senha, cpf, telefone) VALUES ('$email', '$senha_hash_10', '$cpf', '$telefone')";

    mysqli_query($con, $query);
?>