const { TestWatcher } = require("jest");

test('add 2 + 3 to equal 5', () => {
    expect(2 + 3).toBe(5);
})

describe('Student API', () => {
    test('GET students --> returns status code 201', () => {});

    test('POST student --> create student', () => {});

    test('UPDATE student --> update student major', () => {});

    test('DELETE student --> delete student record', () => {});
})