const assert = require('chai').assert;
const expect = require('chai').expect;
const MaximumHeap = require('../MaximumHeap');
let heap = new MaximumHeap();

describe('MaximumHeap', function() {
  it('should return [9]', function() {
    heap.insert(9);
    assert.deepEqual(heap.array, [9]);
    expect(heap.array).to.eql([9]);
  });
});
describe('MaximumHeap', function() {
  it('alo', function() {

  });
});
