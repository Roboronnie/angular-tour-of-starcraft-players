# AngularTourOfStarcraftPlayers

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Before getting started, make sure your development environment includes Node.js and an npm package manager. 
You can install Node.js here: https://nodejs.org/en/
I will be using the npm client command line interface (installed with Node.js by default) as my npm package mananger. 
To see if you have npm client installed, run "npm -v" in a terminal/console window. 

Install the Angular CLI: npm install -g @angular/cli 

Create a workspace and application: ng new <app-name> => ng new angular-tour-of-starcraft-players

Serve the application: cd app-name, ng serve --open or just ng serve --o => cd angular-tour-of-stacraft-players, ng serve --open 

ng serve builds app, starts dev server, watches source files and rebuilds app as you make changes to files. 

--open / --o automatically opens your browser to http://localhost:4200/

to create a new component using the Angular CLI : ng generate component <component-name> 

component folder created in src/app/<component-name>/ with following files: 
1.  <component-name>.component.css
2.  <component-name>.component.html
3.  <component-name>.component.spec.ts
4.  <component-name>.component.ts

component class is annotated with @Component 
    @Component is a decorator function that specifies the Angular metadata
    3 metadata properties: selector, templateUrl, styleUrls

ngOnInit is a lifestlye hook, called shortly after creating a component, put initialization logic here 

to create a new service using the Angular CLI : ng generate service <service-name>