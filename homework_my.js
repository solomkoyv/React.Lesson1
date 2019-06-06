const employers = [
  "Alex",
  "",
  "ludmila",
  "Viktor",
  "",
  "oleg",
  "iNna",
  "Ivan",
  "Alex",
  "Olga",
  " Ann"
];

const employersNames = employers
  .filter(name => name.length)
  .map(name => name.toLowerCase().trim());

const sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};

function calcCash(own = 0, ...args) {
  return args.reduce((res, x) => res + x, own);
}

let money = calcCash(undefined, ...sponsors.cash);

function makeBusiness(owner, director = "Victor", cash, emp) {
  const sumSponsors = [...sponsors.eu, ...sponsors.rus, "unexpected sponsor"];
  console.log(
    `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.
    `
  );
}
makeBusiness(...["Sam", undefined, money, employersNames]);
