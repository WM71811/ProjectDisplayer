# ProjectDisplayer

This project was generated with [Angular CLI].

To start the application,
* run `npm install` to install the dependencies
* run `npm start` to start the application
* open browser on http://localhost:4200/ to use the application

The application allows for users to search the GitHub projects, or in another name, repositories, via entering the GitHub user name. Users can also access the content of README.md of each project.

Due to rate limit of GitHub API, searching for too many times in a short period will result in failure to respond by the GitHub API, and is shown in the application as an error.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
