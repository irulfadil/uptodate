<!-- ---contoh json_encode--- -->
<?php 
$mahasiswa = [
    "nama" => "irulfadil",
    "umur" => "33",
    "alamat" => "kaliputu"
];
$data = json_encode($mahasiswa);
echo $data;

// $user = 'root';
// $pass = '';
//     $dbh = new PDO('mysql:host=127.0.0.1;dbname=test',$user,$pass);
//     $db = $dbh->prepare('SELECT * FROM mahasiswa');
//     $db->execute();
//     // $mahasiswa = $db->fetchAll();
//     $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);
//     $data = json_encode($mahasiswa);
//     echo $data;
 
    // $content = file_get_contents('coba.json');
    // echo $result = json_decode($content,true);

?>
