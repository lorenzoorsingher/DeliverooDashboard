/**
 * Represents a position in the grid
 *
 * @param {number} x x coordinate
 * @param {number} y y coordinate
 */
export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Checks if two positions are equal
   *
   * @param {Position} other other position
   *
   * @returns {boolean} true if the positions are equal, false otherwise
   */
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }

  /**
   * Sets the position to the values of another position
   *
   * @param {Position} pos other position
   */
  set(pos) {
    this.x = pos.x;
    this.y = pos.y;
  }

  /**
   * Returns a string representation of a position
   *
   * @param {Position} pos position to serialize
   *
   * @returns {string} string representation of the position
   */
  static serialize(pos) {
    return `${pos.x}-${pos.y}`;
  }
}
