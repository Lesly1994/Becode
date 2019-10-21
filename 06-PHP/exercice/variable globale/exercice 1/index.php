<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="assets/css/style.css" rel="stylesheet" >
    <title>Exercice 1</title>
</head>
<body>
    <section class="magic">
        
        <article class="message">
        <img src="assets/img/fond_session1.jpg"/>
    <!-- Contenu de l'en-tête User_Agent: de la requête courante, si elle existe. C'est une chaîne qui décrit le client HTML utilisé pour voir la page courante. Par exemple : Mozilla/4.5 [en] (X11; U; Linux 2.2.9 i586). -->
            <p><h2> Hello, voici un petit tour de magie! Si je ne me trompe pas tu es :<?php echo $_SERVER['HTTP_USER_AGENT']; ?> .</p>

<!-- obtenir L'adresse IP du client qui demande la page courante. -->
            <p>Mais attend je n'ai pas terminée, "abracadabra" ton adresse IP : <?php echo $_SERVER['REMOTE_ADDR']; ?> .<br/></p>

<!-- obtenir Le nom du serveur hôte qui exécute le script suivant. Si le script est exécuté sur un hôte virtuel, ce sera la valeur définie pour cet hôte virtuel. -->
            <p>Pour le grand final, je vais découvrir le nom de ton serveur, "Vizou vista Pop !!!" : <?php echo $_SERVER['SERVER_NAME']; ?> .</p></h2>
        </article>
    </section>
</body>
</html>