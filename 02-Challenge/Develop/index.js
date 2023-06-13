// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// const Handlebars = require('handlebars');
// const source = '<div>{{title}}</div>';
// const template = Handlebars.compile(source);

// var READMEdata = {
//     Title: "README Generator",
//     Description: "Explain..."
// }

// var templateData = $('#READMEdata').md();
// var templatehandlebars = Handlebars.compile(templateData);

// $('title').append(templatehandlebars(READMEdata));

console.log('Inquirer working')

inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'I need value to continue'}},
        },
        {
            type:'input',
            message: "Give a brief description of your project.",
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'I need value to continue'}},
        }
    ]
).then(({
    title,
    description,

}) =>{
    // template to be used

    createNewFile(title,template);
}
);

function createNewFile(fileName,data){
    fs.writeFile('./READMEproduct.md' ,data, (err)=> {
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}
// TODO: Create an array of questions for user input
// const questions = ["What is the Title of your README?, Give a brief description of your Project., What command should be run to install dependencies?, What command should be run to run tests? "];

// const allQuestions = 'questions';

// TODO: Create a function to write README file
// fs.writeToFile('/Desktop/Challenges/09-Challenge/Module9-Challenge/02-Challenge/READMEproduct.md', content, err => {
//     if (err) {
//         console.error(err);
//     }
// });

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
