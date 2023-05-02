// Include packages needed to run application
const inquirer = require("inquirer");
const gracefulFS = require('./node_modules/graceful-fs/graceful-fs')
const {Triangle, Circle, Square} = require("./lib/shapes")

// Creating SVG Class
class SVG{
    constructor(){
        this.text=''
        this.shape=''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
    }
    setTextElement(text,color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    SetShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

// Step 1. Create a prompt for user to fill criteria of SVG logo maker
// Step 2. Create Class for Triangle shape
// Step 2.A Add appropriate values for triangle class (string).
// Step 3. Create Class for Circle shape
// Step 3.A Add appropriate values for Circle class (string).
// Step 4. Create Class for Square shape
// Step 4.A Add appropriate values for Square class (string).
// Step 5. Validate data within prompt
// Step 6. Create atleast 3 tests for every file in lib directory
// Step 7. Generate required data based on classes 
// Step 8. Create a writeFile which will create the SVG based on prompt and console log "Generated logo.svg"


// Step 1. Create a prompt for user to fill criteria of SVG logo maker
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters.',
        name: 'character',
    },
    {
        type: 'input',
        message: 'Enter a color keyword for the text.',
        name: 'text-color',
    },
    {
        type: 'input',
        message: 'Enter a color keyword for the shape.',
        name: 'shape-color',
    },
    {
        type: 'list',
        message: 'What shape would you like for your logo?',
        choices: 
        [
            'Triangle',
            'Circle',
            'Square'
        ]
    }
];

// Step 8. Create a writeFile which will create the SVG based on prompt and console log "Generated logo.svg"
function writeFile(name, data){
    console.log(`Writing ${data} to file ${name}`);
    gracefulFS.writeFile(name, data, function (err){
        if (err){
            return console.log(err);
        }
        console.log("Generated logo.svg");
    })
}

async function init() {
    console.log("init initializing")
    var string="";
    var file="GeneratedLogo.svg";

    // Creating prompt from questions object
    const response= await inquirer.prompt(questions);

    // Step 5. Validate data within prompt (3 Character limit)
    var userAns="";
    if (response.text.length > 0 && response.text.length <4){
        userAns=response.text;
    } else {
        console.log ("Invalid response in text field, Need 1-3 characters ONLY!")
    }
    // Console log out the userAns
    console.log(`User's Character(s): ${userAns}`)

    // Console log out the text color
    console.log(`Text color: ${textColor}`)


    // Step 5. Validate data within shape  (3 Character limit)
let userShapeEl;
    if(userShape === "Triangle"){
        userShape= new Triangle();
        console.log("You selected Triangle!")
    }
    else if(userShape === "Cirlce"){
        userShape= new Circle();
        console.log("You selected Circle!")
    }
    else if(userShape === "Square"){
        userShape= new Square();
        console.log("You selected Square!")
    }
    else {
        console.log("Please select shape from the following options.")
    }
    userShape.setColor(shapeColor)

    // Console log out the shape
    console.log(`Shape: ${shapeEl}`)

    // console log out the shape color
    console.log(`Shape color: ${shapeColor}`)




}