<?php
    class Robot {
        public $name;
        public $color;
        public $size;

        public function __construct($name, $color, $size) {
            $this->name = $name;
            $this->color = $color;
            $this->size = $size;
        }
        
        public function __destruct() {
            echo "Ini adalah fungsi destruct";
        }
    }
?>