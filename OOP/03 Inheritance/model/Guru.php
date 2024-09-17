<?php 
    require_once "model/Orang.php";
    class Guru extends Orang {
        public function cetakNama() {
            echo "Nama saya adalah {$this->nama} dan saya berumur {$this->umur} tahun";
        }
        public function aktifitasGuru() {
            echo "Saya mengajar Konsep Jaringan";
        }
        // Ovveride adalah mengambil alih suatu properti atau method yang ada pada parent ataupun child
        public function sayhello() {
            echo "Ini adalah function override dari class child bukan class parent";
        }
    }
?>