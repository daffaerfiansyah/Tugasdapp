<?php
    class Robot {
        public $name;
        public $color;
        public $size;

        public function set_name($name) {
            $this->name = $name;
        }
        public function set_color($color) {
            $this->color = $color;
        }
        public function set_size($size) {
            $this->size = $size;
        }
    }
?>