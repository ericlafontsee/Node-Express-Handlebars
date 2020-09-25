# Eat-Da-Burger!
## Description
For this project, I created a burger logger that follows the MVC design patten. 
Eat-Da-Burger lets users submit a type of burger. This burger is populated on   
the left side of the screen with an option to devour it. When the devour button   
is clicked, the burger will then populate to the right side of the screen with  
 an option to delete it.

View the deployed app at: https://powerful-tor-68295.herokuapp.com/

## Table Of Contents
* [Usage](#Usage)
* [Prerequisites](#Prerequisites)
* [Installation](#Installation)
* [BuiltWith](#Built-With)
* [License](#License)
* [Author](#Author)
* [Questions](#Questions)
* [Acknowledgements](#Acknowledgements )

## Usage
To run the app, navigate to your working directory in the integrated terminal and type ```npm start```

![Eat-Da-Burger-Demo](public/assets/img/Eat-Da-Burger-Demo.gif)

## Prerequisites
To build or edit this application, you will need VS Code, or any IDE, as well as node.js installed.

## Installation
* When you first set up the project, open up the integrated terminal in VS Code and navigate to the root directory of your project. If there is not a package.json then input:  
```npm init -y```

* A package.json file should appear. Then enter the following into your terminal:  
```npm install express --save ```

* To install handlebars, enter the following into your terminal:  
```npm install express-handlebars --save ```

* Next install mysql:  
```npm install mysql --save ```

* In your package.json under scripts, enter:  
```"start": "node index.js"```

* In a schema.sql file, create your database:  
```CREATE DATABASE employee_db;```

* To utilize the Bootstrap grid, components, icons, and utilities, place the following link in the head of your html:
```html 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
```

* To utilize the jQuery library, enter the following in the head of your html:
```html
	<script src="https://code.jquery.com/jquery.js"></script>
```
* To use the burger icon, use the following code:
```html


## Built-With
Node.js  
JavaScript  
MySQL
Express
Handlebars
Bootstrap
jQuery
flaticon - https://www.flaticon.com/authors/freepik

## License 
This project is licensed under MIT. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Author
Eric LaFontsee 

## Questions
If you have any additional questions you can contact me here:  
GitHub: https://github.com/ericlafontsee   
elafontsee@gmail.com

## Acknowledgements 
Sangeetha Kaliaperumal - Trilogy  
    * Helped debugging   
Anthony Cooper - Trilogy  
    * Code revisions  







