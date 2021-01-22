import { debounce } from '../utils.js';

class AutoSizingCanvas {
  constructor(parent, id, aspect) {
    this.parent = parent;
    this.id = id;
    this.aspect = aspect;
    this.canvas;
    this.ctx;
    this.width;
    this.height;
    this.resizeObserver;
  }

  init()  {
    this.parent.innerHTML = `<canvas id=${this.id}></canvas>`;
    this.canvas = document.querySelector(`#${this.id}`);
    this.ctx = this.canvas.getContext("2d");
    this.resizeObserver = new ResizeObserver(debounce(entries => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          this.setCanvasSize();
          this.render();
        }
      }
    }, 100));
    this.resizeObserver.observe(this.parent);
  }

  setCanvasSize() {
    this.width = this.parent.offsetWidth;
    this.height = Math.floor(this.width * this.aspect);
    this.parent.style.height=`${this.height}px`; // fixes empty space, find out why?
    this.canvas.setAttribute('width', this.width);
    this.canvas.setAttribute('height', this.height);
  }

  render() {
    this.ctx.fillStyle = '#353';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = '#a33';
    this.ctx.fillRect(0, 0, this.width, 4);
    this.ctx.fillRect(0, 0, 4, this.height);
    this.ctx.fillRect(0, this.height-4, this.width, this.height);
    this.ctx.fillRect(this.width-4, 0, this.width, this.height);
  }
}


export { AutoSizingCanvas };