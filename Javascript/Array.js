// var binatang = ['Kucing', 'Kelinci','Monyet', 'Panda','Koala','Sapi']; 

// var myarr = ['teks',2,false,binatang,[4,5,6]];

// console.log(myarr[4][1]);

// # Manipulasi Array # //

// 1. Menambah isi array
// var arr = [];
// arr[0]='Daffa'
// arr[1]='Erfiansyah'
// arr[2]='Bisa Coding'
// console.log(arr)

// 2. Menghapus isi Array manual
// var arr = ['Daffa','Erfiansyah','Bisa Coding'];
// arr[1]=undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// var arr = ['Bismillah','Daffa','Erfiansyah','Bisa Coding'];

// for (var i=0;i<arr.length;i++){
//     console.log(arr [i]);
// }

// # METHOD pada ARRAY # //

// 1. Join
// var arr = ['Bismillah','Daffa','Erfiansyah','Bisa Coding'];
// console.log(arr.join(' - '));

// 2. Push(tambah akhir) dan Pop(hapus akhir)
// var arr = ['Bismillah','Daffa','Erfiansyah','Bisa Coding'];
//  arr.push('Lancar');
// arr.pop();
// arr.pop();  
// console.log(arr.join("-"));

// 3. Unshift & shift
// var arr = ['Bismillah','Daffa','Erfiansyah','Bisa Coding'];
// arr.unshift('Doddy');
// arr.shift()
// console.log(arr.join("-"));

// 4. Splice
// rumus = splice(indexAwal, mauDihapusBerapa, elemenBaru1,elemenBaru2)
// var arr = ['Bismillah','Daffa','Erfiansyah','Bisa Coding'];
// arr.splice(1, 0, "Muhammad");
// console.log(arr.join(" - "));

// 5. Slice
// rumus = slice(awal,akhir)
// var arr = ['Bismillah','Daffa','Erfiansyah','Bisa Coding'];
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(" - "));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Muhammad","Daffa","Erfiansyah"];
//  for ( var i = 0;i < angka.length; i++){
//      console.log(angka[i]);
// }
// angka.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + i + ' Adalah: ' + e);
// })

// 7. Map
// var angka = [1];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(" - "));

// 8. Sort
// var angka = [1,2,5,3,6,20,8,4,10,7]
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(" - "));

// 9. Filter & find
// var angka = [1,2,5,3,6,20,8,4,10,7];
// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
// console.log(angka2);