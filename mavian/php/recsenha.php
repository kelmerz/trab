<?php
    $senha = $_POST["senha"];

    $senha_hash = password_hash($senha, PASSWORD_DEFAULT);

    $senha_hash_10 = mb_substr($senha_hash, 0, 20, 'UTF-8'); 


    $con = mysqli_connect("localhost:3306", "root", "PUC@1234", "mavian");

    
    $query = "UPDATE usuario SET (senha) VALUES ('$senha_hash_10')";


    mysqli_query($con, $query);
?>