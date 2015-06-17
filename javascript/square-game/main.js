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

Paddle.prototype.render = function() {
  context.fillStyle = "#0000FF";
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

/*CONTROLS*/

document.onmousemove = function (e) {
  console.log("X: "+event.clientX+" Y:"+event.clientY);
};

/*WORLD*/
var offset = 50;

var balls = [];

var cont = 0;
for (var i = 0; i < 20; i++) {
  for(var j = 0; j< 20; j++){
    balls.push(new Ball(cont,10 + (i*offset), 10 + (j*offset) ));
    cont ++;
  }
};

var update = function() {
  
};

var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, width, height);

  for (var i = 0; i < balls.length; i++) {
    balls[i].render();
  }

};



