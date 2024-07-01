var noAngkot = 1;
var jmlAngkot = prompt('Masukkan Jumlah Angkot:');
var angkotBeroperasi = prompt('Masukkan angkot yang beroperasi:');
for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}