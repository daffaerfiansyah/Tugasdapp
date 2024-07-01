function kuadrat(float){
    return float * float;
}

function main(){
    var float = parseFloat(prompt("Masukkan bilangan: "));
    var hasil = kuadrat(float);
    console.log(hasil);
}
main();
