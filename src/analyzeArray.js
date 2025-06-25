export function analyzeArray(array) {
  const object = {};

  if (array.length === 0) {
    object.average = 0;
    object.min = 0;
    object.max = 0;
    object.length = 0;

    return object;
  }

  let sum = 0;

  for (let num of array) {
    sum += num;
  }

  object.average = sum / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;

  return object;
}
