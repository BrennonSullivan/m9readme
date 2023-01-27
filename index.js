const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation instructions for your project:",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide usage information for your project:",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your project:",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Please provide guidelines for contributing to your project:",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide instructions for running tests on your project:",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email address:",
    },
    {
      type: "input",
      name: "github",
      message: "Please provide your Github username:",
    },
  ])
  .then((answers) => {
    let readme = `# ${answers.projectTitle}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

For any additional questions, please contact me at [${answers.email}](mailto:${answers.email}). 
You can also check out my [GitHub profile](https://github.com/${answers.github}).`;

    // Write the README to a file
    fs.writeFileSync('./output/README.md', readme);
  });
