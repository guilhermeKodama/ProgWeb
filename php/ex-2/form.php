<?php

print_r($_POST);

$DATA_BASE_HOST = "127.0.0.1";
$DATA_BASE_NAME = "prog_web";
$DATA_BASE_USER = "root";
$DATA_BASE_PASSWORD = "multi@media2";
	
	
// Conecta ao banco de dados
$mysqli = new mysqli ( $DATA_BASE_HOST,
				 $DATA_BASE_USER,
				 $DATA_BASE_PASSWORD,
				 $DATA_BASE_NAME );

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

echo 'CHEGUEI AQUI';
print_r ($_POST['name']);
print_r($_POST['gender']);
print_r($_POST['comment']);

$stmt = $mysqli->prepare("INSERT INTO form(name,gender,comment) VALUES (?, ?, ?)");
$stmt->bind_param('sss', $_POST['name'], $_POST['gender'],$_POST['comment']);
$stmt->execute(); 
$stmt->close();
	

?>