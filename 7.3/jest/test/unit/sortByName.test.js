const { sortByName } = require('./sortByName.js');

describe("Books names test suit", () => {
 it("Books names should be sorted in ascending order", () => {
 expect(sortByName([
 "Гарри Поттер",
 "Властелин Колец",
 "Волшебник изумрудного города"
 ])).toEqual([
 "Властелин Колец",
 "Волшебник изумрудного города",
 "Гарри Поттер"
 ]);
 });
});

describe('sortByName function', () => {
 test('sorts array of strings alphabetically', () => {
 const input = ['banana', 'Apple', 'cherry'];
 const expected = ['Apple', 'banana', 'cherry'];
 expect(sortByName(input)).toEqual(expected);
 });

 test('handles case-insensitive sorting', () => {
 const input = ['banana', 'apple', 'Cherry'];
 const expected = ['apple', 'banana', 'Cherry'];
 expect(sortByName(input)).toEqual(expected);
 });

 test('handles empty strings', () => {
 const input = ['banana', '', 'cherry'];
 const expected = ['', 'banana', 'cherry'];
 expect(sortByName(input)).toEqual(expected);
 });

 test('handles duplicate values', () => {
 const input = ['banana', 'apple', 'banana'];
 const expected = ['apple', 'banana', 'banana'];
 expect(sortByName(input)).toEqual(expected);
 });

 test('handles single element array', () => {
 const input = ['single'];
 const expected = ['single'];
 expect(sortByName(input)).toEqual(expected);
 });

 test('handles empty array', () => {
 const input = [];
 const expected = [];
 expect(sortByName(input)).toEqual(expected);
 });

 test('does not modify original array', () => {
 const input = ['banana', 'Apple', 'cherry'];
 const original = ['banana', 'Apple', 'cherry'];
 sortByName(input);
 expect(input).toEqual(original);
 });
});
