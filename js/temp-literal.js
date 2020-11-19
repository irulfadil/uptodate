//contoh 1. HTML Fragments

// ===awal===
// const mhs = {
//     name: 'Irul Fadil',
//     room: '1A',
//     email: 'irul@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.name}</h2>
// <span class="email">${mhs.email}</span>
// </div>`
//cetak
// document.body.innerHTML = el;

// ===akhir===

// ===awal===
// Contoh menggunakan Lopping, (Menangkap data terus dilopping)
// const mhs = [
//     {
//     name: 'irul',
//     kelas: '1a'
//     },
//     {
//     name: 'anya',
//     kelas: '1b'
//     },
//     {
//     name: 'feri',
//     kelas: '1c'
//     },
// ];
// const el = `
// <div class="mhs">
// ${mhs.map(m => 
//     `<ul>
//         <li>${m.name}</li>
//         <li>${m.kelas}</li>
//         <li>${m.email}</li>
//     </ul>`)
//     .join('')}
// </div>
// `;
// document.body.innerHTML = el;

// ===akhir===

// ===awal===
// contoh conditional
// const music = {
//     judul: 'matahari',
//     sing: 'irul'  ,
//     feat:'fadil'
// }
// const el = `
// <div class="mhs">
//     <ul>
//         <li>${music.judul}</li>
//         <li>${music.sing} ${music.feat ? `(feat.${music.feat})`:''}</li>
//     </ul>
// </div>
// `;
// document.body.innerHTML = el;
// ===akhir===

// ===awal===
// contoh Nested (HTML Fragments bersarang)
// const mhs = {
//         name: 'irul',
//         kelas: '1a'  ,
//         matakuliah:[
//             'Pengenalan Java',
//             'Analisis Database',
//             'Peograman Web',
//         ],
//     };
//     function cetakMatakuli(matakuliah){
//         return `
//         <ol>
//         ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
//         </ol>
//         `
//     }
//     const el = `
//     <div class="mhs">
//         <ul>
//             <li>${mhs.name}</li>
//             <li>${mhs.kelas}</li>
//             <li>${cetakMatakuli(mhs.matakuliah)}</li>
//         </ul>
//     </div>
//     `;
//     document.body.innerHTML = el;
// ===akhir===

// Topik baru 'Tagged Template'
// CONTOH
// ===awal===
// const name = 'irul fadil';
// const kelas = '1a';

// function coba(strings, ...values){ //values ini akan menjadi array yg jadi parameternya
//     // return name; // output str, akan menghasilkan name
//     // kita akan gabungkan isi dari valuesnya
//     //soulusinya kita pake foreach: karna kita tdk ingin hasilnya array maka menggunakan
//     // foreach
//     let result = '';
//     strings.forEach((strs, i) => {
//         result += `${strs}${values[i] || ''}`;
//     });
//     return result;
// }
// const str = coba`halo, saya ${name}, saya kelas ${kelas} ruang`;
// console.log(str);
//script diatas adalah cara biasa, maka dibawah ini kita akan
// membuat script dengan cara higher order function (reduce)
// const name = 'irul fadil';
// const kelas = '1a';

// function coba(strings, ...values){ 
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`
//     ,'')
// }
// const str = coba`halo, saya ${name}, saya kelas ${kelas} ruang`;
// console.log(str);
// //manfaatnya ket
// ===akhir===


