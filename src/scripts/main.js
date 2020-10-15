
import { createPlan } from './plan.js';

import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSunflower } from './seeds/sunflower.js';
import { createSoybean } from './seeds/soybean.js';
import { createWheat } from './seeds/wheat.js';

import { addPlant } from "./field.js";
import { usePlants } from "./field.js";

import {  plantSeeds  } from './tractor.js';

const yearlyPlan = createPlan();

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const sunflowerSeed = createSunflower();
const soybeanSeed = createSoybean();
const wheatSeed = createWheat();


console.log("Welcome to the main module")

console.log(yearlyPlan)

console.log(asparagusSeed)
console.log(potatoSeed)
console.log(cornSeed)
console.log(sunflowerSeed)
console.log(soybeanSeed)
console.log(wheatSeed)


const plant = addPlant(asparagusSeed)
const usePlant = usePlants(plant)

console.log(usePlant)

console.log(plantSeeds(usePlant))