let canvasBackground = new Image();
canvasBackground.src = "assets/bp.png";

let playerSpaceShip = new Image();
playerSpaceShip.src = "assets/spaceship.png";

let playerShipSound = new Audio();
playerShipSound.src = "sounds/gunsound.mp3"

let asteriods = new Image();
asteriods.src = "assets/ja.png";

let playerBullet = new Image();
playerBullet.src = "assets/enemyLaser.png";

let enemySpaceShip = new Image();
enemySpaceShip.src = "assets/shipenemy.png";

let enemySpaceShipBullet = new Image();
enemySpaceShipBullet.src = "assets/bullet.png"

let fuelImage = new Image();
fuelImage.src = "assets/energy.png";


let destroyedSound = new Audio();
destroyedSound.src = "sounds/destroyed.mp3";

let backgroundSound = new Audio();
backgroundSound.src = "sounds/background.mp3";
export { playerSpaceShip, playerShipSound, asteriods, playerBullet, destroyedSound, backgroundSound, canvasBackground, enemySpaceShip, enemySpaceShipBullet, fuelImage };
