

let snake;
let rez = 20;
let food;
let rocks =[];
let w;
let h;
let redFactor = 10;
let blueFactor = 10;
let greenFactor = 10;
let rockCount = 0;

function setup() {
  createCanvas(800, 800);
  resetSketch();
  var button =  createButton("Try Again");
  button.mousePressed(resetSketch);
  for (let i = 0; i < 100; i++) {
    rocks.push(new Stone());
  }
}
function resetSketch(){
    w = floor(width / rez);
    h = floor(height / rez);0
    frameRate(5);
    snake = new Snake();
    score = 0;
    foodLocation();


}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
    redFactor= redFactor+0.80;
    blueFactor= blueFactor+0.5;
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
    redFactor=redFactor-0.75;
    blueFactor=blueFactor-0.5;
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
    redFactor =redFactor+0.25;
    blueFactor=blueFactor+1.75;
    greenFactor=greenFactor+0.50;
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
    redFactor =redFactor-0.25;
    blueFactor=blueFactor-0.75;
    greenFactor=greenFactor-0.50;
  } else if (key == ' ') {
    snake.grow();
  }
}

function draw() {
    scale(rez);
colorMode(RGB);
if (score>=1) { for (let i = 0; i < rockCount; i++) {rocks[i].show()};
      
}
if (snake.endGame()) {
    background(0);
    textSize(6);
    fill(random(250),random(250),random(250));
    print('END GAME');
    text('Game Over!!',3 ,10);
    textSize(2)
    text('Final Score: '+ score,13,13);
    textSize(1);
    text('Rules:',13,26);
    text('1. Do not Eat Rocks, Only Food',13,27);
    text('2. Do not Eat Yourself!', 13,28);
    text('3. Do not Leave the Map', 13,29);
    rockCount=0;
    
  } else {
    background(((redFactor) + 5*score)%360,((greenFactor)+ 5*score)%360,((blueFactor) + 5*score)%360,75);
    if (snake.eat(food)) {
      foodLocation();
      //update the score
      score += 1;
      print("score is now " + score);
      //make the snake move faster when the score gets above 20
      if (score > 20) {frameRate(map(score/4,5,90,5,20));
        }
      //increase the number of rocks
      rockCount= rockCount +0.5;
    }
  
    snake.update();
    snake.show();
    //showing the score
    colorMode(RGB);
    fill((250-(score))%450,(250-(score))%450,(250-(score))%450);
      textSize(1);
      text('Score: ' + score, w - 5, 1)
    }

//if the snake eats rocks the game ends
 for (let i = 0; i < rockCount; i++) {
if (snake.eat(rocks[i])) {
    background(0);
    textSize(6);
    fill(random(250),random(250),random(250));
    text('Game Over!!',3 ,10);
    textSize(2);
    text('Final Score: '+ score,13,13);
    textSize(1);
    text('Rules:',13,26);
    text('1. Do not Eat Rocks, Only Food',13,27);
    text('2. Do not Eat Yourself!', 13,28);
    text('3. Do not Leave the Map', 13,29);
    rockCount=0;     
    }}

  noStroke();
  colorMode(RGB);
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1,0.5);

}