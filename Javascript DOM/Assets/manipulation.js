// 2. DOM MANIPULATION
// MANIPULATION ELEMENT

// A. element.innerHTML (Mengubah seluruh tag HTML yang diinginkan)
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Daffa Erfiansyah';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

// B. element.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'grey';

// C. element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'style-judul');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// // GET ATTRIBUTE
// a.getAttribute('href');
// // REMOVE ATTRIBUTE
// a.removeAttribute('href');

// C. element.classList()
// const p2 = document.querySelector('.p2');
// p2.classList.add('style-p2'); // Menambahkan class tanpa menghilangkan
// p2.classList.remove('style-p2'); // Menghapus class
// p2.classList.toggle('style-p2'); // Menambahkan class jika belum ada, jika sudah ada maka dihapus

// document.body.classList.toggle('biru-muda');
// // element.classList.item() untuk mengetahu class di suatu element
// p2.classList.add('satu');
// p2.classList.add('dua');  
// p2.classList.add('tiga');
// const item = p2.classList.item(2);
// // element.classList.contains() untuk mengecek ada nya suatu class
// const contains = p2.classList.contains('dua');
// // element.classList.replace() untuk mengganti class yang diinginkan
// p2.classList.replace('tiga', 'empat');