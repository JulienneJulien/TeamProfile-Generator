const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// EMPLOYEE TEAM ROLES
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");

const generateHTML = require("./src/generateHTML");

const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "teamProfile.html");

// TEAM ROLES ARRAY
const teamRoles = [];
// const idArray = [];//

// USER USAGE INSTRUCTIONS
console.log('Welcome to my TeamProfile_Generator_App! Please use `npm run reset` to reset the dist folder');
// TO BUILD TEAM/ADD MANAGER PROMPTS
const createManager = () => {
    console.log('Please build your team');
    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your team manager name?',
        validate: nameEntered => {
            if (nameEntered) {
                return true;
            } else {
                console.log('Please enter your manager name to continue!');
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is your team manager employee ID?',
        validate: EnterID => {
            if (isNaN(EnterID)) {
                console.log('Please enter your team manager employee ID to continue!');
                return false;
            } else {
                return true;
            }
            }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your team manager email address?',
        validate: emailEntered => {
            if (emailEntered) {
                return true;
            } else {
                console.log('Please enter your team manager email address to continue!');
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your team manager office number?',
        validate: numberEntered => {
            if (isNaN(numberEntered)) {
                console.log('Please enter your team manager office number to continue!');
                return false;
            } else {
                return true;
            }
            }
    },
])
    .then (managerInput => {
        const {name, ID, email, officeNumber} = managerInput;
        const manager =new Manager (name, ID, email, officeNumber);
        teamRoles.push(manager);
        console.log(manager);
    })
}
// ADD EMPLOYEE PROMPTS
const createEmployee = () => {
    console.log('Please add the employee roles to your team profile');
    return inquirer.prompt([{
        type: 'list',
        name: 'teamRole',
        choices: ['Engineer','Intern', 'Finish building my team']
    },
    {    
        type: 'input',
        name: 'name',
        when: (input) => input.teamRole === "Engineer",
        message: "What is your engineer's name?",
        validate: nameEntered => {
            if (nameEntered) {
                return true;
            } else {
                console.log("Please enter your engineer's name to continue!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'ID',
        when: (input) => input.teamRole === "Engineer",
        message: "What is your engineer's employee ID?",
        validate: EnterID => {
            if (isNaN(EnterID)) {
                console.log("Please enter your engineer's employee ID to continue!");
                return false;
            } else {
                return true;
            }
            }
    },
    {
        type: 'input',
        name: 'email',
        when: (input) => input.teamRole === "Engineer",
        message: "What is your engineer's email address?",
        validate: emailEntered => {
            if (emailEntered) {
                return true;
            } else {
                console.log("Please enter your engineer's email address to continue!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'github',
        when: (input) => input.teamRole === "Engineer",
        message: "What is your engineer's GitHub profile?",
        validate: githubEntered => {
            if (githubEntered) {
                return true;
            } else {
                console.log("Please enter your engineer's GitHub profile to continue!");
                return false;
            }
            }
    },
    {    
        type: 'input',
        name: 'name',
        when: (input) => input.teamRole === "Intern",
        message: "What is your intern's name?",
        validate: nameEntered => {
            if (nameEntered) {
                return true;
            } else {
                console.log("Please enter your intern's name to continue!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'ID',
        when: (input) => input.teamRole === "Intern",
        message: "What is your intern's employee ID?",
        validate: EnterID => {
            if (isNaN(EnterID)) {
                console.log("Please enter your intern's employee ID to continue!");
                return false;
            } else {
                return true;
            }
            }
    },
    {
        type: 'input',
        name: 'email',
        when: (input) => input.teamRole === "Intern",
        message: "What is your intern's email address?",
        validate: emailEntered => {
            if (emailEntered) {
                return true;
            } else {
                console.log("Please enter your intern's email address to continue!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'school',
        when: (input) => input.teamRole === "Intern",
        message: "Which school did your intern went to?",
        validate: schoolEntered => {
            if (schoolEntered) {
                return true;
            } else {
                console.log("Please enter your intern's school name to continue!");
                return false;
            }
            }
    },
    {
        type: 'input',
        name: 'buildTeam',
        when: (input) => input.teamRole === "Finish building my team",
        message: "Please continue building your team profiles",
    },
    {
        type: "confirm",
        name:"menuPrompt",
        message:"Would you like to add one more employee to your team?",
        default: false
    }
    ])

    .then (employeeInput=>{
        let {name, ID, email, teamRole, github, school, menuPrompt} = employeeInput;
        let employee;
        
// ENGINEER ASSIGNED
        if (teamRole === "Engineer"){
            employee = new Engineer(name, ID, email, github);
            console.log(employee)
        }
        
// INTERN ASSIGNED
        if (teamRole === "Intern"){
            employee = new Intern(name, ID, email, school);
            console.log(employee)
        }

        teamRoles.push(employee);

// CHOICE MENU TO ADD ONE MORE EMPLOYEE, RUN ADDEMPLOYEE AGAIN
        if (menuPrompt) {
            return createEmployee(teamRoles);
        }
        else{
            return teamRoles;
        }
    })
    }
// TO CREATE HTML PROFILE
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err)
        }
        else {
        console.log('You have successfully generated your team profile!')
        }
    });
};

// 
createManager()
.then (createEmployee)
.then (teamRoles => {
    return generateHTML(teamRoles);
})
.then (pageHTML => {
    return writeFile(pageHTML);
}) 
.catch (err => {
    console.log(err);
})