<?php 

// cal_days_in_month — Retourne le nombre de jours dans un mois, pour une année et un calendrier donné
$jour_du_mois = cal_days_in_month(CAL_GREGORIAN, 2, 2017);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>date 6</title>
</head>
<body>
    <p> Il y a <?php echo $jour_du_mois; ?> jours dans le mois de Février 2017. </p>
</body>
</html>