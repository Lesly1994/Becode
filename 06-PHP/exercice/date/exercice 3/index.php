<?php 

// strftime => Formate une date et/ou une heure suivant la localisation locale
setlocale(LC_ALL, 'fr_FR.UTF8', 'fr.UTF8', 'fr_FR.UTF-8', 'fr.UTF-8');


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>date3</title>
</head>
<body>
    <p> voici la date compléte du jour : <?php echo strftime("%A %d %B %Y"); ?> </p>
</body>
</html>