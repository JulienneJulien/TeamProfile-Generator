const Employee = require("./Employee");
// TO EXTEND ENGINEER CONSTRUCTOR FROM EMPLOYEE CONSTRUCTOR
class Engineer extends Employee {
    constructor (name, ID, email, github) {
        super (name, ID, email);
        this.github = github;
    }
// RETURNED GITHUB FROM USERINPUT
getGithub () {
    return this.github;
}    
// OVERRIDE EMPLOYEE ROLE TO ENGINEER
getRole () {
    return "Engineer";
}
};

module.exports = Engineer;