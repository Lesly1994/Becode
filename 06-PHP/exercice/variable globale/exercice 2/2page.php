<?php 
// on démarre la session avant toute chose 
session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="assets/css/style-2page.css" rel="stylesheet">
    <title>Mon site à moi 2</title>
</head>

<body>

    <section class="re-text">
        <article class="message">
        <img src="assets/img/hello2.gif" />
            <p> Re-bienvenu ! Tu te trouve sur la 2ème page de mon site </p>

            <p> Alors toujours prêt(e) a continuer <?php echo $_SESSION['prenom']. " " .$_SESSION['nom']; ?> , seule les
                adultes de <?php echo $_SESSION['age']; ?> ans peuvent essayer de s'en sortir :) . </p>

            <p> Bonne chance , ÇA ne t'effraie pas :), continue ! </p>
        </article>
    </section>

</body>

</html>