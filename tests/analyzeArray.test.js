import { analyzeArray } from "../src/analyzeArray";

test("Analyze '[1,8,3,4,2,6]' to equal 'object == {average: 4, min: 1, max: 8, length: 6};'", () => {
  const array = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(array)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze '[2,9,5,11,4]' to equal 'object == {average: 6.2, min: 2, max: 11, length: 5};'", () => {
  const array = [2, 9, 5, 11, 4];
  expect(analyzeArray(array)).toEqual({
    average: 6.2,
    min: 2,
    max: 11,
    length: 5,
  });
});

test("Analyze '[1,6,0,-11,-4]' to equal 'object == {average: -1.6, min: -11, max: 6, length: 5};'", () => {
  const array = [1, 6, 0, -11, -4];
  expect(analyzeArray(array)).toEqual({
    average: -1.6,
    min: -11,
    max: 6,
    length: 5,
  });
});

test("All values should be 0 if array is empty", () => {
  const array = [];
  expect(analyzeArray(array)).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});
