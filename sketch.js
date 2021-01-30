const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg;
var ground ,groud2;
var hero1 ,fly1,monster1
var box1,box2,box3,box4,box5,
    box6,box7,box8,box9,box10,
    box11,box12,box13,box14,box15,
    box16,box17,box18,box19,box20;


function preload() {
//preload the images here;
bgImg = loadImage("Images/GamingBackground.png");

}

function setup() {
  createCanvas(1400, 500);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

  ground = new Ground(400,450,1000,10);
 ground2 = new Ground(1000,350,150,10);

  hero1 = new Hero(300,250,300,100);
  box1 = new Obst(600,380,80,50);
  box2 = new Obst(600,310,80,50);
  box3 = new Obst(600,230,80,50);
  box4 = new Obst(600,150,80,50);
  box5 = new Obst(600,80,80,50);
  box6 = new Obst(600,80,80,50);
  box7 = new Obst(600,0,80,50);
  box8 = new Obst(720,310,80,50);
  box9 = new Obst(720,230,80,50);
  box10 = new Obst(720,150,80,50);
  box11 = new Obst(720,70,80,50);
  box12 = new Obst(840,0,80,50);
  box13 = new Obst(840,380,80,50); 
  box14 = new Obst(840,310,80,50);
  box15 = new Obst(840,230,80,50);
  box16 = new Obst(840,150,80,50);
  box17 = new Obst(840,70,80,50);
  box18 = new Obst(840,0,80,50);


  fly1 = new Fly(hero1.body,{x:400,y: 0});

  monster1 = new Monster(1000,300,200,200)


}

function draw() {

  Engine.update(engine);

  background(bgImg);

 ground.display();
 ground2.display();
 
 hero1.display();
 fly1.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();

 monster1.display();
}

function mouseDragged(){
  
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY})

}
