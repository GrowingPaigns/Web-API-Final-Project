# Web Api Final - Gym App (Front-End)

Spring 2023 Web Api Final

_Team Members:_

> _Nader Zadron_<br>
>_David Desrochers_<br>
>_Nathan Sweany_<br>
>_Addison Garza_<br>
>_Brandon Borgonah_<br>
>_Samuel Hilfer_<br>

## Server - Backend:

> All code related to the backend of this project [found here](https://github.com/NaderZadron/Gym-App)

## Client - Contains all of the front-end code:

### How to run:

> Starting from the terminal in your IDE, 'cd' into the src directory.

> run npm start - should automatically pull up the website in your browser

#### ~ (Windows Specific Setup Help) ~
> - if it doesn't start, check that you have installed all packages in package.json in this directory
>   - should also have a package-lock file
> - check that you have '.pem' files in this directory
> - check that these are the scripts in your package file

      "scripts": {
          "start": "set HTTPS=true&&set SSL_CRT_FILE=./localhost.pem&&set SSL_KEY_FILE=./localhost-key.pem&&react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        },

(Website should update automatically for any code changed - no need to refresh/restart the service)

### File Overview:

#### Public:

- The public folder contains static files such as: 
  - index 
  - html 
  - javascript library files 
  - images, and other assets, etc. which you don't want to be processed by webpack

#### src:

This folder is the heart of React application as it contains JavaScript which needs to be processed by webpack and CSS stylings for the front-end pages. 

In this folder, there is a main component App.js, its related styles (App.css), and test suite (App.test.js). The program index.js and its style sheet (index.css) provide an entry point into the App. 

## Postman Test Routes:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/22241646-c6ae8f9c-005f-4f22-9e56-00274f9995d4?action=collection%2Ffork&collection-url=entityId%3D22241646-c6ae8f9c-005f-4f22-9e56-00274f9995d4%26entityType%3Dcollection%26workspaceId%3D345d5336-45b0-4725-8e70-42642449c842)
