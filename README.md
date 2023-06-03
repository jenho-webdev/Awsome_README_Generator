# ReadMe Markdown file Generator

## Introduction

A README file is a critical part of any GitHub repository. It is the first thing that users see when they visit your repository, and it is your chance to make a good first impression. A well-written README file can help users understand what your project is about, how to use it, and how to contribute to it.

However, writing a README file can be time-consuming and difficult. It can be hard to know what information to include, and it can be even harder to write it in a way that is clear and concise.

This is where the README Generator app comes in. The README Generator app is a Node.js command-line application that helps you create README files for your projects. It prompts you for information about your project, such as its name, description, licenses, usage, installation instructions, contribution guidelines, details about test, Q&A and then generates a README file in Markdown format.

The README Generator app is a valuable tool for any developer who wants to create professional-looking README files for their GitHub repositories. It is easy to use, powerful, and customizable.

## Usage

To use the README Generator app, see the installation section for insturction on how to install and run the application.

Once you have it installed and run, the app will prompt you for the following information:

    -Your project's name or title
    -Your project's description
    -Your project's installation steps
    -Your project's usags details
    -Your project's contribution guideline
    -Your project's license infomation
    -Your project's written tests and instruction on how to run them
    -Your project's GitHub username
    -Your project's email address for others to reach out for more questions

Once you have answered all of the prompts, the README Generator app will generate a README file named after the tile you provided in Markdown format and save it to the current directory. It also auto replace any invalid characters in your project tile for windows filenames with a '-' so that the Markdown file name will be valid.

## Features

The README Generator app has the following features:

Easy to use: 

The README Generator app is a simple and easy-to-use application that can be used by anyone to create README files for their GitHub repositories.

Powerful: 

The README Generator app can generate README files that include a variety of information about your project, such as its name, description, features, and GitHub username.

Check and create Markdown file with a valid window filenames:
The app auto create the markdown file base on your project/app name and auto avoid any invalid character by replacing them with the character '-'. 

## Installation

To install the README Generator app, you can use the following command:

    npm install 

Once you have installed the README Generator app, you can run it by typing the following command:

    node index.js

## Contributing

If you would like to contribute to the README Generator app, you can do so by forking the GitHub repository and submitting pull requests.

## License

The README Generator app is licensed under the MIT License.