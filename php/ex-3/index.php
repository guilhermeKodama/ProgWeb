<?php
 session_start();

 echo $_POST['login'];
  echo $_POST['password'];

if(isset($_POST['login']) && isset($_POST['password'])){
	if(strcmp($_POST['login'],'demo') && strcmp($_POST['password'],'demo')){
		$_SESSION['user'] = $_POST['login'];
	}
}

 if (isset($_SESSION['user'])) {
 	header("Location: /prog_web/php/ex-3/form.html");
    exit;
 } else {
   //not logged
 	echo '<form method="post" action="index.php">';
 	echo '<p>Login</p>';
 	echo '<p><input name="login" type="text"></p>';
 	echo '<p>Password</p>';
 	echo '<p><input name="password" type="password"></p>';
 	echo '<input type="submit">';
 	echo '</form>';
 }

 ?>