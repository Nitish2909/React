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

  # React Fragments :

  Allows grouping of multiple elements without extra dom nodes(like div).
  <br>
  Returns multiple elements without a wrapping parent.

  ```bash
  <React.Fragment>
 <h2>Hello</h2>
 <p>World</p>
</React.Fragment>

or
<>... </>

```

# map method :

1. Purpose:  Render list from array data.
<br>
2. It transfers the array item into jsx.
<br>
3. It also assigns unique key properties for optimized re-rendering. Because if we do not assign uinque key     then React will update the whole list while adding new element into the array.
<br>
4.key prop : Assign  unique key for optimized re-renders

```bash

let items = ['item1','item2'];
<ul>
{items.map(item => <li key={item_id}>{item}</li>)}
</ul>

```

# Conditional Rendering:

<b>Rendering:</b>In React, rendering refers to the process of displaying UI elements on the screen based on the current state and props of components.

1.Conditional Rendering :
<br>
• Displying contents on certain conditions.
 <br>
• Allows for dynamic user interface.
 <br><br>
2. Methods:
<br>
• if-else statements:- choose between two blocks of content.
<br>
• Ternary operator:- Quick way to choose between two  options
<br>
• Logical operator :- useful for rendring content when a condition is true.

Example:

```bash

// we can use the if-else statement  and it is chosed b/w two blocks of contents.

if(items.length ===0 ){
    return <h2>Items list is empty</h2>
}
else{
 return( <ul>
    {items.map(item => <li key={item_id}>item</li>)}
    </ul>
 )
}


// we can use ternary operator and it is quick option to choose b/w two options.
{items.length ===0?<h2>Items list is empty</h2>:null;}

// Logical operators and it is useful for rendering content when a condition is true.
{items.length ===0 && <h2>Items list is empty</h2>}
// In this case if the first condition is false then other condition will not checked and if the first conditon is true, only then other conditonal will checked and in this case statement inside the "h2" element will be rendered.

```

# Passing data via props :
props(short for properties) are used to pass data from a parent component to a child component in the form of objects. It is unidirectional (downwards).
<br>
They allow components to communicate with each other.
<br>
Props are immutable inside the child component.
<br>
Props help make components reusable and dynamic.
<br>

Example:

```bash
// Parent Component
function App() {
  return <Welcome name="Nitish" />;
}

// Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}


//output:

Hello, Nitish!

```
Explanation of this Example:

• The <b>App</b> component is calling the <b>Welcome</b> component.
<br>
• It passes a <b>prop</b> named <b>name</b> with the value <b>"Nitish"</b>.
<br>
• The <b>Welcome</b> component receives the <b>props</b> object.
<br>
• It accesses <b>props.name</b> and renders:
<br>
 Hello, Nitish!

 <b>By using Destructring</b>

 ```bash
 //You can make the Welcome component cleaner using destructuring:

 function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

```
# css Modules :
1.Localized class names to avoid global conflicts.
<br>
2.Styles are scoped to individual components.
<br>
3.Automatically generates uniquely class name.
<br>
4.Promotes modular and maintainable CSS.

# How to Use CSS Modules in React 

1. Create a CSS Module file.
<br>
Use .module.css extension:

```bash

/* Welcome.module.css */
.title {
  color: blue;
  font-size: 24px;
}

```
2. Import and use in your component

```bash
// Welcome.js
import styles from './Welcome.module.css';

function Welcome() {
  return <h1 className={styles.title}>Hello, Nitish!</h1>;
}

export default Welcome;

```
• styles.title refers to the .title class inside Welcome.module.css
<br>
• React automatically transforms the class name to a unique identifier behind the scenes, like:
.Welcome_title__3eTqG

# Passing childern via props:

In React, children refers to the content you pass between the opening and closing tags of a component.
<br>
1. children is a special props for passing elements into components.
<br>
2. Used for flexible and reusable component design.
<br>
3. Accessed with "props.children". 
<br>
4. Can be any content : string, number, jsx, components.
<br>

Exampple:

```bash
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>Hello, Nitish!</h1>
      <p>This content is passed as children.</p>
    </Wrapper>
  );
}

```
Explanation of this Example:
<br>
<b>Wrapper Component</b>
<br>
1. It is a custom component.
<br>
2.It receives props (properties) from the parent (in this case, <App />).
<br>
The special prop props.children holds whatever is placed between <Wrapper> ... </Wrapper> in the parent component.
<br><br>
<b>App Component</b>
<br>
1.It uses the Wrapper component and passes some JSX (<h1>...</h1> and <p>...</p>) between its opening and closing tags.
<br>
2.That JSX becomes props.children in the Wrapper component.

