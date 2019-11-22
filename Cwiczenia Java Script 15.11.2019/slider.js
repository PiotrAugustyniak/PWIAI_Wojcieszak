 document.getElementById("zawartosc").innerHTML = "<img id='slider-image' width='250px' height='200px'/><div id='slider-counter'></div>";
 var obrazy = [
      "obrazy/1.jpg",
      "obrazy/2.jpg",
      "obrazy/3.jpg",
      "obrazy/4.jpg",
      "obrazy/5.jpg",
 ];
var licznik=0;
var intervalSlider;
var aktualizujSlider = function(){
    if(licznik == obrazy.length) licznik = 0;
    document.getElementById("slider-image").src = obrazy[licznik];

var postep = "";
for(var i=0; i<obrazy.length;i++){
    if(i == licznik) postep +="X";
    else postep += "-";
}
 document.getElementById("slider-counter").innerHTML = postep;
 licznik++;
}

document.getElementById("slider-image").onclick=function(){
    if(intervalSlider){
        clearInterval(intervalSlider);
        document.getElementById("slider-counter").innerHTML+=" (PAUZA)";
        intervalSlider = null;
    }else{
        aktualizujSlider();
        intervalSlider=setInterval(aktualizujSlider, 2000);
    }
}

document.getElementById("slider-image").onclick();
