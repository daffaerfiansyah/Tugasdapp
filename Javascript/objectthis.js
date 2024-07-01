// membuat object

// cara 1 -  function declaration
// function halo() {
//     console.log(this)
//     console.log("Halo")
// }
// this.halo();
// konteks this mengembalikan object global

// cara 2 - object literal
// var obj = {};
// obj.halo = function(){
//     console.log(this);
//     console.log("Halo");
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// Cara 3 - constructor
// function Halo(){
//     console.log(this);
//     console.log("Halo");
// }
// new Halo();
// this mengembalikan object yang baru dibuat