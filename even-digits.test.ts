import { arrAllDigitsEven } from "./event-digits";

// Green bar pattern: known ways to get to green

// one to many: start with a single item before moving to a colletion
// obvious: go ahead and write the obvious implementation
// backout: undo to get back to green
// learning test: try writing an implemention directly in a test to see
//                if it will work

describe('one digit', () => {
    test.each([
        { input: 0, expected: true },
        { input: 1, expected: false },
        { input: 2, expected: true },
        { input: 3, expected: false  }
        
    ])('input $input, expected expected ', ({ input, expected }) => {
        expect(arrAllDigitsEven(input)).toBe(expected);
    });
});

describe('two', () => {
    test.each([
        { input: 10, expected: false },
        { input: 11, expected: false },
        { input: 98, expected: false },
        { input: 88, expected: true }
        
    ])('input $input, expected expected ', ({ input, expected }) => {
        expect(arrAllDigitsEven(input)).toBe(expected);
    });
});

describe('many digits', () => {
    test.each([
        { input: 245, expected: false },
        { input: 246, expected: true },
        { input: 3280, expected: false },
        { input: 4284, expected: true }
        
    ])('input $input, expected expected ', ({ input, expected }) => {
        expect(arrAllDigitsEven(input)).toBe(expected);
    });
});
