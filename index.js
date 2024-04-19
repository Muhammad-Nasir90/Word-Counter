#! /usr/bin/env node
console.log(`       ( Wellcome my word count Project )          `);
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is: ${words.length}`);
console.log(`  THE END  `);
