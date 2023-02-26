const Utils = {
  calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }

    if (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }

    if (type === 'DIVIDE') {
      const res = Math.round(b);
      if (res == 0) {
        return 'Error';
      }
      return Math.round(a) / res;
    }
  }
}

module.exports = Utils;
