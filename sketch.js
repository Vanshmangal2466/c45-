var gamestate=0;

var form ;
function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-140);
  form=new FORM();

}


function draw(){
background("Black");

 if(gamestate===0){
   form.display();
 }
 if(gamestate===1){
   form.displayoption();
 }
}
