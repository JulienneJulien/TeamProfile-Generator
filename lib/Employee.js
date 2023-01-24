// ADEED EMPLOYEE CONSTRUCTOR
class Employee {
    constructor (name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
// RETURNED NAME FROM USERINPUT
getName () {
    return this.name;
}
// RETURNED ID FROM USERINPUT
getID () {
    return this.ID;
}
// RETURNED EMAIL FROM USERINPUT
getEmail () {
    return this.email;
}
// RETURNED EMPLOYEE ROLE 
getRole () {
    return 'Employee';
}
};

module.exports = Employee;