# Handling Events:
1. React events use camelCase, e.g., onClick.
<br>
2. Uses synthetic events, not direct browser events.
<br>
3. Event handlers can be functions or arrow functions.
<br>
4. Use onChange for controlled form inputs.
<br>
5. Avoid inline arrow functions in JSX for performance.

```bash

// onClick Event function
function eventHandler(event){
  console.log("event handled");
  console.log(event.target.value);
}
<button onclick={(event)=>eventHandler(event)}></button>


// onChange Event function
<input type="text" onchange={(event)=>eventHandler(event)}>
//here onChange() means that an event is occured when user type any key to give the input in the input field.


```

# Managing State :
Managing state in React means keeping track of data that changes over time and causes the UI to re-render when updated — like user input, toggles, counters, fetched data, etc.
<br>
1. State is a built-in object used to store dynamic data in a React component.
<br>
2. State is local and private to the component.
<br>
3. State changes cause the component to re-render.
<br>
4. For functional components, use the useState hook.
<br>
5. React Functions that start with word use are called hooks.
<br>
6. Hooks should only be used inside components.
<br>
7. Parent components can pass state down to children via props.
<br>

# How to manage state:

<b>1. Managing Local State with useState() hooks(for functional components)</b>
<br>
<b>Syntax:</b>

```bash

const [state, setState] = useState(initialValue);

//Here the Explanation of this syntax:,
  const[state.setState] ->Array destructuring. "state" holds the current value, and "setState" is a function to update it.
  useState(initialValue) ->React Hook that initializes the state with initialValue.

  ```

  Example:

  ```bash

  import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initialValue is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

```

Example 2: Managing a String:

```bash
const [name, setName] = useState('');

<input
  value={name}
  onChange={(e) => setName(e.target.value)}/>

```

Example 3: Managing an Object:

```bash

const [user, setUser] = useState({ name: '', age: 0 });

setUser({ ...user, name: 'Nitish' });

```
<b>Managing Multiple States</b>

```bash

const [name, setName] = useState('');
const [age, setAge] = useState(0);

```

# state vs Props

<b>State: </b>
<br>
• Local and mutable data within a component.
<br>
• Initialized within the component.
<br>
• Can change over time.
<br>
• Causes re-render when updated.
<br>
• Managed using useState in functional components.
<br>
• state is accessed by 	useState() in functional components.
<br><br>
<b>Props:</b>
• Passed into a component from its parent.
<br>
• Read-only (immutable) within the receiving component.
<br>
• Allow parent-to-child component communication.
<br>
• Changes in props can also cause a re-render.
<br>
•  props is accesssed by Passed as function parameters or props.name.

# React-icon Library:
1. You can use a lot of icons without managing them.
<br>
2. Install Package:
<br>
npm install react-icons –save
<br>
3 .Go to react icon website for icon.
<br>
4. Use icon:
<br>
import {IconName} from "react-icons/fc";

# How React Works:

<b>Root Component: </b>
<br>
• The App is the main or root component of a React application.
<br>
• It's the starting point of your React component tree.
<br>
<b>Virtual DOM :</b>
React uses a Virtual DOM — a copy of the actual DOM in memory.
<br>
• When something changes (like a button click), React:
<br>
1.Updates the Virtual DOM.
<br>
2.Compares it with the previous version (using a diffing algorithm).
<br>
3.Applies only the necessary changes to the real DOM.
<br>

# React Libraries :
<b>React and ReactDOM:</b>
<br>
• The actual updating of the browser's DOM isn't done by React itself.
<br>
• It's handled by a companion library called react-dom.
<br>
<b>Root Element:</b>
<br>
• The root div acts as a container for the React app.
<br>
• The script tag is where the React app starts executing.
<br>
• If you check main.jsx, the component tree is rendered inside this root element.
<br>
<b>Strict Mode Component:</b>
<br>
• It's a special component in React.
<br>
• Doesn't have a visual representation.
<br>
• Its purpose is to spot potential issues in your React app.
<br>
<b>Platform Independence:</b>
<br>
• React's design allows it to be platform-Independent.
<br>
• While react-dom helps build web Uls using React, React Native can be used to craft mobile app UIs.

# React Vs Angular and Vue.js

