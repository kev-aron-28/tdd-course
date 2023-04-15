import { gretter } from "./greeter";

//Four-phase test'
    // Setup
    // Excercise
    // Verify
    // Teardown

describe('greeter', () => {

    describe('helloWorld', () => {
        it('should return Hello world', () => {

            // Arrenge
                // Statate, services or SUT
            const expected = 'Hello world'
            const sut = gretter(); // system under testing
    
            // Act
            const actual = sut.helloWorld();
    
            // Assert
            expect(actual).toBe(expected);
        });    
    });

    describe('helloPerson', () => {

        describe('Empty name', () => {
            it('should return Hello !', () => {

                // Arrenge
                    // Statate, services or SUT
                const expected = 'Hello !'
                const input = "";
        
                const sut = gretter(); // system under testing
        
                // Act
                const actual = sut.helloPerson(input);
        
                // Assert
                expect(actual).toBe(expected);
            }); 
        });

        describe('Given name', () => {
            it('should return Hello NAME!', () => {

                // Arrenge
                    // Statate, services or SUT
                const expected = 'Hello !'
                const input = "";
        
                const sut = gretter(); // system under testing
        
                // Act
                const actual = sut.helloPerson(input);
        
                // Assert
                expect(actual).toBe(expected);
            }); 
        });
    
        it(' given Peter name should return Hello Peter!', () => {
    
            // Arrenge
                // Statate, services or SUT
            const expected = 'Hello Peter!'
            const input = "Peter";
    
            const sut = gretter(); // system under testing
    
            // Act
            const actual = sut.helloPerson(input);
    
            // Assert
            expect(actual).toBe(expected);
        });
    });

    
});
