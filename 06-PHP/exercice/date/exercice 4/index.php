<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<!--strtotime — Transforme un texte anglais en timestamp -->
    <p> Voici le timesstamp d'aujoud'hui : <?php echo strtotime("now"); ?> </p>

    <p> Et le timestamp a la date du mardi 2 août 2016 à 15h00 : <?php echo strtotime("22-08-2016-15:00"); ?> </p>
</body>
</html>
