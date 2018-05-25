// A class groups properties and functions that are
// Highly related
class Dot {
    // The question mark makes the parameters optional
    // Use ? to make parameters optional
    constructor(private x?: number, private y?: number) {
    }
 
    // Functions to execure
    public draws() {
        console.log('x: ' + this.x + ' y: ' + this.y)
    }

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.')

        this.x = value
    }
}

let dots = new Dot(15, 25);
dots.draws();
dots.X = 20