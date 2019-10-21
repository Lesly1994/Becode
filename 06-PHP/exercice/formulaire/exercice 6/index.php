<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>test</title>
</head>
<body>
    
    <?php 
    // si le formulaire est rempli alors affiche ceci
    if ((isset($_POST['genre'])) && isset($_POST['nom'])){
    echo "hey bonjour a toi ," .$_POST['genre']. " " .$_POST['nom']. " j'ai tout enregistrer hihi !";
    } else { // et si le formulaire n est pas rempli alors affiche ceci 

        ?>

        <form method="POST" action="index.php">
        <p> <select name="genre">
                <option value="Mr">Mr</option>
                <option value="Mme">Mme</option>
            </select> 
        </p>
        
        <p> Votre Nom :<input type="text" name="nom"/> </p>

        <p> Votre Prénom :<input type="text" name="prenom"/> </p>

        <p> <input type="submit" value="ok"/> </p>

    </form>
    <?php
    };

    ?>

</body>
</html>