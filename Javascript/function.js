function tambah(){
    var hasil = 0;
    var i;
    for (i=0;i<arguments.length;i++){
        hasil += arguments[i];
    }
    return hasil;
}

var result = tambah(1,2,3);
console.log(result);

// function kali(a,b) {
//     return a * b;
// }
// var a = parseInt(prompt("Masukan Nilai A: "));
// var b = parseInt(prompt("Masukan Nilai B: "));

// var result = kali(tambah(2,4), tambah(1,5));
// console.log(result);