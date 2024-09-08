import { Position } from "./position.js";

/**
 * Represents a tile in the field
 *
 */
export class Tile {
  constructor(position, walk, delivery) {
    this.position = position;
    this.walkable = walk;
    this.delivery = delivery;
    this.id = Position.serialize(this.position);
  }
}
