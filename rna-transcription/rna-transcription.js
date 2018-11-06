export const toRna = dna => {
  if (dna.length === 0) return '';
  if (/[^CGAT]/gi.test(dna)) throw new Error("Invalid input DNA.");
  return [...dna]
    .map(char => {
      switch (char) {
        case "C":
          return "G";
        case "G":
          return "C";
        case "A":
          return "U";
        case "T":
          return "A";
      }
    })
    .join("");
};

// console.log(/[^CGAT]/gi.test('XXX'));
