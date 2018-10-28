const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');

describe('sumOfOther', () => {
  it('easy 1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
    });
    it('> 9 and < 0', () => {
    const result = sumOfOther([72, 85, 4, 100]);
    assert.deepEqual(result, []);
    });
    it('different elements', () => {
    const result = sumOfOther([[], 3, "ddd", 1]);
    assert.deepEqual(result, []);
    });
    it('string', () => {
    const result = sumOfOther([]);
    assert.deepEqual(result, []);
    });
    it('easy 2', () => {
      const result = sumOfOther([7, 1, 8, 9]);
      assert.deepEqual(result, [18, 24, 17, 16]);
      });
});