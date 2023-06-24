
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
        return `<polygon style="fill:${this.color}" points="150, 18 244, 182 56, 182"></polygon>`
    };
};


// Step 2. Create Class for Circle shape
// Step 7. Generate required data based on classes 

class Circle extends Shape{
    
    // Step 2.A Add appropriate values for Circle class (string).
    render(){
        return `<circle style="fill:${this.color}" cx="150" cy="100" r="75"/circle>`
    };
};


// Step 3. Create Class for Square shape
// Step 7. Generate required data based on classes 

class Square extends Shape{
    
    // Step 3.A Add appropriate values for Square class (string).
    render(){
        return `<rect style="fill:${this.color}" x="50" width="200" height="200"></rect>`
    };
};

// Export module

module.exports = {Triangle, Circle, Square};