# React:
React is a javascript library which is used to make a single page  web application.React application is tree of components with App component as the root bringing everything together.It is developed by meta(facebook) .This javascript library is used to build a  dynamic and interactive UIs(user interface).


# features of React :
1. React has simple mental model which means react is easy to understand.
<br>
2. No need to worry about querying and updating DOM.
<br>
3. React creats a web page with small and reusable components.
<br>
4 React will take care of creating and updating DOM element.
<br>
5. It saves a lot of time . 
<br>
6. Supported by a large community.
<br>
7. It works well with other tools like redux react router etc.
<br>

# Real-World Examples Built with React:

Facebook (React was created by Facebook)
<br>
Instagram
<br>
WhatsApp Web
<br>
Netflix
<br>
Airbnb


# Difference  between javascript and React :

```bash

Feature/Aspect	      |       JavaScript (JS)           |         React

1.What it is	           A programming language	             A JavaScript library

2.Created by          	   Netscape (1995)	                     Facebook (2013)

3.Purpose	               Adds logic, interactivity,
                           and control to web pages    	         Builds user interfaces with reusable components

4.Type	                   Core web technology 
                           (alongside HTML & CSS)       	     A library written in JavaScript

5.DOM Manipulation       Done manually using document.           React uses a Virtual DOM to update UI efficiently
                          querySelector, innerHTML, etc.	
                          
6.UI Building	             Not structured for UI building	             Specifically designed to build component-based UIs

7.Reusability	             Functions and code reused manually	         Uses components for easy reuse

8.Learning Curve	         Basic syntax is easier	                     Requires JS + React concepts (JSX, state, hooks)

9.Example Use Case	    Simple logic, form validation, animation	 Complex single-page apps (SPAs), dashboards, etc.
                          
```

# npx :
npx is a command-line tool that comes with Node.js, starting from version 5.2.0 of npm. It allows you to execute npm packages directly without installing them globally. This is particularly useful when you want to run a tool or package temporarily without polluting your global npm installs.


# npm:
npm stands for Node Package Manager. It is the default package manager for Node.js, and it helps you: 
<br>
Install JavaScript libraries/packages. 
<br>
Manage dependencies in your project
<br>
Run scripts like starting your app or testing
<br>
Share your own packages with the world (optional)


# vite :
Vite (pronounced "veet") is a modern front-end build tool and development server. It’s an alternative to Create React App (CRA), and it's much faster because of how it handles development and builds.
Vite produces Quick and small bundle size. It dynamically imports the module.
When a file is requested by the browser, Vite transforms it (e.g.,Convert React into JS), then serves it.

#   Steps How to Create a React App with Vite :

```bash

//To create a react project

 npm create vite@latest projectName  // here latest means vite new version

select a framework :
React

select variant:
javascript
     
   now run This:
   cd projectName
   npm Install
   npm run dev  //This command is use for start dev server

   after run : npm run dev
   
   a link of your project is provide like this:

    http://localhost:5173/


//To run the project using vite

npm run dev

//To run the project using CRA

npm start

```

# structure of React project :

```bash

node_modules : contains all the installed modules required for the project.

public Directory : contains the static files that do not change.

src Directory/ : Main folder for the React code
Components : Reausable  part of (components) like button,header etc.

assets : Images , fonts and other static files.

styles : CSS or styleSheets

package.json : package.json is a crucial file in any Node.js project that provides metadata about the project and handles the management of its dependencies.

package-lock.json : It provides a detailed snapshot of the entire dependency tree, including the specific versions of each installed package and their sub-dependencies. The main purpose of package-lock.json is to ensure consistent installs across different environments by "locking" the dependency versions.


eslint.config.js : The eslint.config.js file contains your ESLint configuration — rules, plugins, environments, and parser settings — that tell ESLint how to analyze and lint your code.

eslint: ESLint is a tool that automatically checks your JavaScript or TypeScript code for problems.


vite.config.js : It contains vite config.

```
# jsx :

JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React. It allows you to write HTML-like code directly within JavaScript, which makes it easier to create and visualize UI components.

```bash

1. What is JSX?
Definition: JSX determines how the UI will look wherever the component is used.

2. Not HTML: Though it resembles HTML, you're actually writing JSX, which stands for JavaScript XML.

3. Conversion: JSX gets converted to regular JavaScript.

4. Babeljs.io/repl is a tool that allows you to see how JSX is transformed into JavaScript.

5. jsx must have a single parent.

```

