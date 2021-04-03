const {sum, subtract} = require('./sum');



test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);

});


test('null returns undefined', ()=> {
    expect(sum()).toBe(NaN);
})

test('2 minus 1 is 1', ()=> {
    expect(subtract(2,1)).toBe(1);
})


