<?php 

$today = date("d-m-Y");
$date = date("d-m-Y", strtotime("-22 day"));

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Date 8</title>
</head>
<body>
    <p>Nous sommes le <?php echo $today; ?> et il y a 22 jours nous étions le <?php echo $date; ?> </p>
</body>
</html>