<?php 

$dateDebut = "2016-05-16";
$dateFin = "today";

// on récupère la différence de timestamp entre les 2 dates
$nbrJours = (strtotime($dateFin) - strtotime($dateDebut));

// convertir le timestamp en jour (60seconde* 60minutes* 24heure)
$jours = $nbrJours/86400;

$result = round($jours);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Date 5</title>
</head>
<body>
    <p> Voici le temps qui nous sépare du 16 Mai 2016 : il y à  <?php echo $result; ?> jours de différences .</p>
</body> 
</html>