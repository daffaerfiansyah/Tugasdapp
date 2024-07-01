var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    for (var i = 0; i < penumpang.length; i++) {
        if (penumpang[i] === namaPenumpang) {
            console.log("Nama tersebut sudah masuk angkot");
            return penumpang;
        }
    }
    //jika angkot kosong
    if (penumpang.length == 0){
        // tambah penumpang di awal Array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar function
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for ( var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if (penumpang[i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalilan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar function    
                return penumpang;
            }
        }    
    }
}
var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot kosong
    if (penumpang.length == 0){
        // tampilkan pesan
        console.log("Angkot sedang kosong tidak ada yang dapat diturunkan");
        // kembalikan isi array & keluar function
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for ( var i=0;i<penumpang.length;i++){
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan 
                // mengubah namanya menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array & keluar function
                return penumpang;
                // jika tidak ada nama yang sesuai
            } else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahan
                console.log("Nama tidak sesuai dalam daftar");        
                // kembalikan isi array
                return penumpang;
            }
        }    
    }
}