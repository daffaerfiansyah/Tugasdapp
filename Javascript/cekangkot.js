var noAngkot = 1;
var jmlAngkot = prompt('Masukkan Jumlah angkot: ');
var beroperasi = prompt('Jumlah angkot yang beroperasi');

while(noAngkot <= beroperasi){
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik.');
    noAngkot++;  
}

for(noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' Tidak beroperasi');
}

alert('Terima Kasih!');