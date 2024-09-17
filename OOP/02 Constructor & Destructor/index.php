<?php
    require "model/Robot.php";

    $robot1 = new Robot("EROS", "RED", "Large");

    var_dump($robot1);
    echo "<br>";
    // fungsi unset berguna untuk menghancurkan objek yang dituju sehingga objek lain dapat berjalan walaupun
    // terdapat fungsi __destruct()
    unset($robot1);
    echo "<br>";
    echo "Ini sudah selesai";
    echo "<br>";
?>