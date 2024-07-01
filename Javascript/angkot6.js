var noAngkot = 1;
var jmlAngkot = prompt("Masukkan Jumlah Angkot: ");
var angkotBeroperasi = prompt("Masukkan Jumlah angkot yang beroperasi: ");
var angkotLembur = prompt("Masukkan Angkot Pertama yang sedang lembur: ");
var angkotLemburKedua = prompt("Masukkan Angkot Kedua yang sedang lembur: ");
var angkotLemburKetiga = prompt("Masukkan Angkot Ketiga yang sedang lembur: ");
var pilihanAngkot;

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot == angkotLembur || noAngkot == angkotLemburKedua || noAngkot == angkotLemburKetiga && noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
    } else if (noAngkot == angkotLembur || noAngkot == angkotLemburKedua || noAngkot == angkotLemburKetiga) {
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
} 

pilihanAngkot = prompt("Pilih no Angkot:");
if (pilihanAngkot <= angkotBeroperasi){
    console.log("Yang anda pilih Angkot No. " + pilihanAngkot + " sedang beroperasi dengan baik");
} else {
    switch( pilihanAngkot ) {
        case angkotLembur:
            console.log("Yang anda pilih Angkot No." + pilihanAngkot + " sedang lembur");
            break;
        case angkotLemburKedua:
            console.log("Yang anda pilih Angkot No." + pilihanAngkot + " sedang lembur");
            break;
        case angkotLemburKetiga:
            console.log("Yang anda pilih Angkot No." + pilihanAngkot + " sedang lembur");
            break;
        default:
            console.log("Yang anda pilih Angkot No." + pilihanAngkot + " tidak beroperasi");
            break;
    }
}