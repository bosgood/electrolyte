var path = require('canonical-path');


function UsingContainer(c, prefix) {
  this._c = c;
  this._prefix = prefix;
}

UsingContainer.prototype.create = function(id) {
  // TODO: handle relative paths, pass parent id in
  return this._c.create(id);
}

UsingContainer.prototype.specs = function() {
  var specs = this._c.specs();
  // TODO: Filter these to only those that are within the prefix.  Make this
  //       filtering optional, and by default not filtered.
  return specs;
}


module.exports = UsingContainer;