In jsx , we can write javascript inside the html element using "{}". Here "{}" indicates js variables,function calls and more.

```bash

const name = 'John';
const greeting = <h1>Hello, {name}!</h1>;

```
In jsx , every html code must be enclosed in some opening and closing tag . This opening and closing tag may be like a <b>div</b> or <b><>...</></b>. It means wrap the element in a single parent.


# How to import Image(jpeg or Image file) :

```bash

import myImage from './image.png';
function App() {
  return <img src={myImage} alt="Example" />;
}


// How to import svg image 
import {ReactComponent as Logo} from './logo.svg';
function App() {
  return <Logo/>;
}


```

# React components :

React components are independent, reusable pieces of UI that define how a part of the user interface should appear and behave.
A React components is a function or class that return jsx .The React components is reusable.

# Types of react components :

1.class components:
<br>
• Stateful: Can manage state.
<br><br>
• Lifecycle: Access to lifecycle methods.
<br><br>
• Verbose: More boilerplate code.
<br><br>
• Not Preferred anymore.

Example:

```bash

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

```
2.function components:

Functional Components:
<br><br>
• Initially stateless which means we are not able to save some value in container like once we set the value to variable and when we dynamically want to change its value eg: onChange(event) then it does not work.
<br><br>
• Can use Hooks for state and effects.
<br><br>
• Simpler and more concise. 
<br><br>
• More Popular.

Example:
 
```bash

function App() {
  return <h1>Hello world</h1>;
}

default export App

```

# In React (and JavaScript in general), there are two main types of imports: 

<b>1.Default Imports:</b> A default import allows you to import the default export from a module. In a module, there can only be one default export.

```bash

// File: App.js
export default function App() {
  return <h1>Hello, World!</h1>;
}

// File: index.js
import App from './App'; // 'App' is the default export of the 'App.js' file

```

<b>Named import :</b>A named import allows you to import specific exports from a module. These exports must be explicitly named in the module. A module can have multiple named exports, and you can import only the ones you need. Named imports must be imported using the same name as the export.
<br>
Note: while importing file or function in this time name of function must enclosed in { }  

```bash

// File: utilities.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// File: index.js
import { add, subtract } from './utilities'; // Importing named exports from the 'utilities.js' file

```

# Dynamic components :

<b>1.Dynamic content:</b> JSX  allows the creation of dynamic and interactive UI components.

<br>
<b>2.Javascript Expression:</b> using {} we can  embed javascript expression directly within jsx.This include  variables,function calls and more.

Example:

```bash

function Hello(){
    let myName = "Nitish"
    return (
        <p>Hello, my name is {myName}</p>
    )
}

export default Hello;

```

# Reausable Components :

Reusable components are self-contained blocks of code that can be used across multiple parts of a web application to maintain consistency, reduce repetition, and improve maintainability.

<b>Why use Reusable components:</b>
<br>
1.Consistency :-  UI elements look and behave the same throughout the app.
<br>
2.Efficiency :- Write once, use anywhere.
<br>
3.Maintainability :-  Fix/update in one place, reflected everywhere.
<br>
Scalability :-  Makes large applications easier to manage.

# Important Point from React Components and CSS Used in React :
<b>Components must be captialized while the lowercase is used for HTML.</b>

<br>
In React, CSS can be directly imported into the component files allowing for modular and components specific styling.

```bash
// we can write inline css in the react like 

<p style={{'background-color':'aqua','width':'100vw','height':'10vh'}} > Hello World </p>

```
 # Bootstrap :

 <b>1. Responsive :</b>Mobile-first design for all device size.
 <br>
 <b>2.components:</b> Pre-styled elements like button and navbars.
 <br>
 <b>3.Customizable:</b> Modify default styled as needed.
 <br>
 <b>4.Cross-Browser:</b>consistent look across browsers.
 <br>
 <b>Open-source:</b>free wit community supports.

 ```bash

 // install Bootstrap in your project

 npm i bootstrap@version

 another Way:

 go to the bootstrap websites and copy this command and paste it in terminal.

 //how to import bootstrap 

 import "bootstrap/dist/css/bootstrap.min.css";


 //you can also install bootstrap globally(means install in your system)

  npm i -g bootstrap@version 

 ```

 # Bootstrap cdn:
  
 ```bash

  // you can also use bootstrap CDN in html file

  <head>
     <link rel=""  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css
">
  </head>

  ```








