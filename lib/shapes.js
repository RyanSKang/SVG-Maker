
// Create Class Shape

class Shape{
    constructor(){
        this.color=''
    };
    setColor(color){
        this.color=(color);
    };
};

// Step 1. Create Class for Triangle shape
// Step 7. Generate required data based on classes 

class Triangle extends Shape{

    // Step 1.A Add appropriate values for triangle class (string).
    render(){
        return `<polygon style="fill:${this.color}" points="0,200 300,200 150,0"></polygon>`
    };
};


// Step 2. Create Class for Circle shape
// Step 7. Generate required data based on classes 

class Circle extends Shape{
    
    // Step 2.A Add appropriate values for Circle class (string).
    render(){
        return `<circle style="fill:${this.color};" cx="150" cy="100" r="75"/>`
    };
};


// Step 3. Create Class for Square shape
// Step 7. Generate required data based on classes 

class Square extends Shape{
    
    // Step 3.A Add appropriate values for Square class (string).
    render(){
        return `<rect style="fill:${this.color};" x="150" y="100" width="300px" height="200px" rx="0"></rect`
    };
};

// Export module

module.exports = {Triangle, Circle, Square};