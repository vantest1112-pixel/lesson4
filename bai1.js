
const pirates = [
  { name: "luffy", bounty: 3000000000, strength: 480 },
  { name: "zoro", bounty: 1111000000, strength: 420 },
  { name: "kaido", bounty: 4611100000, strength: 950 },
  { name: "big mom", bounty: 4388000000, strength: 880 },
  { name: "shanks", bounty: 4048900000, strength: 900 }
];

// map: tao mang moi voi name uppercase, bounty x2, strength x1.5
// filter: loc strength > 500
const upgradecrew = function (pirates) {

  const newpirates = pirates.map(p => ({
  name: p.name.toUpperCase(),
  bounty: p.bounty * 2,
  strength: p.strength * 1.5
}));

  const monstertriocandidates = newpirates.filter(p => p.strength > 500);

  return { newpirates, monstertriocandidates };
};

const { newpirates, monstertriocandidates } = upgradecrew(pirates);

console.log("newpirates:", newpirates);
console.log("monstertriocandidates:", monstertriocandidates);

// cach khac: filter TRUOC map (loc tren strength GOC > 600) => dung "monster trio": kaido, big mom, shanks
// const monstertriocandidates = pirates
//   .filter(p => p.strength > 600)
//   .map(p => ({
//     name: p.name.toUpperCase(),
//     bounty: p.bounty * 2,
//     strength: p.strength * 1.5
//   }));



