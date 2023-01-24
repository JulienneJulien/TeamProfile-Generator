const Employee = require("../lib/Employee");
// EMPLOYEE OBJECT CREATED
test("the employee object is created here", () => {
const Employee = Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(Employee.name).toEqual(expect.any(String));
expect(Employee.ID).toEqual(expect.any(Number));
expect(Employee.email).toEqual(expect.any(String));
});
// GETS THE EMPLOYEE NAME
test("to get the employee name here", () => {
const Employee = Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(Employee.getName()).toEqual(expect.any(String));
});
// GETS THE EMPLOYEE ID
test("to get the employee ID here", () => {
const Employee = Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(Employee.getID()).toEqual(expect.any(Number));
});
    // GETS THE EMPLOYEE EMAIL
test("to get the employee email here", () => {
const Employee = Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(Employee.getEmail()).toEqual(expect.StringContaining(Employee.email.toString()));
});
// GETS THE EMPLOYEE'S ROLES
test("to get the employee's role here", () => {
const Employee = Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(Employee.getRole()).toEqual("Employee");
});