/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() { return this._range; }

  set range(newRange) {
    if (typeof newRange !== 'string') {
      throw TypeError('Range must be a string');
    }

    this._range = newRange;
  }

  cloneCar(...args) { return new super.constructor(...args); }
}
