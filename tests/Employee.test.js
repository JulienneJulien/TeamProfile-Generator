const Employee = require("../lib/Employee");
// EMPLOYEE OBJECT CREATED
test("the employee object is created here", () => {
const employee = new Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(employee.name).toEqual(expect.any(String));
expect(employee.ID).toEqual(expect.any(Number));
expect(employee.email).toEqual(expect.any(String));
});
// GETS THE EMPLOYEE NAME
test("to get the employee name here", () => {
const employee = new Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(employee.getName()).toEqual(expect.any(String));
});
// GETS THE EMPLOYEE ID
test("to get the employee ID here", () => {
const employee = new Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(employee.getId()).toEqual(expect.any(Number));
});
    // GETS THE EMPLOYEE EMAIL
test("to get the employee email here", () => {
const employee = new Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// GETS THE EMPLOYEE'S ROLES
test("to get the employee's role here", () => {
const employee = new Employee("Joshua",1234, "JoshuaBW@gmail.com");

expect(employee.getRole()).toEqual("Employee");
});