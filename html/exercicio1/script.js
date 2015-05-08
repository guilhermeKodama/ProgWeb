
protesto =  document.getElementById("protesto");
play = document.getElementById("play");

play.onclick = function(){
	console.log("O usuário clicou no botão play!");

	if(protesto.paused){
		protesto.play();
		play.innerHtml = "Pause";
	}else{
		protesto.pause();
		play.innerHtml = "Play";
	}
}