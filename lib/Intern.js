const Employee = require("./Employee");
// TO EXTEND INTERN CONSTRUCTOR FROM EMPLOYEE CONSTRUCTOR
class Intern extends Employee {
    constructor (name, ID, email, school) {
        super (name, ID, email);
        this.school = school;
    }
// RETURNED SCHOOL FROM USERINPUT
getName () {
    return this.school;
}
// OVERRIDE EMPLOYEE ROLE TO INTERN
getRole () {
    return "Intern";
}
};

module.exports = Intern;