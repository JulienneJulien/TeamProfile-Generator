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


    
    ])
}

