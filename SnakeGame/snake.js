const gameBoard = document.querySelector('.gameBoard');
const context = gameBoard.getContext('2d');
const scoreText = document.querySelector('.scoreTxt');
const resetBtn = document.querySelector('.reset');
const startBtn = document.querySelector('.Start');
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "#f4f1de";
const snakeColor = "rgb(14, 255, 14)";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
];

window.addEventListener('keydown', changeDirection);
resetBtn.addEventListener('click', resetGame);
startBtn.addEventListener('click', startButton);
clearBoard();
drawSnake();
createFood();
drawFood();

function startButton(){
    resetGame();
    gameStart();
}

function gameStart() {
    running = true;
    scoreText.textContent = score;
    nextTick();
};

function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75)
    }
    else {
        displayGameOver();
    }
}

function clearBoard() {
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight)
}

function createFood() {
    function randomFood(min, max) {
        const randomNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randomNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
    }

function drawFood() {
    context.fillStyle = foodColor;
    context.fillRect(foodX, foodY, unitSize, unitSize)
}

function moveSnake() {
    const head = {
        x: snake[0].x + xVelocity, y: snake[0].y + yVelocity
    };
    snake.unshift(head);
    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else {
        snake.pop();
    }
}


function drawSnake() {
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}
function changeDirection(event) {
    const keyPressed = event.keyCode;
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    const goingUp = (yVelocity == - unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == - unitSize);
    const goingRight = (xVelocity == unitSize);
    switch (true) {
        case (keyPressed == left && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == up && !goingDown):
            yVelocity = -unitSize;
            xVelocity = 0;
            break;
        case (keyPressed == down && !goingUp):
            yVelocity = unitSize;
            xVelocity = 0;
            break;
        case (keyPressed == right && !goingLeft):
            yVelocity = 0;
            xVelocity = unitSize;
            break;
    }

}

function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }

    for (let i = 1; i < snake.length; i += 1) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false
        }
    };
}

function displayGameOver() {
    context.font = "bold 40px Verdana, Geneva, Tahoma, sans-serif";
    context.fillStyle = "#5e5e5e ";
    context.textAlign = "Center";
    context.fillText("GAME OVER ",  gameWidth/4, gameHeight / 2);
    running = false;
}

function resetGame() {
    score =0; 
    xVelocity = unitSize; 
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 },
    ];
    clearBoard();   
    createFood();
    drawFood();
    drawSnake();
};

