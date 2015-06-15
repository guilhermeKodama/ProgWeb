<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Exercicio 2 css</title>
	<link rel="stylesheet" type="text/css" href="style.css">

	<script language='JavaScript' type='text/JavaScript'>
<!--
function reset(){
clearTimeout(my_time);
document.getElementById('box').style.left= "0px";
document.getElementById('box').style.top= "10px";

}



function move_img(str) {

var x=document.getElementById('box').offsetTop;

x= x +100;
document.getElementById('box').style.top= x + "px";

}

function disp(){
var step=1; // Change this step value
//alert("Hello");
var y=document.getElementById('box').offsetTop;
var x=document.getElementById('box').offsetLeft;
if(y < 600 ){y= y +step;
document.getElementById('box').style.top= y + "px"; // vertical movment
}else{
if(x < 800){x= x +step;
document.getElementById('box').style.left= x + "px"; // horizontal movment
}
}
//////////////////////

}

function timer(){
disp();
var y=document.getElementById('box').offsetTop;
var x=document.getElementById('box').offsetLeft;
my_time=setTimeout('timer()',10);
}


//-->
</script>


</head>
<body>

<div class="box" id="box">O Instituto de Computação é o mais novo instituto da UFAM , tendo sido formado a partir do antigo
 Departamento de Ciência da Computação (DCC)</div>

<input type=button onClick=timer() value='Start'>
<input type=button onClick=reset() value='Reset'>

</body>
</html>