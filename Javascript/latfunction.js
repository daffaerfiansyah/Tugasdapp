function menu(){
    console.log("Pilihan Menu:");
}

function main(){
    var jumlah_perulangan;
    jumlah_perulangan = prompt("Masukkan Jumlah perulangan: ");

    for(var i = 0; i < jumlah_perulangan; i++){
        menu();
    }
    return 0;
}
main();