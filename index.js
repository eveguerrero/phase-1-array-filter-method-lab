// Code your solution here
function findMatching(names, driver){
    
  return  names.filter(name => name.toLowerCase() === driver.toLowerCase() )
     
   }
//returns all f=drivers whose name begins with the letters;
function fuzzyMatch(drivers, letters){
return drivers.filter(driver => driver.slice(0,2) === letters)
}

function matchName(driverArray, string){
    return driverArray.filter(driver => driver.name === string);
}



