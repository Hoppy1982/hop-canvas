import { RenderWorldCanvas } from './modules/classes/render-world-canvas.js';


const assets = {
  house1: {
    radius: 12,
    primitives: [
      { type: 'rect', x0: 0, x1: 10, y0: 0, y1: 20 }
    ]
  }
}

const world = [
  {
    asset: assets.house1,
    orgin: { x: 0, y: 0 },
    rotation: 0,
  }
];


const parent = document.querySelector('.test-cnvs-inject');
const c1 = new RenderWorldCanvas(parent, 'c1', 0.5625);
c1.init();



class ViewPort {
  constructor(canvas, origin, scale) {
    this.canvas = canvas;
    this.orgin = orgin;
    this.scale = scale;
  }
}

/* ToDo */
// How represent a building?
// Scroll
// Zoom

const house1 = {
  rooms: [
    {
      wallTop: { x0: 0, y0: 0, x1: 0, y1:0 }
    }
  ]
}