```bash

React, Angular, and Vue:
React is a library while Angular and Vue.js are frameworks. 
React focuses on UI; Angular and Vue.js offer comprehensive tools for full app development.


Library vs. Framework:

A library offers specific functionality.

A framework provides a set of tools and guidelines.

• In simpler terms: React is a tool; Angular and Vue.js are toolsets.

React's Specialty:
React's main role is crafting dynamic, interactive UIs.
• It doesn't handle routing, HTTP calls, state management, and
more.

React's Flexibility:
• React doesn't dictate tool choices for other app aspects. Developers pick what fits their project best.

About Angular and Vue.js:
Angular, developed by Google, provides a robust framework with a steep learning curve.
Vue.js is known for its simplicity and ease of integration, making it beginner-friendly.

```

# Using Form: 
<b>1. State Management:</b> 
Each input's state is stored in the component's state.
<br>
<b>2. Handling Changes:</b>
 Use onChange to detect input changes.
 <br>
<b>3. Submission: </b>
Utilize onSubmit for form submissions and prevent default with
event.preventDefault().
<br>
<b>4. Validation:</b>
Implement custom validation or use third-party libraries.

# useRef :
useRef is hook in react.Here the main point about useRef.
<br>
1. useRef allows access to DOM elements and
retains mutable values without re-renders.
<br>
2. Used with the ref attribute for direct DOM
interactions.
<br>
3. Can hold previous state or prop values.
<br>
4. Not limited to DOM references; can hold any
value.
<br>
5. Refs can be passed as props also.
<br> 

<b>Syntax of useRef :</b>

```bash

const refObject = useRef(initialValue);

//Explanation of  this syntax:
refObject : You're storing the returned ref object in a constant variable ( for example myRef) so you can access it later.

useRef(initialValue): useRef is a hook.

initialValue:
It's the initial value you want to store inside the ref.
Can be anything: a number, string, object, DOM element, etc.

```
<b>Why we use myRef.current in React</b>
<br>

```bash
• When you call this:
const myRef = useRef(initialValue);

• React gives you back a ref object that looks like this:

myRef = { current: initialValue }

So, to access or change the actual value inside the ref, you must use:

myRef.current

 for example:

 console.log(myRef.current);      // Read value
 myRef.current = 'new value';     // Update value

 ```

 # Update state from Previous State :

 <b> spread operators :</b>
 <br>
 Used to maintain immutability while updateing array or objects . But sometime it gives old values even after updation. It is caused because React is async in nature.

 ```bash
 
let items = ["item1","item2"];
let newOne = "item3";
let newItem = [...items,newOne]

```
<b>Functional updates :</b>
To avoid unexpected results, use:

```bash

const currentValue = [{ name: "John", dueDate: "23-02-2025" }];

const newValue = (currentArray) =>{
  return  [...currentArray, { name: "David", dueDate: "23-02-2025" }]
};

const updatedArray = newValue(currentValue);

console.log(updatedArray);

```

# Context Api :
The Context API in React provides a way to share data globally between components without passing props manually at every level (also called prop drilling).

# Why is Context API used?
Context API solves the problem of prop drilling in React. Prop Drilling occurs when data is to be passed between multiple layers before finally sending it to the required component. This makes the application slower. This problem is solved by Context API as it creates global variables to be used throughout the application without any middle components involved. It is also easier to use than React Redux.
<br>
<b>For Example:</b>

```bash
<App>
  <Parent>
    <Child>
      <GrandChild />
    </Child>
  </Parent>
</App>

```
If <b>GrandChild</b> needs data (like a user's theme, name, or language), you'd usually pass it from <b>App → Parent → Child → GrandChild</b>. That’s prop drilling — and it gets messy.
<br><br>
<b> Context API</b> solves this problem by passing the data directly to any child, no matter how deep.

#  How to Use Context API (Step-by-Step):
1. first to create context:

```bash
import { createContext } from 'react';

const UserContext = createContext();

```
2. Provide Context Value (using Provider):

```bash

function App() {
  const user = { name: 'Nitish', role: 'Student' };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

```
<b>UserContext.Provider</b> wraps components that need access to the data.
<br>
Any component wrapped by the Provider can access the value provided. 
<br>
value={user} is the data you're sharing globally.
<br><br>
 3. Consume Context (anywhere inside the tree):
 <br>
<b>Using useContext Hook (Recommended)</b>

```bash
import { useContext } from 'react';

function GrandChild() {
  const user = useContext(UserContext); // access value directly

  return <h1>Hello, {user.name}!</h1>;
}

```
 No need to pass user via props .




























