<?php 

    setcookie('login', $_POST['login'],time() +36000 ,null, null, false, true);
    $_COOKIE['login'] = $_POST['login'];
    setcookie('mot-de-passe', $_POST['mot-de-passe'],time() +36000, null, null, false, true);
    $_COOKIE['mot-de-passe'] = $_POST['mot-de-passe'];


?> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon form2</title>
</head>
<body>

    <?php 

    echo $_COOKIE['login']."\n";
    echo $_COOKIE['mot-de-passe'];

    ?>


</body>
</html>