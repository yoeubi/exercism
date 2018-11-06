class Matrix {
  constructor(str) {
    this.rows = str.split("\n").map(line => [...line.split(" ").map(item => parseInt(item))]);
    const arr = [];
    for (let i = 0; i < this.rows.length; i++) {
      for (let j = 0; j < this.rows[i].length; j++) {
        arr[j] = arr[j] || [];
        arr[j][i] = this.rows[i][j];
      }
    }
    this.columns = arr;
  }
}
export default Matrix;
