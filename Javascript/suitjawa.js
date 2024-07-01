// menangkap pilihan
alert("Selamat datang di Game Suit Jawir!\nKlik OK untuk melanjutkan");
var p = prompt("Pilih: Gajah/Orang/Semut");
// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();
if( comp < 0.34) {
    comp = "gajah";
} else if( comp >= 0.34 && comp <= 0.67){
    comp = "orang";
} else {
    comp = "semut";
}
// menentukan rules
var result;
if(p == comp){
    result = "SERI!";
} else if(p == "gajah"){
    // if(comp == "Orang"){
    //     result = "MENANG!";
    // } else {
    //     result = "KALAH";
    // }
    result = (comp == "orang") ? "MENANG!" : "KALAH!";
} else if( p == "orang"){
    result = (comp == "gajah") ? "KALAH!" : "MENANG!";
} else if(p == "semut") {
    result = (comp == "orang") ? "KALAH!" : "MENANG!";
} else {
    result = "Anda Memasukkan inputan yang salah!"
}
// menampilkan hasil
console.log("Player: " + p + " Vs" + " Computer: " + comp + "\n");
console.log("Hasil Pertandingan adalah Player: " + result + " Melawan Computer");2
alert("Player: " + p + " Vs" + " Computer: " + comp + "\nHasil Pertandingan adalah Player: " + result + " Melawan Computer");