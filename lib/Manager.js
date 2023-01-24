const Employee = require("./Employee");
// TO EXTEND MANAGER CONSTRUCTOR FROM EMPLOYEE CONSTRUCTOR
class Manager extends Employee {
    constructor (name, ID, email, officeNumber) {
        super (name, ID, email);
        this.officeNumber = officeNumber;
    }
// OVERRIDE EMPLOYEE ROLE TO MANAGER
getRole () {
    return "Manager";
}
};

module.exports = Manager;