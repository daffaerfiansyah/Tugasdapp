var item = prompt("Masukkan nama makanan/minuman: \n (cth: nasi, daging, susu, burger, soda)");

switch( item ) {
    case 'nasi':
        alert("Makanan yang dipilih Sehat kok");
        console.log("Makanan yang dipilih Sehat kok");
        break;
    case 'daging':
        alert("Makanan yang dipilih Sehat kok");
        console.log("Makanan yang dipilih Sehat kok");
        break;
    case 'susu':
        alert("Minuman yang dipilih Sehat kok");
        console.log("Minuman yang dipilih Sehat kok");
        break;
    case 'burger':
        alert("Makanan yang dipilih TIDAK SEHAT!!!");
        console.log("Makanan yang dipilih TIDAK SEHAT!!!");
        break;
    case 'soda':
        alert("Makanan yang dipilih TIDAK SEHAT!!!");
        console.log("Makanan yang dipilih TIDAK SEHAT!!!");
        break;
    default:
        alert("Yang anda masukkan adalah bukan makanan yang dipilih!");
        break;
}