const primeFactors = num => {
  if (num === 1) return [];
  let index = 2;
  const arr = [];
  do {
    if (num % index === 0) {
      arr.push(index);
      num /= index;
      index = 2;
    } else {
      index++;
    }
  } while (num > 1);
  return arr;
};
export { primeFactors }