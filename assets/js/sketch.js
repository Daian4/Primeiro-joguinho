let person
let grama
let mapa

let tamanho = 64

let andarx = 0
let andary = 0

let randomx = 0
let randomy = 0

let velocidade = 64

let restar

let buttonUp
let buttonDown
let buttonLeft
let buttonRight

function setup() {
    createCanvas(576, 576);

    person = loadImage('assets/images/sara.png')
    grama = loadImage('assets/images/Grass Texture 4.jpg')
    mapa = loadImage('assets/images/Mapa.png')
    randomTarget()

    buttonUp = createButton('up')
    buttonUp.mousePressed(moveup)
    buttonDown = createButton('Down')
    buttonDown.mousePressed(moveDown)

    buttonLeft = createButton('Left')
    buttonLeft.mousePressed(moveLeft)

    buttonRight = createButton('Right')
    buttonRight.mousePressed(moveRight)

}

function draw() {
    if (andarx < 0) {
        andarx = 0
    }
    if (andary < 0) {
        andary = 0
    }
    if (andarx > tamanho * 8) {
        andarx = tamanho * 8
    }
    if (andary > tamanho * 8) {
        andary = tamanho * 8
    }

    background(220);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grama, tamanho * i, tamanho * j, tamanho, tamanho)
        }
    }

    image(mapa, 500, 500)
    image(person, andarx, andary, tamanho, tamanho)
    textSize(30)
    text('Colete o mapa', 185, 259)

    if (andarx === tamanho * 8 && andary === tamanho * 8) {
        rect(160, 160, 256, 256)
        textSize(25)
        text('VOCÊ GANHOU!', 195, 200)
        text('PARABÉNS!!', 210, 259)

        restar = createButton('Reiniciar')
        restar.mousePressed(reset)

        noLoop()
    }

}

function randomTarget() {
    randomx = parseInt(random(1, 7));
    randomy = parseInt(random(1, 7));
}

function moveup() {
    andary -= velocidade
}
function moveDown() {
    andary += velocidade
}
function moveLeft() {
    andarx -= velocidade
}
function moveRight() {
    andarx += velocidade
}

function reset() {
    andarx = 0
    andary = 0
    restar.remove()
    loop()
}


function keyPressed() {
    if (keyIsDown(UP_ARROW)) {
        andary -= velocidade
    }
    if (keyIsDown(DOWN_ARROW)) {
        andary += velocidade
    }
    if (keyIsDown(LEFT_ARROW)) {
        andarx -= velocidade
    }
    if (keyIsDown(RIGHT_ARROW)) {
        andarx += velocidade
    }
}

