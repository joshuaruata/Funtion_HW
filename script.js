document.body.querySelector(".button1").addEventListener("click", function(){
Hero("Deal 1 damage to a Dragon");
});
document.body.querySelector(".button2").addEventListener("click", function(){
Hero("Deal 3 damage to a Dragon");
});
document.body.querySelector(".button3").addEventListener("click", function(){
Hero("Deal 4 damage to a Dragon");
});

for(var i=0; i<1; i++){
  Hero("Batman");
  Damage: 2;
}
function Hero(name){
  var ele = document.createElement("div");
  document.body.appendChild(ele)
  ele.innerHTML=name;
  };