function zegarek(){
    var data = new Date();
    var minuty = data.getMinutes();
    var godziny = data.getHours();
    var sekundy = data.getSeconds();

    if(sekundy<10){ sekundy = "0"+sekundy;}
    if(minuty<10){ minuty = "0"+minuty;}
    if(godziny<10){ godziny = "0"+godziny;}
    document.getElementById("zegarek").innerHTML = godziny+":"+minuty+":"+sekundy;
    setTimeout(zegarek,1000);
}
