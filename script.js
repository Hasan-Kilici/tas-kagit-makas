var secenek = "";
var botsecenek = "";
const secenekler = ["tas","kagit","makas"];

const tas = document.getElementById("tas");
const kagit = document.getElementById("kagit");
const makas = document.getElementById("makas");

var botgalibiyet = 0;
var galibiyet = 0;
var beraberlik = 0;

const botgalibiyet_text = document.getElementById("botgalibiyet");
const galibiyet_text = document.getElementById("galibiyet");
const beraberlik_text = document.getElementById("beraberlik");

var click = false;

tas.addEventListener("click",function(){
if(click == true){
alert("3 Saniye bekleyiniz");
} else {
secimTas()
}
});
kagit.addEventListener("click",function(){
if(click == true){
alert("3 Saniye bekleyiniz");
} else {
secimKagit()
}
});
makas.addEventListener("click",function(){
if(click == true){
alert("3 Saniye bekleyiniz");
} else {
secimMakas()
}
});

function secimTas(){
setTimeout(()=>{
click = false;
console.log("Oyuna dön!")
},3000);
  
secenek = "tas";
click = true;
botsecenek = secenekler[Math.floor(Math.random()*secenekler.length)];
if(secenek == "tas" && botsecenek == "tas"){
beraberlik++
beraberlik_text.innerHTML = beraberlik;
} else if(secenek == "tas" && botsecenek == "kagit"){
botgalibiyet++
botgalibiyet_text.innerHTML = botgalibiyet;
} else if(secenek == "tas" && botsecenek == "makas"){
galibiyet++
galibiyet_text.innerHTML = galibiyet;
}
return beraberlik;
return galibiyet;
return botgalibiyet;
return secenek;
return botsecenek;  
}
function secimKagit(){
setTimeout(()=>{
click = false;
console.log("Oyuna dön!")
},3000);

secenek = "kagit";
click = true;
botsecenek = secenekler[Math.floor(Math.random()*secenekler.length)];
  
if(secenek == "kagit" && botsecenek == "tas"){
galibiyet++
galibiyet_text.innerHTML = galibiyet;
} else if(secenek == "kagit" && botsecenek == "kagit"){
beraberlik++
beraberlik_text = beraberlik;
} else if(secenek == "kagit" && botsecenek == "makas"){
botgalibiyet++
botgalibiyet_text.innerHTML = botgalibiyet;
}
return beraberlik;
return galibiyet;
return botgalibiyet;
return secenek;
return botsecenek;  
}
function secimMakas(){
setTimeout(()=>{
click = false;
console.log("Oyuna dön!")
},3000);
  
secenek = "makas";
click = true;
botsecenek = secenekler[Math.floor(Math.random()*secenekler.length)];
  
if(secenek == "makas" && botsecenek == "tas"){
botgalibiyet++
botgalibiyet_text.innerHTML = botgalibiyet;
} else if(secenek == "makas" && botsecenek == "kagit"){
galibiyet++
galibiyet_text.innerHTML = galibiyet;
} else if(secenek == "makas" && botsecenek == "makas"){
beraberlik++
beraberlik_text.innerHTML = beraberlik;
}
return beraberlik;
return galibiyet;
return botgalibiyet;
return secenek;
return botsecenek;  
}