const {User} = require('./user');

test('name is dirk, email is dirk@email.com, age is 18', () =>{
    let userone = new User('dirk', 'dirk@email.com', '18');
    expect(userone.name).toBe('dirk');
})

test('name is dirk, email is dirk@email.com, age is 18', () =>{
    let userone = new User('dirk', 'dirk@email.com', '18');
    expect(userone.login()).toBe('welcome dirk');
})

test('name is eric, email is eric@email.com, age is 20', () =>{
    let usertwo = new User('eric', 'eric@email.com', '20');
    expect(usertwo.login()).toBe('welcome eric');
})