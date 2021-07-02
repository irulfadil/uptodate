//synchronous callback
// function hallo(nama){
//     alert(`hallo, ${nama}`);
// }

// function tampilkanPesan(callback){
//     const nama =  prompt('Masukkan Nama');
//     callback(nama);
// }
// tampilkanPesan(hallo);
// data dalam bentuk array of object
// const mhs = [
//     {
//     "nama" : "Irul Fadil",
//     "kelas" : "1A",
//     "emai" : "bintangwae@yahoo.com"
//     },
//     {
//     "nama" : "Muhammad Fadil",
//     "kelas" : "1A",
//     "emai" : "fadil@yahoo.com"
//     },
//     {
//     "nama" : "Choirul amin",
//     "kelas" : "2A",
//     "emai" : "amin@yahoo.com"
//     }
// ];
// menampilkan data namanya saja
// mhs.forEach(m => console.log(m.nama));
// higher order function juga menrupakan callback funtion (teknik arow funtion)
// =========

//kasus lain jika kita akan mengambil data dari API (data orang lain)
// maka kita akan membutuhkan waktu untuk akses tersebut
//synchounous
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i< 1000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log('selesai');

//Asynchronous Callback
// ajax menggunakan vanilla
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get',url);
//     xhr.send();
// }
// //panggilnya
// console.log('mulai');
// getDataMahasiswa('json/coba.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => {
//         console.log(m.nama);
//     });
// },error => {
//     console.log(error);
// });
// console.log('akhir');

//pakai jquery
// console.log('mulai');
// $.ajax({
//     url: 'json/coba.json',
//     success: function(m){
//         m.forEach(m => {
//             console.log(m.nama);
//         });
//     },
//     error: function(){
//             console.log('error');
//     }
// });
// console.log('selesai');

//Latihan callback (kasus nyata);
// kita akan mengakses API online gratis
// Postman = aplikasi untuk request  terhadap API, untuk melihat
//tombol serch
// apakah API kita terkoneksi
$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=4e62426a&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search; //untuk menghilangkan key Search, karna search bawaan dari API.
      let cards = ""; //pakai let karna nilai variabel akan kita ubah nanti
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movies").html(cards);

      //ketika tombol diklik maka muncul detail movies
      $(".detail-movies").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=4e62426a&i=" +
            $(this).data("imdbid"),
          success: function (m) {
            const movieDetail = showDetail(m);
            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(m) {
  return `
        <div class="col-sm-3 my-2">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <p class="card-subtitle mb-2 text-muted">${m.Year}</p>
              <a href="#" class="btn btn-primary detail-movies" data-imdbid="${m.imdbID}" data-toggle="modal" data-target="#exampleModal">Detail</a>
            </div>
          </div>
        </div>`;
}

function showDetail(m) {
  return `
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col">
            <ul class="list-group">
            <li class="list-group-item active"><h4>${m.Title} ${m.Year}</h4></li>
            <li class="list-group-item">Director: ${m.Director}</li>
            <li class="list-group-item">Actors: ${m.Actors}</li>
            <li class="list-group-item">Writer: ${m.Writer}</li>
            <li class="list-group-item">Plot: ${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}
