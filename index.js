// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function questions(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
              if (titleInput) {
                return true;
              } else {
                console.log('You need to enter a project title!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions? (Required)',
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('You need to enter installation instructions!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information (Required)',
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('You need to provide usage information!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to this project? (Required)',
            validate: contributionInput => {
              if (contributionInput) {
                return true;
              } else {
                console.log('You need to enter contributors!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'testing',
            message: 'Please provide testing instructions (Required)',
            validate: testingInput => {
              if (testingInput) {
                return true;
              } else {
                console.log('You need to provide testing instructions!');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'What license do you want to use? (Check one)',
            choices: ['Apache', 'Academic', 'ISC','MIT','Mozilla','Open'],
        }
    ]);
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await questions();
        const generateContent = generateMarkdown(answers);
        await writeToFile('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
}
// Function call to initialize app
init();
