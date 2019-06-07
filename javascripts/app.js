// Rover Object Goes Here

var rover = {
  direction: "North",
  xposition: 4,
  yposition: 4,
  travelLog: []
}

var command = "";

// ======================

// ======================

console.log("___________________MARS ROVER___________________");
console.log("The Rover is facing North at position [4,4] by default...");
console.log("Input a command string using the Command(); function, with an argument of a string composed by: (f)orward, (b)ackward, (l)eft or (r)ight.");

function Command(command){
  
  
  for (var i = 0; i < command.length; i++ ) {
    command = command.toLowerCase();
    switch (command[i]) {

      case "f": 
      moveForward(rover);
      rover.travelLog.push(rover.xposition, rover.yposition);
      break;

      case "b": 
      moveBackward(rover);
      rover.travelLog.push(rover.xposition, rover.yposition);
      break;

      case "l": 
      turnLeft(rover);
      break;
      
      case "r": 
      turnRight(rover);
      break;

      default:
      console.log("The command " + command[i] + " is not recognized by the Rover.");
      break;
;       
    }
  }

  console.log("The Rover's travel log is: " + rover.travelLog);

}


function turnLeft(rover){

  switch (rover.direction){

    case "North":
      rover.direction = "West";
    case "West":
      rover.direction = "West";
    case "South":
      rover.direction = "South";
    case "East":
      rover.direction = "East";

  }
  
  console.log("turnLeft was called! The Rover is now facing " + rover.direction);
 
}

function turnRight(rover){

  switch (rover.direction){

    case "North":
      rover.direction = "East";
    case "East":
      rover.direction = "East";
    case "South":
      rover.direction = "South";
    case "West":
      rover.direction = "West";

  }
  console.log("turnRight was called! The Rover is now facing " + rover.direction);
}

function moveForward(rover){

switch (rover.direction) {
  
  case "North":
    if (rover.yposition != 0) {
    rover.yposition = rover.yposition - 1;
    return console.log("moveForward was called! The Rover is now in position: [" +rover.xposition + "," + rover.yposition + "]");
    }
    else
    console.log("The Rover is at the Northern edge of the map! You can't go forward.")
    break;

  case "East":
    if (rover.xposition < 9){
    rover.xposition = rover.xposition + 1;
    return console.log("moveForward was called! The Rover is now in position: [" +rover.xposition + "," + rover.yposition + "]");
    }
    else
    console.log("The Rover is at the Eastern edge of the map! You can't go forward.")
    break;

  case "South":
      if (rover.yposition < 9) {
      rover.yposition = rover.yposition + 1;
      return console.log("moveForward was called! The Rover is now in position: [" + rover.xposition + "," + rover.yposition + "]");
      }
      else
      console.log("The Rover is at the Southern edge of the map! You can't go forward.")
      break;

  case "West":
      if (rover.xposition != 0) {
      rover.xposition = rover.xposition - 1;
      return console.log("moveForward was called! The Rover is now in position: [" + rover.xposition + "," + rover.yposition + "]");
      }
      else
      console.log("The Rover is at the Western edge of the map! You can't go forward.")
      break;


}
}


function moveBackward(rover){

  switch (rover.direction) {
    
    case "North":
      if (rover.yposition < 9) {
      rover.yposition = rover.yposition + 1;
      return console.log("moveBackward was called! The Rover is now in position: [" +rover.xposition + "," + rover.yposition + "]");
      }
      else
      console.log("The Rover is at the Northern edge of the map! You can't go forward.")
      break;
  
    case "East":
      if (rover.xposition != 9){
      rover.xposition = rover.xposition - 1;
      return console.log("moveBackward was called! The Rover is now in position: [" +rover.xposition + "," + rover.yposition + "]");
      }
      else
      console.log("The Rover is at the Eastern edge of the map! You can't go forward.")
      break;
  
    case "South":
      if (rover.yposition != 0) {
      rover.yposition = rover.yposition - 1;
      return console.log("moveBackward was called! The Rover is now in position: [" +rover.xposition + "," + rover.yposition + "]");
      }
      else
      console.log("The Rover is at the Southern edge of the map! You can't go forward.")
      break;
  
    case "West":
      if (rover.xposition < 9) {
      rover.xposition = rover.xposition + 1;
      return console.log("moveBackward was called! The Rover is now in position: [" +rover.xposition + "," + rover.yposition + "]");
      }
      else
      console.log("The Rover is at the Western edge of the map! You can't go forward.")
      break;
  }
  }



