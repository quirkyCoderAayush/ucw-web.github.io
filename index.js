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
