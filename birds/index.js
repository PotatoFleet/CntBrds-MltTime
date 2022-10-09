// O(N) Time Complexity
// O(N) Space Complexity
const maxminBirdFreq = (birds) => {
  // Exception case
  if (birds.length === 0) return [];
  // Count occurences
  const occ = {};
  for (const bird of birds) {
    if (occ[bird] === undefined) occ[bird] = 0;
    occ[bird]++;
  }
  // Get max and min
  let maxval = Number.MIN_VALUE;
  let minval = Number.MAX_VALUE;
  let max = null;
  let min = null;
  for (const bird in occ) {
    if (occ[bird] > maxval) {
      maxval = occ[bird];
      max = bird;
    }
    if (occ[bird] < minval) {
      minval = occ[bird];
      min = bird;
    }
  }
  /*
  JS Specific Approach for Finding Min and Max
  const max = Object.keys(occ).reduce((a, b) => (occ[a] >= occ[b] ? a : b));
  const min = Object.keys(occ).reduce((a, b) => (occ[a] <= occ[b] ? a : b));
  */
  return [parseInt(max), parseInt(min)];
};
