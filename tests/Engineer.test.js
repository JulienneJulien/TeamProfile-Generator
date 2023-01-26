const Engineer = require("../lib/Engineer");
// ENGINEER OBJECT CREATED
test("the engineer object is created here", () => {
    const engineer = new Engineer("Carl",2341, "Carl@gmail.com", "CarlT");
    
    expect(engineer.github).toEqual(expect.any(String));
});
// GETS THE ENGINEER'S GITHUB
test("to get the engineer github here", () => {
    const engineer = new Engineer("Carl",2341, "Carl@gmail.com", "CarlT");
    
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// GETS THE ENGINEER'S ROLES
test("to get the engineer role here", () => {
    const engineer = new Engineer("Carl",2341, "Carl@gmail.com", "CarlT");
    
    expect(engineer.getRole()).toEqual("Engineer");
});

