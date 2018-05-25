// Use pascal naming conventions in naming interfaces
// Cohesion things related go together

interface Point{
    x: number,
    y: number,
    draw: () => void
}

// Function Draw Point
let drawPoint = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}