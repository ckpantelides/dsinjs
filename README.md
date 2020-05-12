# Data Structures in JavaScript

The website's [here](https://dsinjs.web.app/).

Most centralised data structure resources I've found online aren't in JavaScript, so I wanted to make a one-stop resource showing the basics in JavaScript.

The website's built with Angular and hosted on Firebase. There are two components - StructureList and StructureDetails. The content to populate the components is in the Structures.ts file in JSON. The Angular router opens the StructureList component when you navigate to the homepage, which loops through the JSON to list each data structure. When a data structure is selected, the StructureDetails component is navigated to, and the index of the selected data structure determines what JSON populates the StructureDetails component.

## Hosting on Firebase

To host a website on Firebase, login to the Firebase website to create a new project, and then using the Angular CLI:

> ng build --prod

> ng add @angular/fire

> firebase init (select "Yes" to "outside home directory", select "Hosting", select the project you made on the Firebase website,  select dist/your-projects-name as the directory, select "Yes" to single page app, and select "No" to overwrite index.html)

> firebase deploy

It may take a couple of minutes for the website to appear at the URL firebase gives you

## Development CLI commands

`ng serve` for a dev server

`ng generate component component-name` to generate a new component.

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`

`ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

`ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

`ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
