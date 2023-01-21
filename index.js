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

const render = require("./src/generateHTML");
// TEAM ROLES ARRAY
const teamRoles = [];
// const idArray = [];//

// USER USAGE INSTRUCTIONS
console.log('Welcome to my TeamProfile_Generator_App! Please use `npm run reset` to reset the dist folder');
// TO BUILD TEAM/ADD MANAGER PROMPTS
const createManager = () => {
    console.log('Please build your team');
    return inquirer.createPrompt([{
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
            if (isNAN(numberEntered)) {
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
        const manager = new Manager (name, ID, email, officeNumber);
        teamRoles.push(manager);
        console.log(manager);
    })
}
// ADD EMPLOYEE PROMPTS
const createEmployee = () => {
    console.log('Please add your employees to the team');
    return inquirer.createPrompt([{
        type: 'list',
        name: 'teamRole',
        choices: ['Engineer','Intern', 'Finish building my team']
    },
    {    
        type: 'input',
        name: 'name',
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
        when: (input) => input.role === "Engineer",
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
        name: 'school',
        when: (input) => input.role === "Intern",
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
        when: (input) => input.role === "Finish building my team",
        message: "Please continue building your team profiles"
    },
    {
        type: "confirm",
        name:"menuPrompt",
        message:"Would you like to add one more employee to your team?",
        default: false
    }
    ])

    .then (employeeInput=>{
        let {name, ID, email, role, github, school, menuPrompt} = employeeInput;
        let employee;
        
// ENGINEER ASSIGNED
        if (role === "Engineer"){
            employee = new Engineer (name, ID, email, github);
            console.log(employee)
        }
        
// INTERN ASSIGNED
        if (role === "Intern"){
            employee = new Intern (name, ID, email, school);
            console.log(employee)
        }

        teamRoles.push(employee);

        // if want to add one more employee, run addEmployee again
        if (oneMore) {
            return addEmployee(teamRoles);
        }
        else{
            return teamRoles;
        }
    })
    }
