<?php
    require "model/Ayam.php";
    require "model/Burung.php";
    require "model/Capung.php";

    $ayam = new Ayam();
    $burung = new Burung();
    $capung = new Capung();

    $ayam->bertelur();
    echo "<br>";
    $burung->bertelur();
    echo "<br>";
    $burung->terbang();
    echo "<br>";
    $capung->terbang();
?>