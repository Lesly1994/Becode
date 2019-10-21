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
    <title>Mon formulaire</title>
</head>
<body>
<?php 

    if((isset($_COOKIE['login'])) && (isset($_COOKIE['mot-de-passe']))){
    echo "hey bonjour a toi ," .$_COOKIE['login']. " " .$_COOKIE['mot-de-passe']. " j'ai tout enregistrer hihi !";
    } else {
        ?>
    <form action="index.php" method="POST">
        <p> Votre login : <input type="text" name="login"/>
        <p> Votre Mot de passe : <input type="password" name="mot-de-passe"/> </p>
        <input type="submit" value="ok"/>
    </form>
    <?php
    };
    ?>
    
</body>
</html>