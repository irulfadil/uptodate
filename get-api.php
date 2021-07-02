<!-- ---contoh pengambilan data REST API----- -->
<?php
$data = file_get_contents('pizza.json');
$menu = json_decode($data, true);

$menu = $menu["menu"];
echo $menu[0]["nama"];
 
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Web testing hallo</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
            <img src="img/logo.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </div>
          </div>
      </div>
    </nav>

  <div class="container">

    <div class="row mt-3">
        <div class="col">
          <h1>All Menu</h1>
        </div>
    </div>
    <div class="row">
    <?php foreach($menu as $row): ?>
      <div class="col-md-4">
        <div class="card mb-3">
          <img src="img/menu/supreme.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><?php echo $row["nama"];?></h5>
          <p class="card-text"><?php echo $row["deskripsi"];?></p>
          <h5 class="card-title"><?php echo $row["harga"];?></h5>
          <a href="#" class="btn btn-primary">Pesan</a>
          </div>
        </div>
      </div>
      <?php endforeach;?>
    </div>

  </div>

  <!--
  <div class="container">
      <div class="row mt-3 justify-content-center">
        <div class="col-md-8">
          <h1>Seach Movie</h1>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="cari" aria-label="cari" 
                aria-describedby="button-addon2" id="search-input">
                <div class="input-group-append">
                <button class="btn btn-outline-dark" type="button" id="button-addon2" id="search-button">cari</button>
                </div>
              </div>
          </div>
      </div>
  </div>
  <hr>
  <div class="row" id="movie-list">
  </div>
  -->
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <!-- <script src="js/js2.js"></script> -->
  </body>
</html>
