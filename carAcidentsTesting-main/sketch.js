var testBullet,wall;
var weight,speed,thickness;
var damage,answer;
var edges;
var testBulletRightEdge,wallLeftEdge;
var back;

function setup() {
    createCanvas(1325,600);
    back=createSprite(0,0,999999999,999999999);
    weight = Math.round(random(30,52));
    speed = Math.round(random(223,321));
    thickness=Math.round(random(22,28));
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    testBullet=createSprite(125,300,60,20);
    wall=createSprite(1200,300,thickness,300);
    answer="Unknown(bullet did not collide). Please retry";
}
function draw() {
    background(52.9,80.8,92.2);  
    edges=createEdgeSprites();
    drawSprites();
    
    wall.shapeColor = "firebrick";
    testBullet.velocityX = speed;

    testBullet.collide(wall);
    testBullet.collide(edges);
    testBullet.shapeColor = rgb(175, 155, 96);

    fireIt();
    shootWutHappened();

    textSize(15);
    fill("white");
    text("Weight: "+ weight + "g",20,575);
    text("Speed: "+ speed +" Km/hrs",110,575);
    text("Wall thickness: "+ thickness+" inches",250,575);
    text("Expected damage: "+ damage,430,575);
    text("Durrability: "+answer,720,575);
}

function fireIt() {
    testBullet.velocityX=speed;
    testBullet.velocityY=weight;
}

function shootWutHappened() {
    if(testBullet.x===wall.x){
        testBullet.velocityX=0;
        testBullet.velocityY=0;
    }
    if(damage>100){
        back.shapeColor="crimson";
        answer="BAD";
    } else {
        back.shapeColor="springgreen";
        answer="GOOD";
    }
}
function hasCollided() {
	testBulletRightEdge=testBullet.x +testBullet.width;
	wallLeftEdge=wall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}