const Manager = require("../lib/Manager");
// MANAGER OBJECT CREATED
test("the manager object is created here", () => {
    const manager = new Manager("RACHEL",1909, "RACHEL@gmail.com", "1234567890");
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
// GETS THE MANAGER'S ROLES
test("to get the manager role here", () => {
    const manager = new Manager("RACHEL",1909, "RACHEL@gmail.com", "1234567890");
    
    expect(manager.getRole()).toEqual("Manager");
});
