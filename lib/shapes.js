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

class Triangle extends Shape{

    // Step 1.A Add appropriate values for triangle class (string).
    render(){
        return `<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill=${this.color} stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><polygon points="12 3 2.5 21 21.5 21 12 3"></polygon></svg>`
    };
};


// Step 2. Create Class for Circle shape

class Circle extends Shape{
    
    // Step 2.A Add appropriate values for Circle class (string).
    render(){
        return `<svg fill=${this.color} width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 1.25c-8.146 0-14.75 6.604-14.75 14.75s6.604 14.75 14.75 14.75c8.146 0 14.75-6.604 14.75-14.75v0c-0.010-8.142-6.608-14.74-14.749-14.75h-0.001zM16 29.25c-7.318 0-13.25-5.932-13.25-13.25s5.932-13.25 13.25-13.25c7.318 0 13.25 5.932 13.25 13.25v0c-0.008 7.314-5.936 13.242-13.249 13.25h-0.001z"></path>
        </svg>`
    };
};


// Step 3. Create Class for Square shape
// Step 3.A Add appropriate values for Square class (string).

class Square extends Shape{

    render(){
        return `<svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill=${this.color} stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="miter"><rect x="2" y="2" width="20" height="20" rx="0"></rect></svg>`
    };
};

// Export module

module.exports = {Triangle, Circle, Square};