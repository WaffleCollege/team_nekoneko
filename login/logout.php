<?php
session_start();
$_SESSION = array();

?>



<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <title>ログアウト</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

</head>

<body>
    <div class="container">
        <div class="mx-auto" style="width: 400px;">
            <h1>ログアウトしました</h1>
            <a href="./login.php">ログインする</a>
        </div>
    </div>
</body>

</html>