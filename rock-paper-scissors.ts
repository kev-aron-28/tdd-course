export enum Move {
    Paper,
    Rock,
    Scissors
}

export enum OutCome {
    PlayerWins,
    PlayerLoses,
    Tie
}

interface RockPaperScissors {
    play(playerMove: Move, opponentMove: Move): OutCome;
}

export const createRockPaperScissors = (): RockPaperScissors => {
    return {
        play: (playerMove: Move, opponentMove: Move): OutCome => {
            if(playerMove === opponentMove) {
                return OutCome.Tie;
            }

            if(playerMove === Move.Scissors) {
                if(opponentMove === Move.Paper) return OutCome.PlayerWins;
                else return OutCome.PlayerLoses;
            }

            if(playerMove == Move.Rock) {
                if(opponentMove === Move.Scissors) return OutCome.PlayerWins;
                else return OutCome.PlayerLoses;
            }

            if(playerMove == Move.Paper) {
                if(opponentMove === Move.Rock) return OutCome.PlayerWins;
                else return OutCome.PlayerLoses;
            }
            
            return OutCome.PlayerWins;
        }
    }
}
