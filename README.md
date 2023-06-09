# ReadMe Markdown File Generator [![MIT License](https://img.shields.io/badge/License-MIT-lightgrey.svg)]([https://opensource.org/license/mit/](https://github.com/jenho-webdev/Awsome_README_Generator/blob/main/LICENSE))


## Table of Contents

- [About The Project](#introduction)

- [Usage](#usage)

- [Features](#features)

- [Installation](#installation)

- [Demo](#demo)

- [Contributing](#contributing)

- [License](#license)

- [Acknowledgments](#acknowledgments)

## Introduction

A README file is a critical part of any GitHub repository. It is the first thing that users see when they visit your repository, and it is your chance to make a good first impression. A well-written README file can help users understand what your project is about, how to use it, and how to contribute to it.

However, writing a README file can be time-consuming and difficult. It can be hard to know what information to include, and it can be even harder to write it in a way that is clear and concise.

This is where the README Generator app comes in. The README Generator app is a Node.js command-line application that helps you create README files for your projects. It prompts you for information about your project, such as its name, description, licenses, usage, installation instructions, contribution guidelines, details about test, Q&A and then generates a README file in Markdown format.

The README Generator app is a valuable tool for any developer who wants to create professional-looking README files for their GitHub repositories. It is easy to use, powerful, and customizable.

## Usage

To use the README Generator app, see the installation section for insturction on how to install and run the application.

Once you have it installed and run, the app will prompt you for the following information:

    -Your project's name or title 
    **Space will be replaced by "-" and "\/:*?"<>\|" will be removed in the filename en ensure a valid filename in Window file system**
    
    -Your project's description
    -Your project's installation steps
    -Your project's usags detail|
    -Your project's contribution guideline
    -Your project's license infomation
    -Your project's written tests and instruction on how to run them
    -Your project's GitHub username
    -Your project's email address for others to reach out for more questions

Once you have answered all of the prompts, the README Generator app will generate a README file named after the tile you provided in Markdown format and save it to the current directory. It also auto replace any space in your project title with a "-" and remove any invalid characters(\\/:*?\"<>|) for your README markdown filenames, so that the filename will be valid in Window file systems.

## Features

The README Generator app has the following features:

Easy to use: 

The README Generator app is a simple and easy-to-use application that can be used by anyone to create README files for their GitHub repositories.

Powerful: 

The README Generator app can generate README files that include a variety of information about your project, such as its name, description, features, and GitHub username.

Check and create Markdown file with a valid window filenames:

The app auto create the markdown file base on your project/app name and auto avoid any invalid character by replacing them with the character '-'. 

## Installation

Steps to download and install the app:
Download the package: Hit the "Code" button within this GitHub repo to copy link
Clone: Within GitBash, use the command "git clone paste link here"
NPM: Use the command "npm init -y" to install Node Package Manager
Inquirer: Use the command "npm install inquirer" to get npm's inquirer package

To install the README Generator app, you can use the following command:

    npm install 

Once you have installed the README Generator app, you can run it by typing the following command:

    node index.js

## Demo

You can find a sample of generated README file from the program [HERE](./Develop/README_my-awesome-project.md)

A video walkthrough of the applocation: [walkthrought video](https://www.youtube.com/watch?v=AaQLn6LbFWY)

## Contributing

If you would like to contribute to the README Generator app, you can do so by forking the GitHub repository and submitting pull requests.

## License

The README Generator app is licensed under the MIT License.
[![MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://img.shields.io/badge/License-GPL-lightgrey.svg](https://github.com/jenho-webdev/Awsome_README_Generator/blob/main/LICENSE))

    For details of the application's licensing details, please visit: https://github.com/jenho-webdev/Awsome_README_Generator/blob/main/LICENSE


## Acknowledgments
Shield and badges used in this markdown document were sourced from Shields.io.
Application was inspried by UCI bootcamp coruse( The "coruse") assignment #9. The pplication starter code was provided by the Course, completed and improved by me.
The user story, acceptance criteria were provided by the Course. 
