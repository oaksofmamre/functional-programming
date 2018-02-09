"use strict";

const companies = [
  { name: "Amazon", category: "retail", start: 1994, founder: "Bezos" },
  {
    name: "Microsoft",
    category: "software",
    start: 1975,
    founder: "Gates"
  },
  { name: "Apple", category: "technology", start: 1977, founder: "Jobs" },
  { name: "Next", category: "technology", start: 1977, founder: "Jobs" },
  { name: "Be", category: "technology", start: 1977, founder: "Jobs" }
];

const ages = [55, 2, 32, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

//normal for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//forEach, ES5
companies.forEach(function(company) {
  console.log(company);
});

//forEach, ES6
companies.forEach(company => console.log(company));

//filter with for loop
let canDrive = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    canDrive.push(ages[i]);
  }
}
console.log(`drivers1: ${canDrive}`);

// filter(), ES5
const canDrive2 = ages.filter(function(age) {
  if (age >= 18) {
    return true;
  }
});
console.log(`drivers2: ${canDrive2}`);

// filter(), ES6
const canDrive3 = ages.filter(age => {
  if (age >= 18) return true;
});
console.log(`drivers3: ${canDrive3}`);

// filter(), ES6 v2
const canDrive4 = ages.filter(age => {
  return age >= 18;
});
console.log(`drivers4: ${canDrive4}`);

//filter(), ES6 v3
const canDrive5 = ages.filter(age => age >= 18);
console.log(`drivers5: ${canDrive5}`);

//additional filtering
const oldies = companies.filter(company => company.start < 1980);
console.log(oldies);

const retail = companies.filter(company => company.category === "retail");
console.log(retail);

const jobs = companies.filter(company => company.founder === "Jobs");
console.log(jobs);

const years = companies.filter(company => company.start > 1980);
console.log(years);

//
// map
//
const allNames = companies.map(function(company) {
  return company.name;
});
console.log(allNames);

const allNames2 = companies.map(company => {
  return company.name;
});
console.log(allNames2);

const allNames3 = companies.map(company => company.name + " - processed");
console.log(allNames3);

const allFounders = companies.map(
  something => something.founder + " - processed"
);
console.log(allFounders);

const simpleCount = companies.map(company => 3);
console.log(simpleCount);

const mapItAllOut = companies.map(
  company =>
    `${company.name} started in ${company.start} by ${
      company.founder
    } in this space: ${company.category}`
);
console.log(mapItAllOut);

const chainMap = ages
  .map(age => age * 10)
  .filter(something => something > 100)
  .map(something => something + " - procesed");
console.log(chainMap);

//
// sort
//
const sortStart = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
console.log(sortStart);

const sortCoAlpha = companies.sort((c1, c2) => (c1.name > c2.name ? 1 : -1));
console.log(sortCoAlpha);

const sortCoAlphaDesc = companies.sort(
  (c1, c2) => (c1.name < c2.name ? 1 : -1)
);
console.log(sortCoAlphaDesc);

const sortAges = ages.sort((a, b) => (a - b ? 1 : -1));
console.log(sortAges);

const sortAgesDesc = ages.sort((a, b) => (b - a ? 1 : -1));
console.log(sortAgesDesc);

//
//reduce
//
const sumAge = ages.reduce(function(total, age) {
  return total + age;
}, 0);
console.log(`reduced to: ${sumAge}`);

const sumAge2 = ages.reduce((total, age) => total + age, 0);
console.log(`reduced2 to: ${sumAge2}`);

console.log("kitchenSink0: " + ages);
const kitchenSink = ages
  .map(something => something + 1)
  .filter(somethingelse => somethingelse > 30)
  .sort((a, b) => (a > b ? 1 : -1))
  .reduce((a, b) => a + b, 0);
console.log("kitchenSink now: " + kitchenSink);
