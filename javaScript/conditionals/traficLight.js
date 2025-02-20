function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    color = color.toLowerCase();
    if(color==="red"){
      return "stop"
    }else if(color === "yellow"){
      return "Slow Down"
    }else if(color === "green"){
      return "Go"
    }else {
      return "Invalid Color"
    }
  }

  
console.log(trafficLightAction("Red"))