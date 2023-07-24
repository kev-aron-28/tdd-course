import { StringCalculator } from "./string-calculator";

describe('string-calculator', () => {

    describe('add', () => {
        test('given empty string should return 0', () => {
            // Arrange
            const input = ''
            const expected = 0
            const sut = createSut();
            // Act
            const actual = sut.add(input);
            // Assert
            expect(actual).toBe(expected);
        });

        describe('single number', () => {
            test.each([
                { input: '5', expected: 5 },
                { input: '20', expected: 20 },
                { input: '300', expected: 300 },
            ])('input: $input', ({ input, expected }) => {
                const sut = createSut();
                // Act
                const actual = sut.add(input);
                // Assert
                expect(actual).toBe(expected);
            });
        });

        describe('two numbers', () => {
            test.each([
                { input: '5,4', expected: 9 },
                { input: '10,23', expected: 33 },
                { input: '234,754', expected: 988 },
            ])('input: $input, expected: $expected', ({ input, expected }) => {
                const sut = createSut();
                // Act
                const actual = sut.add(input);
                // Assert
                expect(actual).toBe(expected);
            });
        });

        describe('many numbers', () => {
            test.each([
                { input: '6,3,1', expected: 10 },
                { input: '10,20,30', expected: 60 },
                { input: '12,148,1000', expected: 1160 }
            ])('input: $input, expected: $expected', ({ input, expected }) => {
                const sut = createSut();
                // Act
                const actual = sut.add(input);
                // Assert
                expect(actual).toBe(expected);
            });
        });

        describe('new line as delimiter', () => {
            test('1,2\\n3', () => {
                const input = "1,2\n3";
                const expected = 6;
                const sut = createSut();

                const actual = sut.add(input);

                expect(actual).toBe(expected);
            });
        });

        describe('custom delimiter', () => {
            test('//;\\n1;2', () => {
                const input = "//;\n1;2";
                const expected = 3;
                const sut = createSut();

                const actual = sut.add(input);

                expect(actual).toBe(expected);
            });
        });

        describe('throws on negative numbers', () => {
            describe('one negative number in input', () => {
                test.each([
                    { input: '1,2,-3', expected: "negatives not allowed: -3" },
                    { input: '1,-2,3', expected: "negatives not allowed: -2" },
                    { input: '-1,2,3', expected: "negatives not allowed: -1" }
                ])('input: $input, expected: $expected', ({ input, expected }) => {
                    const sut = createSut();
                    // Act
                    expect(() => {
                        sut.add(input);
                    }).toThrow(expected)
                });
            });

            describe('many negative number in input', () => {
                test.each([
                    { input: '-1,-2,3', expected: "negatives not allowed: -1,-2" },
                    { input: '-1,2,-3', expected: "negatives not allowed: -1,-3" },
                    { input: '-1,-2,-3', expected: "negatives not allowed: -1,-2,-3" }
                ])('input: $input, expected: $expected', ({ input, expected }) => {
                    const sut = createSut();
                    // Act                    
                    expect(() => {
                        sut.add(input);
                    }).toThrow(expected)
                });
            });
        });

    });

    function createSut() {
        return new StringCalculator();
    }
});
