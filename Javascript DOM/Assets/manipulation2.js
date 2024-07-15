// DOM MANIPULATION PART II
// MANIPULATION NODE

// A. document.createElement()
// buat elemen baru
const pBaru = document.createElement('p');

// B. document.createTextNode()
const textpBaru = document.createTextNode('Paragraf Baru');

// C. node.appendChild()
// Simpan Tulisan
pBaru.appendChild(textpBaru);

// Simpan pBaru di akhir section A
// buat const baru
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// D. node.insertBefore()
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// simpan
ul.insertBefore(liBaru, li2);

// E. parentNode.removeChild()
// buat const sectionA = document.getElementById('a')
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// F. parentNode.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const textH2 = document.createTextNode('Judul yang Direplace');
h2.appendChild(textH2);
// replaceChild(a, b) menyimpan dua paramater dimana a: adalah element baru 
// sedangkan b: adalah element yang direplace.
sectionB.replaceChild(h2, p4)

// menandai element yang dimanipulasi dengan style css
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2.style.backgroundColor = 'lightgreen';