// Code your solution here

function findMatching(drivers, names) {
    return drivers.filter(driverName => driverName.toLowerCase() === names.toLowerCase() )
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driverName => driverName.slice(0,2) === letters) 
}

function matchName(drivers, names) {
    return drivers.filter(driverName => driverName.name === names)
}