"use strict";

var input = "";
var toDoList = [];

while (input != "quit") {
  input = prompt('Enter "new" to add an entry, "list" to show entries, "delete to remove an entry, or "quit" to exit.').toLowerCase();

  if (input === "new") {
    toDoList.push(prompt("What would you like to add to your list?"));
    console.log("    ***    ");

    for (var i = 0; i < toDoList.length; i++) {
      console.log("".concat(i, ": ").concat(toDoList[i]));
    }

    console.log("    ***    ");
  } else if (input === "list") {
    console.log("    ***    ");

    for (var _i = 0; _i < toDoList.length; _i++) {
      console.log("".concat(_i, ": ").concat(toDoList[_i]));
    }

    console.log("    ***    ");
  } else if (input === "delete") {
    var removeIndex = prompt("Type the index of the entry you want to delete. Leave empty to cancel");

    if (removeIndex < 0 || removeIndex > toDoList.length || removeIndex === "") {
      console.log("Cancelled.");
    } else {
      toDoList.splice(removeIndex, 1);
      console.log("    ***    ");

      for (var _i2 = 0; _i2 < toDoList.length; _i2++) {
        console.log("".concat(_i2, ": ").concat(toDoList[_i2]));
      }

      console.log("    ***    ");
    }
  } else {
    console.log("Not a valid response");
  }
}