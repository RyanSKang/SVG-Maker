// Importing shapes.js to implement test
const {Triangle, Circle, Square} = require("../lib/shapes")

// Step 1. Create atleast 3 tests for every file in lib directory

// Testing Triangle Shape
describe('Triangle', () => {
    test('correctly rendered', () => {
        const shape= new Triangle ();
        var color= ('red')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<polygon fill="${color}" points="150, 18 244, 182 56, 182"></polygon>`)
    })
})

// Testing Circle Shape
describe('Circle', () => {
    test('correctly rendered', () => {
        const shape= new Circle ();
        var color= ('Blue')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<circle fill="${color}" cx="150" cy="100" r="75"></circle>`)
    })
})

// Testing Square Shape
describe('Square', () => {
    test('correctly rendered', () => {
        const shape= new Square ();
        var color= ('orange')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<rect fill="${color}" x="50" width="200" height="200"></rect>`)
    })
});
