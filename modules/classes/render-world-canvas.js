import { AutoSizingCanvas } from './auto-sizing-canvas.js';

class RenderWorldCanvas extends AutoSizingCanvas {
  constructor(parent, id, aspect, world, origin, scale) {
    super(parent, id, aspect);
    this.world = world;
    this. origin = origin;
    this.scale = scale;
  }

  render() {
    this.ctx.fillStyle = '#353';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = '#a33';
    this.ctx.fillRect(0, 0, this.width, 4);
    this.ctx.fillRect(0, 0, 4, this.height);
    this.ctx.fillRect(0, this.height-4, this.width, this.height);
    this.ctx.fillRect(this.width-4, 0, this.width, this.height);

    // 
  }
}

export { RenderWorldCanvas };