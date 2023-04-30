// Include packages needed for this application
const {Triangle, Circle, Square} = require("./shapese.js")

// Step 1. Create atleast 3 tests for every file in lib directory

// Testing Triangle Shape
describe('Triangle', () => {
    test('correctly rendered', () => {
        const shape= new Triangle ();
        var color= ('red')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<svg width="300px" height="200px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill=${color} stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><polygon points="12 3 2.5 21 21.5 21 12 3"></polygon></svg>`)
    })
})

// Testing Circle Shape
describe('Circle', () => {
    test('correctly rendered', () => {
        const shape= new Circle ();
        var color= ('Blue')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<svg fill=${color} width="300px" height="200px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1.25c-8.146 0-14.75 6.604-14.75 14.75s6.604 14.75 14.75 14.75c8.146 0 14.75-6.604 14.75-14.75v0c-0.010-8.142-6.608-14.74-14.749-14.75h-0.001zM16 29.25c-7.318 0-13.25-5.932-13.25-13.25s5.932-13.25 13.25-13.25c7.318 0 13.25 5.932 13.25 13.25v0c-0.008 7.314-5.936 13.242-13.249 13.25h-0.001z"></path>
        </svg>`)
    })
})

// Testing Square Shape
describe('Square', () => {
    test('correctly rendered', () => {
        const shape= new Square ();
        var color= ('orange')
        shape.setColor(color)
        expect(shape.render()).toEqual(`<svg width="300px" height="200px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill=${color} stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><rect x="2" y="2" width="20" height="20" rx="0"></rect></svg>`)
    })
})
