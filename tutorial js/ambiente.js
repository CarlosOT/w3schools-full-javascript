var i = 0;
var txt = 'Lorem ipsum typing effect!';
var speed = 50;

function typeWriter(){
  if (i < txt.length){
    console.log(txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();