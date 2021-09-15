function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return "This one is on me!";
  }
  else if (distance >= 1999 && distance < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else{
    return "No can do.";
  }
}
function ternaryCheckCity(location){
  return (location === 'NYC' ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tipSize){
  switch (tipSize){
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default: 
      return "Bye."
  } 
}
