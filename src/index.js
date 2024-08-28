function towelSort(matrix) {
  let arr = [];
  if(matrix === undefined) return [];
  for (let i = 0; i < matrix.length; i++) {
    i % 2 == 0 ? arr.push(...matrix[i]) : arr.push(...matrix[i].reverse());
  }
  return arr;
}
module.exports = towelSort;
