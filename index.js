// Code your solution here
function findMatching(drivers, string) {
    const lowercaseString = string.toLowerCase();
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseString);
    return matchingDrivers;
  }
  function fuzzyMatch(drivers, query) {
    let matchedDrivers = [];
  
    for (let i = 0; i < drivers.length; i++) {
      if (drivers[i].startsWith(query)) {
        matchedDrivers.push(drivers[i]);
      }
    }
  
    return matchedDrivers;
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }