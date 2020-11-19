// // contoh getElementByid()
// // mengubah warna font berdasarkan id
// // hasilnya mengembalikan -> Element
const div = document.getElementById('judul');
div.innerHTML = '<em>red</em>';

// // contoh getElementsByTagName()
// // mengubah warna font berdasarkan tagname/element
// // hasilnya mengembalikan -> HTML Collective
// // const p = document.getElementsByTagName('p')[0];
// // p.style.color = 'red';

// // contoh getElementsByClassName()
// // mengubah warna font berdasarkan clasname
// // hasilnya mengembalikan -> HTML Collective
// // const classp1 = document.getElementsByClassName('judul')[0];
// // classp1.style.color = 'red';

// // contoh querySelector()
// // mengubah warna font yang tdak mempunyai id dan class berdasarkan tag tertentu / spesifik
// // hasilnya mengembalikan -> element
// // const querySel = document.querySelector('section.table thead tr th:nth-child(2)');
// // querySel.style.color = 'red';

// // contoh querySelectorAll()
// // mengubah warna font yang tdak mempunyai id dan class berdasarkan tag tertentu / spesifik
// // hasilnya mengembalikan -> element
// // const querySel = document.querySelectorAll('p');
// // querySel.style.color = 'red';

// //DOM manipulation Methods
// //create element
// // const parafB = document.createElement('p');
// // //create text Node
// // const text = document.createTextNode('Paragraf Baru');
// // //mengabungkan element yg sudah dibuat
// // parafB.appendChild(text);
// // // meletakkan dan menampilkan
// // const paragrafNew = document.getElementsByClassName('judul')[0];
// // paragrafNew.appendChild(parafB);
// // // paragrafNew.insertBefore(parafB);

// // const thBaru = document.createElement('th');
// // const text = document.createTextNode('Umur');
// // thBaru.appendChild(text);
// // const sectionA = document.querySelector('table');
// // const th = document.querySelector('th');
// // // const th2 = document.querySelector('th:nth-child(2)');
// // th.insertBefore(thBaru, th.childNodes[2]).style.color='red';

// // const item = table.querySelector('.linkA');
// // function ubahWarna(){
// //     item.style.color = 'yellow';
// // }

// // const ul = document.querySelector('ul.link');
// // ul.addEventListener('click',function(){
// //     const li = document.createElement('li');
// //     const text = document.createTextNode('hallo');
// //     li.appendChild(text);
// //     ul.appendChild(li);
// // });

// const container = document.querySelector('.container');
// const imgBig = document.querySelector('.big');
// const thumbs = document.querySelectorAll('.thumb');

// container.addEventListener('click', function(e){
//     if(e.target.className == 'thumb'){
//         imgBig.src = e.target.src
//         imgBig.classList.add('fade');
//         setTimeout(function(){
//             imgBig.classList.remove('fade');
//         },500);

//         thumbs.forEach(function(thumb){
//             thumb.className = 'thumb';
//         });
//         e.target.classList.add('active');
//     }
// });

// closure
// filter
// const angka = [1,4,6,7,16,9,-9];
// const newAngka = angka.filter(function(a){
//     return a>=3; 
// });
// console.log(newAngka);

//contoh filter dan map
// const names = ['Budi', 'Dewi', 'Santoso'];
// // We set initialValue to ''
// // because we want greetAll to return a string
// const greetAll = names.reduce( function (greeting, name, index) {
//   if (index === 0) {
//     greeting += 'Hai ' + name;
//   } else {
//     greeting += ',' + name;
//   }
//   return greeting;
// },'');console.log(greetAll);

//latihan filter, map
//contoh kasus mencari jumlah video dan total durasi
// 1. skenario: ambil semua elemen video
// 2. pilih hanya yang 'Video A/ lain' (arrow fuction)
// 3. ambil durasi masing2 video (teknik chaining)
// 4. ubah durasi menjadi int, ubah menit menjadi detik
// 5. jumlah semua detik
// 6. ubah formatnya jadi jam menit detik
// 7. simpan DOM
//const li = document.querySelectorAll('ul li'); //hasil: sebuah nodelist, agar dapat difilter/map harus diubah menghasilkan array
const videos = Array.from(document.querySelectorAll('ul li'));
//2.
const videoA = videos.filter(a => a.textContent.includes('Video A'))
//3.
.map(item => item.dataset.duration)
//4.
.map( waktu => {
  // 10:30 -> [10,30] split
  const parts = waktu.split(':').map(part => parseFloat(part));
  return (parts[0] * 60) + parts[1];
})
//5.
.reduce((total, detik) => total + detik);
//6.
const jam = Math.floor(videoA / 3600);
videoAs = videoA - jam * 3600;
const menit = Math.floor(videoAs / 60);
const detik = videoA - menit * 60;
// 7.
const pDurasi               = document.querySelector('.total-durasi');
      pDurasi.textContent   = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlhVideo             = videos.filter(a => a.textContent.includes('Video A')).length;
const pjmlVideo             = document.querySelector('.jumlah-video');
      pjmlVideo.textContent = `${jmlhVideo} Video`;

