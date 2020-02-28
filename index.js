const fs = require("fs");
const inquirer = require("inquirer");
// const api = require("./utils/api");
const readme = require("./utils/generateMarkdown.js");

inquirer.prompt([
    {
        message: "What is your Github Username?",
        name: "username"
    },
    {
        message: "What will be the Title of your project?",
        name: "title"
    },
    {
        message: "Write a short description of your project.",
        name: "description"
    },
    {
        message: "Write a short description of how to Install your project.",
        name: "install"
    },
    {
        message: "For what purpose have you built such a project? Give a use-scenario.",
        name: "usage"
    },
    {
        message: "Please write the names of any Contributors for this project. If None, leave blank.",
        name: "contributions"
    }
]).then(function(data){
    fs.writeFile("README.md", readme.generateMarkdown(data), err =>{
        if (err){
            throw err;
        }
    });
});