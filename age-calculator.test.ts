import { createAgeCalculator } from "./age-calculator";

describe('agecalculator', () => {

    describe('already had birthday this year', () => {
        test.each([
            {birthDate:  "2003/02/28", targetDate: "2009/03/21", expected: 6},
            {birthDate:  "1950/01/31", targetDate: "2001/03/21", expected: 51},
            {birthDate:  "2015/03/10", targetDate: "2022/03/21", expected: 7}
        ])("birthdate: $birthDate target: $targetDate should be $expected", 
        ({ birthDate, targetDate, expected}) => {
            // Arrange
            const sut = createAgeCalculator()
            // Act
            const actual = sut(new Date(birthDate), new Date(targetDate))
            // Assert
            expect(actual).toBe(expected)
        })    
    });
    describe('has not had birthday this year', () => {

        describe('birthday in later month', () => {
            test.each([
                {birthDate:  "1979/02/15", targetDate: "2000/01/01", expected: 20},
                {birthDate:  "2015/03/10", targetDate: "2022/02/28", expected: 6},
            ])("birthdate: $birthDate target: $targetDate should be $expected", 
            ({ birthDate, targetDate, expected}) => {
                // Arrange
                const sut = createAgeCalculator()
                // Act
                const actual = sut(new Date(birthDate), new Date(targetDate))
                // Assert
                expect(actual).toBe(expected)
            })
        });

        describe('birthday in same month', () => {
            test.each([
                {birthDate:  "1950/01/31", targetDate: "2000/01/01", expected: 49},
            ])("birthdate: $birthDate target: $targetDate should be $expected", 
            ({ birthDate, targetDate, expected}) => {
                // Arrange
                const sut = createAgeCalculator()
                // Act
                const actual = sut(new Date(birthDate), new Date(targetDate))
                // Assert
                expect(actual).toBe(expected)
            })
        });

    });
});
