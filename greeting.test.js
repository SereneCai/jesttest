const {greet} = require('./greeting')

test('should show hello John', ()=>{
    expect(greet('John')).toBe('Hello, John');
})

test('should show hello Dean', ()=>{
    expect(greet('Dean')).toBe('Hello, Dean');
})