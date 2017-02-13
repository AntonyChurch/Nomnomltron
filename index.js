var nomnoml = require("nomnoml");

var canvas = document.getElementById("target-canvas");
var text = document.getElementById("text");
text.value = '[nomnoml] is -> [awesome]';

nomnoml.draw(canvas, text.value);

var updateCanvas = function(){
    nomnoml.draw(canvas, text.value);
};