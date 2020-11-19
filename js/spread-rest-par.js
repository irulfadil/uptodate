//contoh spread operator
//memecah iterable menjadi single element

// const mhs = ['irul','amin','fadil'];
// console.log(...mhs);
//output normal: berupa array 
//setelah pakai spread operator titik tiga (...) maka output menjadi string
// console.log(...mhs[0]); //jika kita pecah string

//Kapan kita menggunakan spread Operator
// 1.ketika kita mengabungkan 2 array
// const mhs = ['Irul','Amin','Fadil'];
// const dosen = ['Muhammad','Ismali','Marzuki'];
// const orang = [...mhs, 'isibaru', ...dosen];
// dengan menggunakan spread ini akan lebih flexibel untuk menyisipkan
// data baru.
// console.log(orang);

//2.mengcopy array
// const mhs = ['Irul','Amin','Fadil'];
// const mhs1 = [...mhs]; //spread operator
// mhs1[0] = 'muhammad';
// console.log(mhs);
//dengan spread opertaor tidak akan mengubah array aslinya
//hanya mhs1 yang berubah

//3. contoh kasus, ingin mengubah list di dalam html menjadi sebuah array
// const liData = document.querySelectorAll('li');
// const mhs = [...liData].map(m => m.textContent);
// console.log(mhs);

// kita akan membuat font gerak perhuruf jika cursor didekatkan
//dengan teknik pecah (spread perhuruf).

// const nama = document.querySelector('.judul');
// const huruf = [...nama.textContent]
// .map(m => `<span>${m}</span>`).join('');
// nama.innerHTML =  huruf; //hasil akan jadi span perhuruf

//Topik Rest Parameter
// Mempresentasikan argument pada function dengan jumlah yang tidak
// terbatas menjadi sebuah array.
//contoh
// const myData(1,2,3,4,5); //normal
// function myData(...myArgs){ //rest parameter
//     return myArgs;
// }
// console.log(myData(1,2,3,4,5)); //[1,2,3,4,5]

//contoh penjumlahan
// function jumlah(...angka){ //rest parameter
//     //1. coba pakai for
//     // let total = 0;
//     // for(const a of angka){
//     //     total += a;
//     // }
//     // return total;
//     //2. coba pakai reduce
//     return angka.reduce((a,b) => a + b);
// }
// console.log(jumlah(1,2,3,4,5));

//kasus, array destructuring
// const kelompok1 = ['irul', 'amin', 'fadil', 'sultan'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua); //irul
// // console.log(anggota); // fadil sultan

//kasus, object destructuring
// const team={
//     pm:"irul",
//     frondend1:"amin",
//     frondend2:"fadil",
//     frondend3:"sultan",
//     frondend4:"raja",
// }
// const {pm, ...myteam} = team;
// // console.log(pm); //irul
// console.log(myteam); //frontend1:amin, frontend2:fadil...

// kasus, filtering
function filterBy(type, ...values){
 return values.filter(v => typeof v === type);
}
// console.log(filterBy('number', 1, 2, 'irul', false, 10, true,'doddy')); //filter berdasarkan number
console.log(filterBy('string', 1, 2, 'irul', false, 10, true,'doddy')); //filter berdasarkan string