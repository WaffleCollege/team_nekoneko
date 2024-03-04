<?php
session_start();

if (!isset($_SESSION["e"])) {
    $host = $_SERVER["HTTP_HOST"];
    $uri = rtrim(dirname($_SERVER["PHP_SELF"]), "/\\");
    header("Location: //$host$uri/login.php");
    exit;
}


?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="../style.css">
    <title>スペイン語学習</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.html">😺</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../index.html">ホーム</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../quiz-list.html">活用クイズ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./public/input.html">活用練習</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../about.html">使い方</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./logout.php">ログアウト</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <h1>スペイン語活用練習</h1>
    <div class="select_button">
        <button onclick="location.href='../quiz-list.html'">クイズ</button>
        <button onclick="location.href='../public/input.html'">練習する</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
    </script>
</body>

</html>