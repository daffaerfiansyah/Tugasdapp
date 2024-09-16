<?php
    require "model/Robot.php";
// Cara pertama menggunakan class properti manual
    // $robot1 = new Robot();
    // $robot1->name = "Dirgantara";
    // $robot1->color = "Blue-White";
    // $robot1->size = "90cm";

    // $robot2 = new Robot();
    // $robot2->name = "EROS";
    // $robot2->color = "Blue-Red";
    // $robot2->size = "100cm";
// cara kedua menggunakan function/method properti
    $robot1 = new Robot();
    $robot1->set_name("Dirgantara");
    $robot1->set_color("Blue");
    $robot1->set_size("9cm");
    
    $robot2 = new Robot();
    $robot2->set_name("Eros");
    $robot2->set_color("Red");
    $robot2->set_size("9cm");

    var_dump($robot1);
    echo "<br>";
    var_dump($robot2);
?>