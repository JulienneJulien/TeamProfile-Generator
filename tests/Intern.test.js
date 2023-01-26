const Intern = require("../lib/Intern");
// INTERN OBJECT CREATED
test("the intern object is created here", () => {
    const intern = new Intern("SUE",3421, "SUE@gmail.com", "UCF BOOTCAMP");
    
    expect(intern.school).toEqual(expect.any(String));
});
// GETS THE INTERN'S SCHOOL
test("to get the intern school here", () => {
    const intern = new Intern("SUE",3421, "SUE@gmail.com", "UCF BOOTCAMP");
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// GETS THE INTERN'S ROLES
test("to get the intern role here", () => {
    const intern = new Intern("SUE",3421, "SUE@gmail.com", "UCF BOOTCAMP");
    
    expect(intern.getRole()).toEqual("Intern");
});

