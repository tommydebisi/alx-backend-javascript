function calculateNumber(type, a, b) {
  if (type === 'SUM') { return Math.ceil(a + b); }

  if (type === 'SUBTRACT') { return Math.ceil(a - b); }
  if (type === 'DIVIDE') {
    const res = Math.ceil(b);
    if (res == 0) {
      return 'Error';
    }
    return Number((a / b).toFixed(1));
  }
}

module.exports = calculateNumber;
