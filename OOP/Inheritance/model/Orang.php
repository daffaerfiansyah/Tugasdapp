<?php
    class Orang {
        public $nama, $umur;
        public function __construct($nama, $umur) {
            $this->nama = $nama;
            $this->umur = $umur;
        }
        // fungsi keyword final adalah agar suatu properti atau method tidak dapat di override
        public function sayhello() {
            echo "Hallo, nama saya {$this->nama} dan umur saya adalah {$this->umur} tahun";
        }
    }
?>