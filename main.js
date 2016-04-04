function Component() {
  this.domElement = null;

  this.initialize = function(container) {
    // create a dom element
    this.domElement = $('<div>');
    // attach it
    container.append(this.domElement);
  };

  this.render = function(statusText) {
    // update the dom element
    this.domElement.html(statusText);
  };
}

var comp = new Component();
comp.initialize($("#comp_demo"));
comp.render("This is a test!");
// component.render("This is a another test!");
