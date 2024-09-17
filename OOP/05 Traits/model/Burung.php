<?php
    require_once "model/Unggas.php";
    require_once "model/Terbang.php";

    class Burung extends Unggas {
        use Terbang;
    }
?>