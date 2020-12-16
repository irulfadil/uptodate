function seacrhMovie(){
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        datatype:'json',
        data: {
            'apikey': '4e62426a',
            's': $('#carifilm').val()
        },
        success: 
                function(result){
                    if(result.Response === "True"){
                        let movies = result.Search;
                        $.each(movies, function(i, data){
                            $('#movie-list').append(`
                            <div class="col-md-4">
                                <div class="card mb-2">
                                    <img src=`+ data.Poster+` class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">`+ data.Title +`</h5>
                                        <p class="card-text">Tayang `+ data.Year +`</p>
                                        <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="`+ data.imdbID +`">Detail</a>
                                    </div>
                                    </div>
                                </div>
                            `);
                        });
                        $('#carifilm').val('');
                    }else{
                        $('#movie-list').html(`
                        <div class="col">
                        <h1 class="text-center">` + result.Error + `</h1>
                        </div>
                        `)
                    }
                }
    })
}

$('#btn').on('click', function (){
    seacrhMovie();
}); 

$('#carifilm').on('keyup', function (event){
    if(event.keyCode === 13){
        seacrhMovie();
    }
});

$('#movie-list').on('click','.see-detail', function(){
    $.ajax({
        url: 'http://www.omdbapi.com',
        datatype:'json',
        type:'get',
        data: {
            'apiKey':'4e62426a',
            'i': $(this).data('id')
    },
        success: function(movie){
            if(movie.Response === "True"){
                $('.modal-body').html(`
                    <div class="container">
                        <div class ="row">
                            <div class="col-md-4">
                            <img src="`+ movie.Poster +`" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                            <ul class="list-group">
                            <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                            <li class="list-group-item">Realease`+ movie.Released +`</li>
                            <li class="list-group-item">Genre`+ movie.Genre +`</li>
                            <li class="list-group-item">Director`+ movie.Director +`</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    }) 
});