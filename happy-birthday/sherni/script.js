var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));

const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;

var hearts = [];
		
function generateHeart(x, y, xBound, xStart, scale)
{
	var heart = document.createElement("DIV");
	heart.setAttribute('class', 'heart');
	brd.appendChild(heart);
	heart.time = duration;
	heart.x = x;
	heart.y = y;
	heart.bound = xBound;
	heart.direction = xStart;
	heart.style.left = heart.x + "px";
	heart.style.top = heart.y + "px";
	heart.scale = scale;
	heart.style.transform = "scale(" + scale + "," + scale + ")";
	if(hearts == null)
		hearts = [];
	hearts.push(heart);
	return heart;
}

var down = false;
var event = null;

document.onmousedown = function(e) {
	down = true;
	event = e;
}

document.onmouseup = function(e) {
	down = false;
}

document.onmousemove = function(e) {
	event = e;
}

document.ontouchstart = function(e) {
	down = true;
	event = e.touches[0];
}

document.ontouchend = function(e) {
	down = false;
}

document.ontouchmove = function(e) {
	event = e.touches[0];
}

var before = Date.now();
var id = setInterval(frame, 5);
var gr = setInterval(check, 100);

function frame()
{
	var current = Date.now();
	var deltaTime = current - before;
	before = current;
	for(i in hearts)
	{
		var heart = hearts[i];
		heart.time -= deltaTime;
		if(heart.time > 0)
		{
			heart.y -= speed;
			heart.style.top = heart.y + "px";
			heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100 + "px";
    }
		else
		{
			heart.parentNode.removeChild(heart);
			hearts.splice(i, 1);
		}
	}
}

function check()
{
	if(down)
	{
		var start = 1 - Math.round(Math.random()) * 2;
		var scale = Math.random() * Math.random() * 0.8 + 0.2;
		var bound = 30 + Math.random() * 20;
		generateHeart(event.pageX - brd.offsetLeft + cursorXOffset, event.pageY - brd.offsetTop + cursorYOffset, bound, start, scale);
	}
}

var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});


function checkScreenSize(){
	var w = window.screen.width;
	var h = window.screen.height;

	if(!(w >= 1200 && w<= 1500 && h >= 700 && h<= 1000)){
		alert("Please open the site on your Laptop, Babu, my jaan, shona, mona, jaadu, tona... hehehe !")
		location.replace("./img/404.jpeg")
	}
}