var nomnoml = require("nomnoml");
var app = require('electron').remote; 
var dialog = app.dialog;
var fs = require('fs');

var canvas = document.getElementById("target-canvas");
var text = document.getElementById("text");
text.value = '[nomnoml] is -> [awesome]';

nomnoml.draw(canvas, text.value);

var updateCanvas = function(){
    nomnoml.draw(canvas, text.value);
};

var saveFile = function(){
    dialog.showSaveDialog(function (fileName) {
       if (fileName === undefined){
            console.log("You didn't save the file");
            return;
       }
       // fileName is a string that contains the path and filename created in the save file dialog.  
       fs.writeFile(fileName, text.value, function (err) {
           if(err){
               alert("An error ocurred creating the file "+ err.message)
           }
                        
           alert("The file has been succesfully saved");
       });
    }); 
};

var openFile = function(){
    dialog.showOpenDialog(function (fileName) {
        // fileNames is an array that contains all the selected
       if(fileName === undefined){
            console.log("No file selected");
       }else{
            readFile(fileName[0]);
       }
    });
};

var readFile =function(filepath){
    fs.readFile(filepath, 'utf-8', function (err, data) {
          if(err){
              alert("An error ocurred reading the file :" + err.message);
              return;
          }
          // Change how to handle the file content
          text.value = data;
          updateCanvas();
    });
};