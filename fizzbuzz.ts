interface FizzBuzz {
    go(num: number): string;
}

export const createFizzBuzz = (): FizzBuzz => {
    
    return {
        go: (num: number): string => {

            if(num % 15 === 0  ) return "FizzBuzz"

            if(num % 5 === 0) return "Buzz"

            if(num % 3 === 0) return "Fizz"
            
            return num.toString()
        }
    }
}
