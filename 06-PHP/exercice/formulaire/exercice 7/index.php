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
    if ((isset($_POST['genre'])) && (isset($_POST['nom']))){

    echo "Hey bonjour à toi ," .$_POST['genre']. " " .$_POST['nom']. " j'ai tout enregistrer hihi !\n";
        // afficher le nom et l'extension du fichier 
        if ((isset($_FILES['nomFichier']['name'])) && (isset($_FILES['nomFichier']['type']))){
            echo "Le fichier que vous avez envoyé est :" .$_FILES['nomFichier']['name']. " qui est un fichier du type : ".$_FILES['nomFichier']['type'];
        }

    } else { // et si le formulaire n est pas rempli alors affiche ceci 

        ?>

        <form method="POST" action="index.php" enctype="multipart/form-data">
        <p> <select name="genre">
                <option value="Mr">Mr</option>
                <option value="Mme">Mme</option>
            </select> 
        </p>
        
        <p> Votre Nom :<input type="text" name="nom"/> </p>

        <p> Votre Prénom :<input type="text" name="prenom"/> </p>

        <p> <input type="submit" value="ok"/> </p>
        <!-- formulaire d'envoi de fichier -->
        <p> Nom du fichier :<input type="file" name="nomFichier"/> </p>

        <p> <input type="submit" value="envoyer_le_fichier"/> </p>

    </form>
    <?php
    };
    ?>

</body>
</html>