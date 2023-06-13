import { StringCalculator } from "./string-calculator";

describe('string-calculator', () => {

    describe('add', () => {
        test('given empty string should return 0', () => {
            // Arrange
            const input = ''
            const expected = 0
            const sut = new StringCalculator();
            // Act
            const actual = sut.add(input);
            // Assert
            expect(actual).toBe(expected);
        });

        describe('single number', () => {
            test.each([
                {input: '5', expected: 5},
                {input: '20', expected: 20},
                {input: '300', expected: 300},
            ])('input: $input', ({input, expected }) => {
                const sut = new StringCalculator();
                // Act
                const actual = sut.add(input);
                // Assert
                expect(actual).toBe(expected);
            });
        });

        describe('two numbers', () => {
            test.each([
                {input: '5,4', expected: 9},
                {input: '10,23', expected: 33},
                {input: '234,754', expected: 988},
            ])('input: $input, expected: $expected', ({input, expected }) => {
                const sut = new StringCalculator();
                // Act
                const actual = sut.add(input);
                // Assert
                expect(actual).toBe(expected);
            });
        });

        describe('many numbers', () => {
            test.each([
                {input: '6,3,1', expected: 10 },
                {input: '10,20,30', expected: 60},
                {input: '12,148,1000', expected: 1160}
            ])('input: $input, expected: $expected', ({input, expected }) => {
                const sut = new StringCalculator();
                // Act
                const actual = sut.add(input);
                // Assert
                expect(actual).toBe(expected);
            });
        });

    });
});
