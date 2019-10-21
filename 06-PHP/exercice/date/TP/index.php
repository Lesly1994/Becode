<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="index.php" method="POST">
        <p> Entrer votre premier nombre : <input type="text" name="nbr1"/> </p>

        <p> Entrer votre deuxième nombre : <input type="text" name="nbr2"/> </p>

        <select name="operation" value="operation">
            <option value="+">Addition (+)</option>
            <option value="-">Soustraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>
            <option value="%">Modulo (%)</option>
        </select>

        <input type="submit" value="calcul"/>
    </form>

</body>
</html>