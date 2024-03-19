<?php
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $cpf = $_POST["cpf"];
    $telefone = $_POST["telefone"];


    $con = mysqli_connect("localhost:3306", "root", "PUC@1234", "mavian");

    $query = "INSERT INTO usuario (email, senha, cpf, telefone) VALUES ('$email', '$senha', '$cpf', '$telefone')";

    mysqli_query($con, $query);
?>
