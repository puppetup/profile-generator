const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const { create } = require('domain')

const teamMemberObjArr = []

const init = () => {
    const createManager = () => {
        inquirer
        .prompt([
                    {
                        type: 'input',
                        message: 'What is the Managers  id?',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'What is the Managers name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is the Managers  email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'What is the Managers office number?',
                        name: 'officeNumber',
                    },
                ])
                .then(answers => {
                    const manager = new Manager(
                        answers.id,
                        answers.name,
                        answers.email,
                        answers.officeNumber
                    );
                    teamMemberObjArr.push(manager);
                    addEmployees();

                });
    };

    function addEmployees() {
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'What employees would you like to add?',
                name: 'choice',
                choices: ['Engineer', 'Intern', "I'm done"],
            },
        ])
        .then((answer) => {
            switch (answer.choice) {
                case "Engineer":
                    createEngineer();
                    break;

                case "Intern":
                    createIntern();
                    break;

                default:
                    buildTeam();
                    break;           
            }
        });
    };

    function createEngineer() {
        inquirer
        .prompt([
                    {
                        type: 'input',
                        message: 'What is the Engineers  id?',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers Github?',
                        name: 'github',
                    },
                ])
                .then(answers => {
                    const manager = new Engineer(
                        answers.id,
                        answers.name,
                        answers.email,
                        answers.officeNumber
                    );
                    teamMemberObjArr.push(engineer);
                    addEmployees();

                });
    };

    function createIntern() {
        inquirer
        .prompt([
                    {
                        type: 'input',
                        message: 'What is the Interns id?',
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: 'What is the Interns name?',
                        name: 'name',
                    },
                    {
                        type: 'input',
                        message: 'What is the Interns email?',
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: 'What is the Interns school?',
                        name: 'school',
                    },
                ])
                .then(answers => {
                    const manager = new Intern(
                        answers.id,
                        answers.name,
                        answers.email,
                        answers.school
                    );
                    teamMemberObjArr.push(intern);
                    addEmployees();

                });
    }

    createManager()
}

init(); 