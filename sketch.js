var Engine = Matter.Engine;
 World = Matter.World;
 Bodies = Matter.Bodies;
 Body = Matter.Body;

var plinkos=[];
var particles=[];
var division=[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }


   for (var j = 75; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,75));
   }

   for (var j = 50; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,125));
   }

    for (var j = 50; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,195));
   }

    for (var j = 50; j <=width; j=j+50) 
   {
   
      plinkos.push(new Plinko(j,285));
}

}
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
}
}
