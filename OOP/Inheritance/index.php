<?php
    require "model/Guru.php";
    require "model/Murid.php";

    $guru1 = new Guru("Iwan", 50);
    // Mengakses properti pada class parent
    $guru1->cetakNama();
    echo "<br>";
    // mengakses method pada class parent
    $guru1->sayhello();
    echo "<br>";
    // mengakses child properti dan method
    $guru1->aktifitasGuru();
    echo "<br>";

    $murid1 = new Murid("Daffa", 20);
    $murid1->cetakNama();
    echo "<br>";
    $murid1->aktifitasMurid();
?>