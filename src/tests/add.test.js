const add = (a,b) => a+b;

test('Shhould add 2 numbers', () => {
    const result = add(2,2);
    expect(result).toBe(4);
})