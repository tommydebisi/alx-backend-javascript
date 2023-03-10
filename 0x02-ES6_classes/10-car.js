/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() { return this._brand; }

  set brand(newBrand) {
    if (typeof newBrand !== 'string' && !(typeof newBrand === 'undefined')) {
      throw TypeError('Brand must be a string');
    }

    this._brand = newBrand;
  }

  get motor() { return this._motor; }

  set motor(newMotor) {
    if (typeof newMotor !== 'string' && !(typeof newMotor === 'undefined')) {
      throw TypeError('Motor must be a string');
    }

    this._motor = newMotor;
  }

  get color() { return this._color; }

  set color(newColor) {
    if (typeof newColor !== 'string' && !(typeof newColor === 'undefined')) {
      throw TypeError('Color must be a string');
    }

    this._color = newColor;
  }

  cloneCar(...args) { return new this.constructor(...args); }
}
