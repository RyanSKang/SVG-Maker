# SVG-MAKER
  
## Description:
A NODE.js command-line application that takes in user input to generate a logo and save it as an SVG file. The purpose behind this project was to utilize node.js and incorporate jest-test with our javascript in order to generate an SVG file of our User's choosing. I learned the structure of testing our javascript and exporting/importing our module in order to execute our desired functions within our index.js. I also practiced creating a Class and extending them with other classes. I also learned the importance of distinguishing between capitalized and lower-cased defined variables. 

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Table of Contents:
- [Overview](#Overview)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions) 
- [Usage Screenshots](#screenshots)
- [Walkthrough Video](#walkthrough-video)
- [Credits](#credits)  

# Overview

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation
Git clone Repository: [SVG-Maker](https://github.com/RyanSKang/SVG-Maker)  
Following Installation Needed:  
    -Node.js [v16.16.0](https://nodejs.org/en/blog/release/v16.16.0)  
    -Jest [v29.5.0](https://jestjs.io/docs/getting-started)  
    -Inquirer [v8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4#installation)  

## Usage Instructions
1. Using a source code editor, open the cloned repository
2. Open integrated terminal on index.js and execute an "npm i"
3. Execute "node index.js"
4. Respond to the inquierer prompts within the command line
5. Once completed a SVG file named "GeneratedLogo.svg" will be created.
  
If you want to run test, execute "npm run test"   

## Screenshots
### Figure 1. Execute npm run test:  
![Screenshot 2023-06-24 at 12 34 13 PM](https://github.com/RyanSKang/Weather-Dashboard/assets/124969918/17534ceb-80de-43e7-98f1-016e01a1a4ae)

### Figure 2. Execute node index.js: 
![Screenshot 2023-06-24 at 4 59 35 PM](https://github.com/RyanSKang/Weather-Dashboard/assets/124969918/8f402595-ef39-4e47-814c-9285fba3d363)

### Figure 3. SVF File Result
<img width="317" alt="Screenshot 2023-06-24 at 5 57 11 PM" src="https://github.com/RyanSKang/SVG-Maker/assets/124969918/ee5fe659-7cca-4295-a9be-87678d12dda7">

## Walkthrough Video
[Untitled_ Jun 24, 2023 6_08 PM.webm](https://github.com/RyanSKang/SVG-Maker/assets/124969918/5f64f563-f4a8-4c88-8056-1c46ddab594f)

## Credits
-Office Hours  
-1 on 1 tutor: Julio Valdez




