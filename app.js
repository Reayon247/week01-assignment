console.log("hello world");

const smolCat = document.getElementById("smolcat");
console.log(smolCat);
var catTalk = document.getElementById("catTalk");

var catNoise = document.createElement(`audio`);
catNoise.setAttribute(`src`, `./cat noise.mp3`);

smolCat.addEventListener("mouseover", function () {
  smolCat.src = "./cat-spinning.gif";
  smolCat.style.height = `500px`;
  catNoise.play();
  catNoise.loop = true;
  catTalk.textContent = "Yipppeeeee";
});

smolCat.addEventListener("mouseleave", function () {
  smolCat.src = "./meme cat.png";
  smolCat.style.height = `400px`;
  catNoise.loop = false;
  catNoise.pause();
  catTalk.textContent = "Why'd you stop :(";
});
