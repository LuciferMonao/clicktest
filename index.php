<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Clicktest</title>
        <meta name="description" content="A simple clicktest">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles/index.css">
    </head>
    <body>
        <div id="click" unselectable="on">
            <h1 id="display" unselectable="on">Click here...</h1>
            <h2>Average: <p id=average>0</p></h2>
            <h2>Record: <p id=record><?php if (isset($_COOKIE["record"])) {echo $_COOKIE["record"];} else {echo 0;}?></p></h2>
        </div>
        
        <script src="includes/clicktest.inc.js"></script>
        <?php require "footer.php";?>
        <link rel="stylesheet" href="styles/footer.css">
    </body>
</html>