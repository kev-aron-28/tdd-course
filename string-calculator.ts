export class StringCalculator {
    public add(input: string) {
        if(input.length === 0) return 0;

        if(input.includes(',')) {

            const operands = input.split(",");
            let total = 0;

            for(const op of operands) {
                total += Number.parseInt(op);
            }

            return total
        }

        return Number.parseInt(input);
    }
}
