
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if ((matrix == undefined)||(matrix.length == 0)) return [];
  let result = matrix[0];
  for( let i = 1; i < matrix.length; i++){
    let line = matrix[i];
    if (i & 1) line = line.reverse();
    result = result.concat(line);
  }
  return result;
}
