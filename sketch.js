var canvas, bgImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0
var database;

var form, player, game;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var track;
var carsAtEnd;
var swimmer, swimmerImg;
var bg1, bg2, water_img;
var bg1img, bg2img, bg3img;
var water = [];
var length = 13500;
var PIX_PER_M = 250
var POOL_LENGTH = 50 * PIX_PER_M // Pool length in pixels

function preload(){

  bg1 = loadImage("Images/2Full_Background2.png");
  bg2 = loadImage("Images/Full_Background.png");
  water_img = loadImage("Images/water.png");

  swimmerImg =loadAnimation("Images/tile000.png","../Images/tile001.png","../Images/tile002.png","../Images/tile003.png")

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  
  database = firebase.database();
  
  swim_distance = 0;

  game = new Game();
  game.getState();
  game.start();
}

function draw() {

  createCanvas(13500, 600);

  if(playerCount === 4){
    game.update(1);
  } 
  if(gameState === 1){
    clear();
    game.play();
  }
      
  //simulateWater();
  //updatePosition();
  //drawForeground();

  if(gameState === 2 && carsAtEnd === 4){
    clear();
    game.displayRanks();
  }

  //drawSprites();
}
