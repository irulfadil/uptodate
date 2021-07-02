//contoh promise sederhana
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji ditepai');
//     }else{
//         reject('janji tidak ditepati');
//     }
// });
// janji1
// .then(response => console.log('ok :'+ response))
// .catch(response => console.log('Not Ok:'+ response));

//contoh promise selanjutnya
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() =>{
//             resolve('janji ditepai');
//         },2000);
//     }else{
//         setTimeout(() =>{
//             resolve('janji ditepai');
//         },1000);
//     }
// });
// console.log('mulai');
// janji2
// .finally(() => console.log('selesai menunggu'))
// .then(janji2 => console.log('ok :'+ janji2))
// .catch(janji2 => console.log('ok :'+ janji2));

//promise all
// API 1
const film = new Promise((resolve)=>{
    setTimeout(() =>{
        resolve([{
            nama: 'irul',
            kelas:'1A'
        }])
    },5000);
});
// // API 2
const cuaca = new Promise((resolve)=>{
    setTimeout(() =>{
        resolve([{
            kota: 'Bandung',
            temperature: 3
        }])
    },1000);
});

film.then(response => console.log(response));
cuaca.then(response => console.log(response));
//kalau ada API 5, maka kita buat 5 promise

// dan bisa juga kita membuat jadi satu
// Promise.all([film, cuaca])
    // .then(response => console.log(response));
    // output array of object jadi satu
    // .then(response => {
    //     const [film, cuaca] = response;
    //     console.log('mulai');
    //     console.log(film);
    //     console.log(cuaca);
    //     console.log('akhir');
    // });
//output array of object dipecah menggunakan spreate operator