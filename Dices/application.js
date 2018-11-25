// $(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
//   // Event Listener
//   $('#roller button.add').on('click', function() { // Controlador
//     $('.dice').append('<div class="die">0</div>'); // Vista
//   });
//
//   // Event listener
//   $('#roller button.roll').on('click', function() { // Controlador
//     $('.die').each(function(index, dieHtml) { // Controlador
//       var value = Math.floor((Math.random()*6)+1); // Model
//       $(dieHtml).text(value); // Vista
//     });
//   });
// });

function Controller(model, view) {
  this.model = model
  this.view = view
}

Controller.prototype.plantEventListeners = function(addDieHandler, rollAllDicesHandler) {
  $('#roller button.add').on('click', addDieHandler);
  $('#roller button.roll').on('click', rollAllDicesHandler.bind(this));
}

Controller.prototype.init = function() {
  this.plantEventListeners(this.view.addDieToHtml, this.rollAllDices)
}

Controller.prototype.rollAllDices = function() {
  var controller = this
  $('.die').each(function(index, dieHtml) { // Controlador
    controller.model.roll() // Model
    controller.view.changeDieValue(dieHtml, controller.model.value) // Vista
  });
}

function Die(sides) {
  this.sides = sides
  this.value = 1
}

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*this.sides)+1);
}

function View() {

}

View.prototype.addDieToHtml = function() {
  $('.dice').append('<div class="die">0</div>');
}

View.prototype.changeDieValue = function(dieHtml, value) {
  $(dieHtml).text(value);
}

var game = new Controller(new Die(20), new View())
game.init()
