export function gretter() {
    return {
        helloWorld: () => {
            return "Hello world"
        }, 
        helloPerson: (name: string): string => {
            return "Hello " + name + "!";
        }
    }
}
