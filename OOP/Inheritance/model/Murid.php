<?php
    require_once "model/Orang.php";
    class Murid extends Orang {
        public function cetakNama() {
            echo "Nama saya adalah {$this->nama} dan saya berumur {$this->umur} tahun";
        }
        public function aktifitasMurid() {
            echo "Saya sedang belajar mapel Konsep Jaringan";
        }
    }
?>