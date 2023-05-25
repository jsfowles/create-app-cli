#!/usr/bin/env node
const { Command } = require('commander');
const shell = require('shelljs');
const program = new Command();

program
    .version('0.0.1')
    .argument('<template>', 'The template repository')
    .argument('<name>', 'The name of your new repository')
    .action((template, name) => {
        console.log('Creating a new repository:', name);

        // Clone the template repository
        if (shell.exec(`git clone ${template} ${name}`).code !== 0) {
            console.error('Error: Git clone failed');
            return;
        }

        // Navigate into the new directory
        shell.cd(name);

        // Remove the .git directory to start with a clean history
        shell.rm('-rf', '.git');

        // Initialize a new git repository
        if (shell.exec('git init').code !== 0) {
            console.error('Error: Git init failed');
            return;
        }

        console.log('Repository created successfully');
    });

program.parse(process.argv);
