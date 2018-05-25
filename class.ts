// A class groups properties and functions that are
// Highly related
class Point{
    // Fields to store data
    private x: number;
    private y: number;

    // The question mark makes the parameters optional
    // Use ? to make parameters optional
    constructor(x?:number, y?: number){
        this.x = x
        this.y = y
    }

    // Functions to execure
    public draws(){
        console.log('x: ' + this.x + ' y: ' + this.y)
    }

    public getDistances(another: Point){
        // ....
    }
}

let point = new Point(15, 25);
point.draws();
