function triangular(n){
    var rumus;
    rumus = n * (n+1) / 2;
    console.log("Jumlah bilangan Triangular dari",n, "Adalah:",rumus);
}

function main(){
    var n = parseInt(prompt("Masukkan Bilangan:"));
    triangular(n);
}
main();