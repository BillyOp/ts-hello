// A class groups properties and functions that are
// Highly related
class Pointer {
    // The question mark makes the parameters optional
    // Use ? to make parameters optional
    constructor(private x?: number, private y?: number) {
    }

    // Functions to execure
    public draws() {
        console.log('x: ' + this.x + ' y: ' + this.y)
    }

    getX(){
        return this.x;
    }

    setX(value){
        if(value < 0)
            throw new Error('value cannot be less than 0.')

        this.x = value
    }
}

let points = new Pointer(15, 25);
points.draws();
points.getX();
