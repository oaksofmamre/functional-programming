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

const ages = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

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
