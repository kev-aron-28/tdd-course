export class StringCalculator {
    public add(input: string) {
        if(input.length === 0) return 0;
        
        let delimiter: string | RegExp = /,|\n/;

        if(this.hasCustomDelimiter(input)) {
            delimiter = this.extractCustomDelimiter(input);
            input = this.setCustomDelimiter(input);
        }

        const parsedNumbers = input.split(delimiter)
            .map(s => Number.parseInt(s));

        const negativeNumber = parsedNumbers.filter(n => n < 0);
        if(negativeNumber.length > 0) {
            throw "negatives not allowed: " + negativeNumber.toString();
        }

        return parsedNumbers
            .reduce((n,total) => total + n)
    }

    private setCustomDelimiter(input: string): string {
        return input.slice(3);
    }

    private extractCustomDelimiter(input: string): string | RegExp {
        return input[2];
    }

    private hasCustomDelimiter(input: string) {
        return input.startsWith("//");
    }
}
