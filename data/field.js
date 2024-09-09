/**
 * Represents the game field where the agents move
 * and contains the functions to interact with it
 *
 */
export class Field {
  constructor() {
    this.map_init = false;
  }

  init(width, height, tiles) {
    this.width = width;
    this.height = height;
    this.field = [];

    // Initialize the field
    for (let i = 0; i < height; i++) {
      this.field[i] = [];
      for (let j = 0; j < width; j++) {
        let found = false;
        let delivery = false;
        for (const t of tiles) {
          if (t.x == j && t.y == i) {
            found = true;
            delivery = t.delivery;
            break;
          }
        }
        this.field[i][j] = { x: j, y: i, delivery: delivery, walkable: found };
      }
    }
  }

  /**
   * Returns a synthetic representation of the map
   * used by the dashboard
   *
   * @returns {Array} array of the tiles
   */
  getMap() {
    let tiles = [];
    for (let i = 0; i < this.height; i++) {
      tiles[i] = [];
      for (let j = 0; j < this.width; j++) {
        let cell = { type: "X" };
        if (this.field[i][j].walkable) {
          cell["type"] = "W";
        }
        if (this.field[i][j].delivery) {
          cell["type"] = "D";
        }
        tiles[i][j] = cell;
      }
    }
    return tiles;
  }
}
