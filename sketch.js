var bullet,wall;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1350, 100, 30, 80);
  wall.shapeColor = "green";
  wall.debug = false;
  bullet = createSprite(50,100,40,05);
  bullet.shapeColor = "white";
  bullet.velocityx=-5
  bullet.debug = false;
}

function draw() {
  background(0,0,0);  
  bullet.x = World.mouseX;
  bullet.y = World.mouseY;

  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
      && wall.x - bullet.x < wall.width/2 + bullet.width/2
      && bullet.y - wall.y < wall.height/2 + bullet.height/2
      && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
        bullet.shapeColor = "red";
    wall.shapeColor = "red";
  }
  else {
    bullet.shapeColor = "white";
    wall.shapeColor = "green";
  }
  drawSprites();
}