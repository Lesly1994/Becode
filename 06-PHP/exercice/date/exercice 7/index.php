<?php 

$today = date("d-m-Y");
$date = date("d-m-Y", strtotime("+20 day"));

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>date 7</title>
</head>
<body>
    <p> Nous sommes le <?php echo $today; ?> et dans 20 jours nous seront le <?php echo $date; ?>. </p>
</body>
</html>