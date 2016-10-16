// andrew.js
// ========

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    return "Connected"
  },
  bar: function () {
    // whatever
  }
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE
var zemba = function () {
}