class Beer {
  static verse(count) {
    if (count > 1) {
      return this.sample
        .replace(/\%/g, `${count} bottles`)
        .replace(/\$/g, `${--count} bottles`);
    } else if (count === 1) {
      return this.one;
    } else {
      return this.empty;
    }
  }
  static sing(start = 99, end = 0) {
    let result = "";
    do {
      if (start > 1) {
        result += this.sample
          .replace(/\%/g, `${start} bottles`)
            .replace(/\$/g, start - 1 !== 1 ? `${start - 1} bottles` : `${start - 1} bottle`);
      } else if (start === 1) {
        result += this.one;
      } else {
        result += this.empty;
      }
      --start
        if (start >= end) result += '\n';
    } while (start >= end);
    return result;
  }
}
Beer.sample = `% of beer on the wall, % of beer.
Take one down and pass it around, $ of beer on the wall.
`;
Beer.empty = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
Beer.one = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`;
export default Beer;
