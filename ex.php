<?php
    $email = $_POST["email"];
    $psd = $_POST["psd"];
    
    $conn =  new mysqli('localhost','root','','loginpage');
    if($conn -> connect_error)
    {
        die('connection error'. $conn->connect_error);
    }
    else
    {
        $stmt = $conn ->prepare("insert into logindata(email,password) values(?,?)");
        $stmt ->bind_param("ss",$email,$psd);
        $stmt -> execute();
        $stmt -> close();
        $conn -> close();
        header("Location: index_1_main.html");
        exit;
    }
?>