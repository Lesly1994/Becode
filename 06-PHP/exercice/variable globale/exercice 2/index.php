<?php
// on démarre la session avant d'écrire du code HTML
session_start();

//on crée ensuite quelques variablesde session dans $_SESSION
$_SESSION['nom'] = "Lesly";
$_SESSION['prenom'] = "Ghys";
$_SESSION['age'] = 24 ;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="assets/css/style-index.css" rel="stylesheet" >
    <title>Mon site à moi </title>
</head>
<body>
    <section class="image">
        <article class="text">
            <p> Chèr(e) <?php echo $_SESSION['prenom']. " " .$_SESSION['nom']; ?> </p>
            <p> Je t'informe que tu viens d'entrer dans un espace autorisé au personne de plus de 22 ans et tu as ..............  Heummmmmm , ah voila trouver !
            Ooooh magnifique tu as <?php echo $_SESSION['age']; ?> ans. Ne laisse pas la peur t'envahir !!!!</p>
            <img src="https://thumbs.gfycat.com/MetallicSilverHawk-size_restricted.gif">
            <p> Je te laisse donc profiter de mon site , bonne visite ! </p>

            <p> <a href="2page.php"> Lien vers ma 2ème page </a> </p>
        </article>
    </section>
</body>
</html>