//Topik for..of vs for..in
// deklarasi object
// const mhs = {
//     name:'irul',
//     kelas:'1A'
// }
// //contoh dgn array dgn cara for lama/biasa
// for(let i=0; i<=mhs.length; i++){
//     console.log(mhs[i]);
// }
// //{ name: 'irul', kelas:'1A'}
// // kita akan membuat hasil output sama dgn cara for..of
// for(const m of mhs){ 
//     console.log(mhs);
// }

// contoh dengan nodelist
// const liName = document.querySelectorAll('.nama');
// // liName.forEach(n => console.log(n.textContent));
//     for(n of liName){
//         console.log(n.innerHTML);
//     }

const mhs = [{
    name:'irul',
    jurusan:'IF',
    kelas:'1A'
},
{
    name:'fadil',
    jurusan:'teknik',
    kelas:'2A'
}];
for(m in mhs){
    console.log(mhs);
}
