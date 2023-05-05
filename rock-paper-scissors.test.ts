// 1. your not allowed to write any production code unless its is to make a failing test pass
// 2. your not allowed to write any more of a unit test than is sufficient to fail.
// 3. your not allowed to write any more production code than is sufficient to pass the one failing unit test 



// Red -> Green -> Reflect -> Refactor

// Fake it green bar pattern

import { Move, OutCome, createRockPaperScissors } from "./rock-paper-scissors";

describe('rock-paper-scissors', () => {

    describe('paper beats rock', () => {

        test.each([
            { playerMove: Move.Paper, opponentMove: Move.Rock, expected:OutCome.PlayerWins },
            { playerMove: Move.Rock, opponentMove: Move.Paper, expected:OutCome.PlayerLoses }
        ])('$playerMove vs $opponentMove = $expected', ({ playerMove, opponentMove, expected }) => {
            
            const sut = createRockPaperScissors();
            
            // Act
            const actual = sut.play(playerMove, opponentMove);
    
            // Assert
            expect(actual).toBe(expected);
        })
            
    });


    describe('scissors beats paper', () => {
        test('given player move paper and oponent move scissors shoud return player loses', () => {
            // Arrange
            const playerMove = Move.Paper;
            const opponentMove = Move.Scissors;
            const expected = OutCome.PlayerLoses;
            const sut = createRockPaperScissors();
           
            // Act
            const actual = sut.play(playerMove, opponentMove);
    
            // Assert
            expect(actual).toBe(expected);
       });
       
       test('given player move scissors and opponent move paper should return player wins ', () => {
            // Arrange
            const playerMove = Move.Scissors;
            const opponentMove = Move.Paper;
            const expected = OutCome.PlayerWins;
            const sut = createRockPaperScissors();
            
            // Act
            const actual = sut.play(playerMove, opponentMove);

            // Assert
            expect(actual).toBe(expected);
       });
    });

    describe('rock beats scissors', () => {
        test('given player move rock and oponent move scissors shoud return player wins', () => {
            // Arrange
            const playerMove = Move.Rock;
            const opponentMove = Move.Scissors;
            const expected = OutCome.PlayerWins;
            const sut = createRockPaperScissors();
            // Act
            const actual = sut.play(playerMove, opponentMove);
            // Assert
            expect(actual).toBe(expected);
       });
       
       test('given player move scissors and opponent move rock should return player loses ', () => {
            // Arrange
            const playerMove = Move.Scissors;
            const opponentMove = Move.Rock;
            const expected = OutCome.PlayerLoses;
            const sut = createRockPaperScissors();
            
            // Act
            const actual = sut.play(playerMove, opponentMove);

            // Assert
            expect(actual).toBe(expected);
       });
    });

    describe('Tie', () => {
        test('given player move scissors and opponent move scissors should return player loses ', () => {
            // Arrange
            const playerMove = Move.Scissors;
            const opponentMove = Move.Scissors;
            const expected = OutCome.Tie;
            const sut = createRockPaperScissors();
            
            // Act
            const actual = sut.play(playerMove, opponentMove);

            // Assert
            expect(actual).toBe(expected);
       });

       test('given player move rock and opponent move rock should return player loses ', () => {
        // Arrange
            const playerMove = Move.Rock;
            const opponentMove = Move.Rock;
            const expected = OutCome.Tie;
            const sut = createRockPaperScissors();
            
            // Act
            const actual = sut.play(playerMove, opponentMove);

            // Assert
            expect(actual).toBe(expected);
        });

        test('given player move paper and opponent move paper should return player loses ', () => {
            // Arrange
                const playerMove = Move.Paper;
                const opponentMove = Move.Paper;
                const expected = OutCome.Tie;
                const sut = createRockPaperScissors();
                
                // Act
                const actual = sut.play(playerMove, opponentMove);
    
                // Assert
                expect(actual).toBe(expected);
            });
    });

});
