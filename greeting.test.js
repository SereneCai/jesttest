const {greet} = require('./greeting')

test('should show hello John', ()=>{
    expect(greet('John')).toBe('Hello, John');
})

test('should show hello Dean', ()=>{
    expect(greet('Dean')).toBe('Hello, Dean');
})

//testing null

test('should show hello my friend', ()=>{
    expect(greet('')).toBe('Hello, my friend.');
})

//testing uppercase

test('should show HELLO WILLIAM!!!', ()=>{
    expect(greet('WILLIAM')).toBe('HELLO, WILLIAM!');
})

//testing 2 person
test('should show Hello Jane and Ben', ()=>{
    expect(greet(['Jane', 'Ben'])).toBe('Hello Jane and Ben');
})

//testing 3
test('should show Hello Jane and Ben', ()=>{
    expect(greet(['Jane', 'Ben', 'Grace'])).toBe('Hello Jane, Ben and Grace');
})


