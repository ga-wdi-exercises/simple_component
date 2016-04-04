function Component() {
  this.domElement = null;

  this.initialize = function(container) {
    this.domElement = $('<div class="status"></div>');
    container.append(this.domElement);
    this.statusMessage = "";
  };

  this.render = function(statusText) {
    this.statusMessage = statusText;

    var templateString =
      "<p>The current status is: " +
      "<span class='message'></span>.</p>" +
      "<button class='alert'>Alert it!</button>";

    this.domElement.html(templateString);
    $(".message").text(statusText);

    var button = $("button");
    button.on("click", this.displayAlert);
  };

  this.displayAlert = function() {
    alert(this.statusMessage);
  };
}

var comp = new Component();
comp.initialize($("#comp_demo"));
comp.render("This is a test!");

var comp2 = new Component();
comp2.initialize($("#comp_demo2"));
comp2.render("This is a another test!");
