let button=document.querySelector(".btn1"),
h1=document.querySelector("h1"),
span=document.querySelector("span"),
img=document.querySelector("img");
button.onclick=function(){
    var e=document.querySelector(".cityname").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=b2b2ce6e7999964cf46c1849fe69edc0")
    .then(e=>e.json()).then(e=>{img.setAttribute("src","http://openweathermap.org/img/wn/"+e.weather[0].icon+"@4x.png"),
    h1.innerHTML=e.main.temp+"°"})};