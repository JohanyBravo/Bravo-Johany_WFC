const celdas = [];
const RETICULA = 4;
const azulejos = [];
const NA = 16;
const reglas = [
  {
    // tile 0
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 1
    UP: 0,
    RIGHT: 2,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 3
    UP: 0,
    RIGHT: 1,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 4
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 5
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 6
    UP: 0,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 7
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 8
    UP: 0,
    RIGHT: 2,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 9
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 1,
  },
  {
    // tile 10
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 11
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 2,
  },
  {
    // tile 12
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 2,
  },
  {
    // tile 13
    UP: 1,
    RIGHT: 0,
    DOWN: 1,
    LEFT: 0,
  },
  {
    // tile 14
    UP: 1,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 15
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
];
function preload() {
  for (let i = 0; i < NA; ii++) {
    azulejos[i] = loadImage(`azulejos/tile${i}.png`);
  }
}

function setup() {
  createCanvas(1080, 1080);
  let opciones = [];
  for (let i = 0; i < azulejos.length; ) {}
  print(azulejos);
  opcionesI.push(i);
}
for (let i = 0; i < RETICULA * RETICULA; i++) {
  celdas[i] = {
    colapsada: false,
    opciones: opcionesI,
  };
}
print(celdas);

function draw() {
  circle(mouseX, mouseY, 20);
}
