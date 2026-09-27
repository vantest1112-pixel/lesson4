const crewlist=[
    {Name:"Mario",score:1000},
    {Name:"Luigi",score:900},
    {Name:"Peach",score:850},
    {Name:"Yosi",score:800},
    {Name:"Phone",score:500},
]
// in bang xep hang: sort diem giam dan, in bang ket qua, gan huy chuong cho top 3
const printbountyleaderboard = function (crewlist) {
  const sorted = crewlist.slice().sort((a, b) => b.score - a.score);
  const huychuong = ["🥇", "🥈", "🥉"];
  const rows = sorted.map((p, i) => {
    const huy = huychuong[i] || "  "; 
    return `${huy} ${i + 1}. ${p.Name} - ${p.score} pts`; 
  });
  rows.forEach(row => console.log(row));
};
printbountyleaderboard(crewlist);

