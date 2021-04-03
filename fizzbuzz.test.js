const {fizzBuzz} = require ('./fizzbuzz');

test('6 modulous 3 will give fizz', () =>{
    expect(fizzBuzz(6)).toBe('fizz');
})

test('10 modulous 5 will give buzz', () =>{
    expect(fizzBuzz(10)).toBe('buzz');
})

test('15 modulous 3 and 5 will give fizzbuzz', () =>{
    expect(fizzBuzz(15)).toBe('fizzbuzz');
})
