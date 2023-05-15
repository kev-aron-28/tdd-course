export function createAgeCalculator() {
    return function(birthDate: Date, targetDate: Date) {
        const differenceInYears: number =  targetDate.getFullYear() - birthDate.getFullYear();

        if(hasNotYetHadBirthDate(birthDate, targetDate)) {
            return differenceInYears - 1;
        }

        return differenceInYears;
    }
}

function hasNotYetHadBirthDate(birthDate: Date, targetDate: Date): boolean {
    if(birthDate.getMonth() == targetDate.getMonth() && birthDate.getDate() > targetDate.getDate()){
        return true;
    }

    if(birthDate.getMonth() > targetDate.getMonth()) {
        return true;
    }

    return false

}
