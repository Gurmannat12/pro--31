
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var engine,world;
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,800,500,10);
  edge1 = new Edge(0,400,10,800);
  edge2 = new Edge(480,400,10,800);

        for (var j = 40; j <=width; j=j+60) 
        {
            plinkos.push(new Plinko(j,75));
        }

        for (var j = 15; j <=width-10; j=j+60) 
        {
            plinkos.push(new Plinko(j,175));
        }

        for (var j = 40; j <=width; j=j+60) 
        {
            plinkos.push(new Plinko(j,275));
        }

        for (var j = 15; j <=width-10; j=j+60) 
        {
            plinkos.push(new Plinko(j,375));
        }

        for (var k = 0; k <=width; k = k + 80)
        {
            divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
        }

}

function draw() {
  background(0);  
  drawSprites();

  Engine.update(engine);

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  ground.display();
  edge1.display();
  edge2.display();
  //particles.display();
}