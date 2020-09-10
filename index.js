var navBtn = document.getElementById("nav-btn");
var isRed = false;

navBtn.addEventListener("click", function(){
    if(isRed){
        navBtn.style.color = "orange";
        isRed = false;
    }
    else{
        navBtn.style.color = "red";
        isRed = true;    
    }
});
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}