// 1. DOM SELECTION //

// A. document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';

// B. document.getElementsByTagName()
// -> HTMLCollection
// const paragraf = document.getElementsByTagName('p');
// for (let i = 0; i < paragraf.length; i++) {
//     paragraf[i].style.backgroundColor = 'lightblue';
// }
// const heading = document.getElementsByTagName('h1')[0];
// heading.style.fontSize = '50px';

// C. document.getElementsByClassName()
// -> HTMLCollection
// const paragraf1 = document.getElementsByClassName('p1')[0];
// paragraf1.innerHTML = 'Diubah menggunakan Javascript';

// D. document.querySellector()
// const p4 = document.querySelector('section#b p');
// p4.style.backgroundColor = 'orange'

// const li2 = document.querySelector('section#b li:nth-child(2)');
// li2.style.color = 'blue';

// E. document.querySellectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// Mengubah Node Root
// const sectionB = document.querySelector('section#b');
// const paragraf4 = sectionB.getElementsByTagName('p')[0];
// paragraf4.style.backgroundColor = 'blue';