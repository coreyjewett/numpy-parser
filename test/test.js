const assert = require('assert');
const fs = require('fs')
const NumpyParser = require('../src/main.js');

describe('NumpyParser', function() {

  describe('#fromArrayBuffer())', function() {

    it('should return an array', function() {
      const buffer = fs.readFileSync('./test/data/array_uint8.npy'); // no encoding
      const aBuffer = new Uint8Array(buffer).buffer; // only needed for node conversion
      const typedArray = NumpyParser.fromArrayBuffer(aBuffer);
      // console.log(typedArray);
      assert.deepEqual(Object.keys(typedArray), ['shape', 'data']);
      assert.equal(typedArray.data.length, 10);
    });

  });

});
