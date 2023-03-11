/**
 * Builds
 */
const raiderExpand = {
  buildOrder: ["Worker",
               "Worker",
               "House",
               "Worker",
               "Barracks",
               "Worker",
               "Raider",
               "Worker",
               "Raider",
               "Castle",
               "Raider"],
  faction: "Rax"
}


const fastExpand2Den = {
  buildOrder: ["Worker",
               "Worker",
               "House",
               "Worker",
               "Worker",
               "Castle",
               "Wolves Den",
               "Worker",
               "Wolves Den"],
  faction: "Beast"
}


const archerExpand = {
  buildOrder: ["Worker",
               "House",
               "Worker",
               "Barracks",
               "Worker",
               "Worker",
               "Archer",
               "Archer",
               "Castle",
               "Archer"],
  faction: "Rax"
}


const allBuilds = [raiderExpand, fastExpand2Den, archerExpand]

function getRandomBuildOrder() {
  return allBuilds[Math.floor(Math.random()*allBuilds.length)];
}