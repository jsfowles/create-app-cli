#!/usr/bin/env node
const { Command } = require('commander');
const shell = require('shelljs');
const inquirer = require('inquirer');
const fs = require('fs');
const program = new Command();

program
  .version('0.0.2')
  .argument('<template>', 'The template repository')
  .argument('<name>', 'The name of your new repository')
  .action(async (template, name) => {
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

    // Ask the user if they want to add a .prettierrc file
    const addPrettierrc = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'addPrettierrc',
        message: 'Would you like to add a .prettierrc file?',
        default: false,
      },
    ]);

    if (addPrettierrc.addPrettierrc) {
      // If the user confirms, check if .prettierrc or .prettierrc.json already exists
      const prettierrcExists = fs.existsSync('.prettierrc');
      const prettierrcJsonExists = fs.existsSync('.prettierrc.json');
      if (prettierrcExists || prettierrcJsonExists) {
        // If either exists, prompt the user
        const overwrite = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'overwritePrettierrc',
            message:
              'A .prettierrc or .prettierrc.json file already exists. Would you like to overwrite it?',
            default: false,
          },
        ]);

        if (!overwrite.overwritePrettierrc) {
          // If the user does not confirm, skip the rest
          console.log(
            'Repository created successfully without overwriting .prettierrc or .prettierrc.json'
          );
          return;
        }

        // If user confirms, remove the existing files
        if (prettierrcExists) shell.rm('.prettierrc');
        if (prettierrcJsonExists) shell.rm('.prettierrc.json');
      }

      // If neither file exists or the user confirmed to overwrite, download .prettierrc file from a GitHub repository
      if (
        shell.exec(
          'curl -O https://raw.githubusercontent.com/jsfowles/vf-prettier-config/main/.prettierrc'
        ).code !== 0
      ) {
        console.error('Error: Failed to download .prettierrc');
        return;
      }
    }

    console.log('Repository created successfully');
  });

program.parse(process.argv);
