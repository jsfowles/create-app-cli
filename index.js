#!/usr/bin/env node
const { Command } = require('commander');
const shell = require('shelljs');
const program = new Command();

program.version('0.0.1');

program
    .command('create <name>')
    .description('Create a new git repository based on a template')
    .action((name) => {
        console.log('Creating a new repository:', name);

        // Clone the template repository
        if (shell.exec(`git clone https://github.com/jsfowles/next-starter-3.0.git ${name}`).code !== 0) {
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
