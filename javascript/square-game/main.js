var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };


var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

var gameOver = false;

var numClick = 0;

var blueScore = 0;
var redScore = 0;


window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

/*COMPUTER*/


/*PADDLE*/
function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

Paddle.prototype.render = function(color) {
  context.fillStyle = color;
  context.fillRect(this.x, this.y, this.width, this.height);
};

Paddle.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  this.x_speed = x;
  this.y_speed = y;
  if(this.x < 0) { // all the way to the left
    this.x = 0;
    this.x_speed = 0;
  } else if (this.x + this.width > 400) { // all the way to the right
    this.x = 400 - this.width;
    this.x_speed = 0;
  }
}

/*SQUARE*/
function Square(x,y,size,color){
  this.paddle = new Paddle(x, y,size,size);
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;

  // Corners objects
  this.corners = [];
  //up left corner
  this.corners.push(new Corner(x ,y,5,"#000000"));
  //up right corner
  this.corners.push(new Corner(x + size + 5,y,5,"#000000"));
  //down left corner
  this.corners.push(new Corner(x ,y + size + 5 ,5,"#000000"));
  //down right corner
  this.corners.push(new Corner(x + size + 5, y + size + 5,5,"#000000"));
  
  //Sides objects
  this.sides = [];
  //left side
  this.sides.push(new Side(x,y,this.size,"vertical","#b2adad"));
  //right side
  this.sides.push(new Side(x+size ,y,this.size+5,"vertical","#b2adad"));
  //up side
  this.sides.push(new Side(x,y,this.size,"horizontal","#b2adad"));
  //down side
  this.sides.push(new Side(x,y + size ,this.size+5, "horizontal","#b2adad"));

}

Square.prototype.render = function() {
  this.paddle.render(this.color);
  for (var i = 0; i < this.corners.length; i++) {
    this.corners[i].render();
  }

  for (var i = 0; i < this.sides.length; i++) {
    this.sides[i].render();
  };
};

Square.prototype.isComplete = function(){
  completeSides = 0;
  for (var j = 0; j < this.sides.length; j++) {

    if(this.sides[j].selected){
      completeSides ++;
    }

  } 

  if(completeSides == 4){
    return true;
  }else{
    return false;
  }
}

/*CORNER*/
function Corner (x,y,radius,color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

}

Corner.prototype.render = function(){
  /*Draw circle*/
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = this.color;
  context.fill();
}


/*SIDE*/
function Side (x,y,size,orientation,color){
  this.weight = 5;
  this.orientation = orientation;

  this.paddle = new Paddle(x, y, this.weight ,size);

  if(orientation == "vertical"){
    this.paddle = new Paddle(x, y, this.weight ,size);

  }else if (orientation == "horizontal"){
    this.paddle = new Paddle(x, y, size , this.weight);
  }

  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color;
  this.selected = false;
}

Side.prototype.render = function(){
  this.paddle.render(this.color);
}

Side.prototype.wasClicked = function(x,y){

  if(this.orientation == "horizontal"){
    if((x >= this.x && x <= this.x + this.size) && (y >= this.y && y <= this.y + this.weight) ){
      return true;
    }else {
      return false;
    }

  }else if(this.orientation == "vertical"){
    if((x >= this.x && x <= this.x + this.weight) && (y >= this.y && y <= this.y + this.size) ){
      return true;
    }else {
      return false;
    }
  }

  return false;
}


/*BALL*/
Ball.prototype.render = function() {
  /*Line*/
  this.paddle.render();
  /*Ball*/
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = "#000000";
  context.fill();
};

function Ball(pos,x, y) {
  this.paddle = new Paddle(x,y, 50, 10);
  this.pos = pos;
  this.x = x;
  this.y = y;
  this.x_speed = 0;
  this.y_speed = 3;
  this.radius = 5;
}

/*WORLD*/
var squareOffset = 50;
//var square = new Square(100,100,50,"#e8e8e8");

var squares = [];

//squares.push(new Square(10 , 10 ,50,"#e8e8e8"));

//var cont = 0;
for (var i = 0; i < 5; i++) {
  for(var j = 0; j< 5; j++){
    squares.push(new Square(10 + (i*squareOffset) , 10 + (j*squareOffset) ,50,"#e8e8e8"));
    //cont ++;
  }
}


/*var balls = [];

var cont = 0;
for (var i = 0; i < 20; i++) {
  for(var j = 0; j< 20; j++){
    balls.push(new Ball(cont,10 + (i*offset), 10 + (j*offset) ));
    cont ++;
  }
};*/

var update = function() {
  if(!gameOver){
    completeSquares = 0;

    for (var i = 0; i < squares.length; i++) {
      square = squares[i];
      sides = square.sides;
      completeSides = 0;
      for (var j = 0; j < sides.length; j++) {

        if(sides[j].selected){
          completeSides ++;
        }
      } 
      if(completeSides == 4){
        completeSquares ++;
      } 
    }

    if(completeSquares == 25){
      alert("GAME OVER");
      gameOver = true;
    }
  }

};

var render = function() {

  context.fillStyle = "#e8e8e8";
  context.fillRect(0, 0, width, height);

  for (var i = 0; i < squares.length; i++) {
    squares[i].render();
  }

  context.font = "30px Arial";
  context.fillText("Blue Score: "+blueScore,100,400);
  context.fillText("Red Score: "+redScore,100,500);

};

/*CONTROLS*/

canvas.addEventListener("mousedown",onClick, false);
function onClick(){

  
  hitSide = false;

  var x = event.x;
  var y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //console.log("CLIQUEI -> X: "+x+" Y:"+y);

  for (var i = 0; i < squares.length; i++) {
    for (var j = 0; j < squares[i].sides.length; j++) {
      side = squares[i].sides[j];
      if(side.wasClicked(x,y)){

        if(!side.selected){
          if(numClick % 2 == 0){
            side.color = "#ff0000";
          }else{
            side.color = "#0000ff";
          }
          hitSide = true;

          if(squares[i].isComplete()){
            if(numClick % 2 == 0){
              redScore ++;
            }else{
              blueScore ++;
            }
          }

        }

        side.selected = true;
        
      }
    }
  }

  if(hitSide){
    numClick ++;
  }

}

document.onmousemove = function (e) {
  var x = event.x;
  var y = event.y;

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  //console.log("X: "+event.clientX+" Y:"+event.clientY);
};



