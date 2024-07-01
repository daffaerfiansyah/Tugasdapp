var noAngkot = 1;
var jmlAngkot = prompt("Masukkan Jumlah Angkot: ");
var angkotBeroperasi = prompt("Masukkan Jumlah angkot yang beroperasi: ");
var angkotLembur = prompt("Masukkan Angkot pertama yang sedang lembur: ");
var angkotLemburKedua = prompt("Masukkan Angkot kedua yang sedang lembur: ");

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot == angkotLembur || noAngkot == angkotLemburKedua && noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    } else if (noAngkot == angkotLembur || noAngkot == angkotLemburKedua) {
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
} 