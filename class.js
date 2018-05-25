// A class groups properties and functions that are
// Highly related
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // Functions to execure
    Point.prototype.draws = function () {
        console.log('x: ' + this.x + ' y: ' + this.y);
    };
    Point.prototype.getDistances = function (another) {
        // ....
    };
    return Point;
}());
var point = new Point(15, 25);
point.draws();
