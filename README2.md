# hooks:

Hooks are special function that let you use state and other react features inside functional components.Before hooks these features only available in class components.
<br>
In Simple words we can say that Hooks allow functions to have access to state and other React features without using classes.
<br>

<b>Why hooks are used :</b>

```bash
1. Use state in functional components.

2. Avoid class components (simpler code).

3. Reuse logic easily.

4. Better code readability & maintainability.

5. Handle lifecycle methods (mount, update, unmount).

```

<b>Rules of hooks :</b>

```bash
1. call hooks only at top level.

2. call mhooks only react functions.

3. Don't use hooks inside loops and conditions.

```

<b>Here are some hooks that are mostly used in react</b>

<img src="./Images/hooks.png" alt="">

# State in React :

State is a built-in object which is used to store data that can change over time and control the UI.
<br>
In Simple terms State is like a switch that controls UI behavior. When it changes, the UI updates automatically.
<br>
When state changes -> React re-renders the component.
<br>

<b>Simple Real World Example:</b>

```bash
  Think of a room light

   ON -> Light is visible
   OFF -> Light is hidden

  This changing value = state

```

<b>React Example :</b>

```bash

import { useState } from "react";

function Light() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <h1>{isOn ? "Light ON" : "Light OFF"}</h1>

      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </>
  );
}


Explanation:

isOn -> state (stores ON/OFF)

setIsOn -> updates state

Button click -> changes state

UI updates automatically

```

# useState :

<b> 1. Basic Syntax:</b>

```bash
import { useState } from "react";

const [state, setState] = useState(initialValue);

Here,

state -> It is like a variable that store current value.

setState -> It is used to set or update value. Means we can set a new value.

```

<b>2. Example </b>

```bash
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

When button clicks -> state updates -> UI updates.
<br>

<b>3. Types of State :</b>

```bash

1. Number state:

const [count, setCount] = useState(0);

2. String State:

const [name, setName] = useState("");

3. Boolean State:

const [isOpen, setIsOpen] = useState(false);

4. Array State:

const [items, setItems] = useState([]);

5. Object State:

const [user, setUser] = useState({ name: "", age: 0 });

```

<b>4. Updating State :</b>

```bash

1. Simple Update:

setCount(count + 1);

2. Functional Update (Best Practice)

setCount(prev => prev + 1);

```

<b>5. Updating Object State</b>

```bash

setUser(prev => ({
  ...prev,
  name: "Nitish"
}));

```

<b>6. Updating Array State</b>

```bash

setItems(prev => [...prev, "New Item"]);

```

<b>7. State with Forms</b>

```bash

const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

```

# Form Handling :

Form handling in React means managing user input using state, handling submission, and validating data.
<br>
Mostly form handling is done by following this:

```bash

1. useState -> This is used to store input vlaue of form.In simple words we can say that useState is used to store and manage form data.
This is used in form To save user input , To make input controlled by React .

2. onChange -> onChange is an event that runs when input value changes.

3. onSubmit -> onSubmit is an event that runs when form is submitted.

```

<b>Example :</b>

```bash
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

```

# Two Way Data Binding :

Two-way data binding means data flows between UI and state in both directions.
<br>
In React, it is achieved using:
<br>
useState
<br>
onChange

<img src="./Images/img.png" alt="">
<b>Example :</b>

```bash
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
    </>
  );
}

```

# Local Storage:

Local Storage is a type of Web Storage that is used to store data in the user's browser.
Local Storage stores the data permanently (until manually cleared) even after page reload , browser close.Data Store in Local Storage as key value pair. <b>Always remember data store in local storage as String.</b>
<br>

<b>Use Case :</b>

```bash
1. Save user login info

2. Theme (dark/light mode)

3. Cart items

```

<b>Methods of Local Storage :</b>

```bash
1. localStorage.setItem("key", "value")   => This method is used to set data in local storage.

Example:
localStorage.setItem("name", "Nitish");

2. localStorage.getItem("key");   => This method is used to get data from local storage.

Example:
localStorage.getItem("name");

3. localStorage.removeItem("key"); => This method is used to remove or delete data from local storage.

Exammple:
localStorage.removeItem("name");

4. localStorage.clear();  => This method is used to clear all data from local storage.

Example:
localStorage.clear();

```

<b>If You want to store object in localStorage</b>
<br>
Objects and arrays are stored using JSON.stringify() and retrieved using JSON.parse() because localStorage only supports strings.

```bash
const user = {
  name: "Rohan",
  age: 21
};

// Store
localStorage.setItem("user", JSON.stringify(user));

// Get
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name); // Rohan

```

<b>If You want to store Array in localStorage</b>

```bash
const user = {
  name: "Nitish",
  age: 21
};

// Store
localStorage.setItem("user", JSON.stringify(user));

// Get
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name); // Nitish

```

# API calls in React :

API (Application Programming Interface) is a way to get or send data between frontend (React) and backend/server.
<br>
For Example :
<br>

1. Fetch users.
   <br>
2. Send ligin Data.
   <br>
3. Get Products.
   <br>

<b>Why API Calls are Used?</b>

```bash
1. To get dynamic data

2. To connect frontend with backend

3. To store/fetch data from database

```

<b>How to Make API Calls in React?</b>
There are mainly two ways or method that is used to make API Calls in React.

```bash
1. fetch() -> This is an built in function or method

2. axios -> This is a third party library that is used to call an API in  react.

```

<b>1. Using fetch() (Basic)</b>

```bash
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

```

<br>
Flow of this code:
<br>
1. Component loads
<br>
2. useEffect runs
<br>
3. API call happens
<br>
4. Data stored in state
<br>
5. UI updates

<b>Using async/await (Best Practice)</b>

```bash
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setData(data);
  };

  fetchData();
}, []);

```

<b>2. Using Axios</b>

<b>Install axios library</b>

```bash
npm install axios
```

<br>

<b>Example:</b>

```bash
import axios from "axios";

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setData(res.data));
}, []);

```

# useEffect hook :

useEffect is a React Hook used to handle side effects in a component.
<br>
In Simple words we can say that Think of useEffect like "Do something after UI render".
<br>
what are side effects here?
<br>
Things that happen outside rendering UI, like:

```bash
API calls

Fetch data

Timer / setInterval

DOM updates

Event listeners

```

<b>Syntax:</b>

```bash
useEffect(() => {
  // side effect code
}, [dependencies]);


//First argument -> function (effect)
//Second argument -> dependency array

```

<b>There are 3 main cases of useEffect</b>
<br>

<b>1. Run Only Once (On Mount):</b>

```bash
useEffect(() => {
  console.log("Component Mounted");
}, []);


            // It Runs only once when component loads. mostly used for api call.

```

<b>2. Run on State Change:</b>

```bash
useEffect(() => {
  console.log("Count changed");
}, [count]);

              //Runs when count changes

```

<b>3. Run on Every Render:</b>

```bash
useEffect(() => {
  console.log("Runs every time");
});


        //No dependency array -> runs on every render

```

# react-router-dom :

React Router DOM is a library that enables client-side routing in React applications. It allows you to navigate between different components/pages without reloading the entire webpage, making your app behave like a Single Page Application (SPA).
<br>
In Simple words we can say that It helps you create multiple pages in React without refreshing the browser.
<br>

<b>Why React Router is Used?</b>

```bash
Without React Router:

    ->  Every navigation -> full page reload
    ->  Slow performance
    ->  Bad user experience

With React Router:

    -> Fast navigation
    -> No reload
    -> Maintains state
    -> Better UX

```

<b>Installation</b>

``bash
npm install react-router-dom

````
<b>Basic Concepts</b>
<br>

<b>1. BrowserRouter (Wrapper)</b>
<br>
Wraps your whole app.

```bash
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>

````

It enables routing in your app.
<br>

<b>2. Routes and Route</b>
<br>
Used to define paths and components.

```bash
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>

       //Here,
       //path = URL,
       //element= Component to Render

```

<b>Link (Navigation)</b>

```bash
import { Link } from "react-router-dom";

<Link to="/about">Go to About</Link>

```

<b> 4. useNavigate (Programmatic Navigation)</b>

```bash
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/about");

```

<b>Example (Basic App)</b>

```bash
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

```

<b>Intermediate Concepts</b>
<br>

<b>1. Dynamic Routing (URL Params)</b>

```bash
<Route path="/user/:id" element={<User />} />

```

<br>

Access param:

```bash
import { useParams } from "react-router-dom";

const { id } = useParams();


// URL: /user/101 → id = 101

```

<br>

<b>2. Nested Routes</b>

```bash
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

```

<br>
Inside Dashboard:

```bash
import { Outlet } from "react-router-dom";

<Outlet />

```

<br>

<b>3. 404 Page (Not Found)</b>

```bash
<Route path="*" element={<h1>Page Not Found</h1>} />

```

<br>

<b>4. NavLink (Active Styling)</b>

```bash
import { NavLink } from "react-router-dom";

<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
  About
</NavLink>


//Automatically detects active route

```

<b>Advanced Concepts</b>
<br>

<b>1. Protected Routes (Authentication)</b>

```bash
const ProtectedRoute = ({ children }) => {
  const isAuth = true;

  return isAuth ? children : <Navigate to="/login" />;
};

```

<br>
Usage:

```bash
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

```

<br>

<b>2. useLocation</b>

```bash
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.pathname);


//Gives current URL info

```

<br>

<b>3. Passing Data Between Routes</b>

```bash
navigate("/about", { state: { name: "Nitish" } });

```

Receive:
<br>

```bash
import { useLocation } from "react-router-dom";

const location = useLocation();
console.log(location.state.name);

```

<br>

<b>4. Lazy Loading (Performance Optimization)</b>

```bash
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));

<Suspense fallback={<h1>Loading...</h1>}>
  <About />
</Suspense>

```

Loads component only when needed.

# ContextAPI :

The Context API in React is a built-in feature that allows you to share data (state) across multiple components without passing props manually at every level.
<br>
In simple words we can say that It helps you avoid "prop drilling" (passing props from parent -> child -> child -> child…).
<br>

<b>Core or Basic Concepts</b>
<br>
There are 3 main steps:
<br>

<b>1. Create Context</b>

```bash
import { createContext } from "react";

export const UserContext = createContext();

```

<b>2.Provide Context (Provider)</b>

```bash
<UserContext.Provider value={{ user: "Nitish" }}>
  <App />
</UserContext.Provider>

// Makes data available to all children

```

<b>3. Consume or use Context</b>

```bash
import { useContext } from "react";
import { UserContext } from "./UserContext";

const user = useContext(UserContext);

```

<b>Basic Example</b>
<br>

<b>Step 1: Create Context</b>

```bash
export const ThemeContext = createContext();

```

<b>Step 2: Wrap App</b>

```bash
<ThemeContext.Provider value={{ theme: "dark" }}>
  <App />
</ThemeContext.Provider>
```

<b>Step 3: Use in Child</b>

```bash
const { theme } = useContext(ThemeContext);

return <h1>{theme}</h1>;

```

<b>Intermediate Concepts</b>
<br>

<b>1. Dynamic State with useState</b>

```bash
const [theme, setTheme] = useState("light");

<ThemeContext.Provider value={{ theme, setTheme }}>
  <App />
</ThemeContext.Provider>

```

<b>2. Multiple Contexts</b>

```bash
<AuthContext.Provider value={auth}>
  <ThemeContext.Provider value={theme}>
    <App />
  </ThemeContext.Provider>
</AuthContext.Provider>

```

<b>3. Custom Hook (Best Practice)</b>

```bash
export const useUser = () => {
  return useContext(UserContext);
};

```

usage:

```bash
const { user } = useUser();

```

# Component based architecture :

Component-Based Architecture is a software design approach in which an application is built using small, independent, and reusable units called components. Each component handles a specific part of the functionality and can be developed, tested, and maintained separately. These components interact with each other to form a complete system, making development more organized, scalable, and efficient. It is widely used in modern frameworks like React and Angular.

Example:

```bash

const Welcome = () => {
 return <h1>Welcome to My Website</h1>;
}
export default Welcome;



Usage:

import Welcome from './Welcome';

const App = () => {

 return (
 <div>
 <Welcome />
 </div>
 );
}


```

<b>Types of Components </b>

1. Functional Component ->
   <br>
   A Functional Component is a simple JavaScript function that returns JSX (HTML-like code). It is lightweight, easy to write, and mostly used in modern React applications.

Syntax:

```bash
variable ComponentName = () => {
   return <h1>Message</h1>;
}

```

Exammple:

```bash
import React from "react";

// Functional Component
function Welcome() {
  return <h1>Hello Nitish!</h1>; // Display heading
}

export default Welcome;

```

2. Class Components ->
   <br>
   A Class Component is a JavaScript class that extends React.Component. It can store data using state and includes lifecycle methods.

Syntax:

```bash
class ComponentName extends React.Component {
   render() {
      return <h1>Message</h1>;
   }
}

```

Example:

```bash
import React, { Component } from "react";

// Class Component
class Welcome extends Component {
  render() {
    return <h1>Hello Nitish!</h1>; // Display heading
  }
}

export default Welcome;

```

# State Management with Redux :

State management with Redux refers to handling and controlling the data (state) of an application in a predictable and centralized way. Redux stores all application data in a single object called the store, making it easier to manage, debug, and track changes. It follows a unidirectional data flow using actions and reducers, which ensures consistency and avoids unexpected behavior in complex applications, especially in frameworks like React.

<b>main components of redux :</b>

1. Store -> The Store is the central place where the entire application state (data) is stored.The main purpose of store is Holds application data, Provides access to state, Allows state updates.

Example:

```bash
const store = createStore(reducer);

```

2. Action -> An Action is a JavaScript object that describes what operation should happen.The main purpose of actions Sends information to reducer, Tells Redux what to update.

Example:

```bash

// Action object
{
  type: "INCREMENT"
}

```

3. Reducer -> A Reducer is a function that changes the state according to the received action.The Purpose of Reducer Updates state, Returns new state.

Example:

```bash
function reducer(state, action) {
   return newState;
}

```

<b>A full Example of state management with redux :</b>

````bash

//Import redux
const { createStore } = require("redux")

//1. initial State
const initialState = {
  count: 0
}

// 2. Reducer Function
// It takes current state and action, and returns new state

function counterReducer(state= initialState, action){
  switch(action.type){
    case "INCREMENT":
       return { count: state.count + 1 }; // increase count

    case "DECREMENT":
      return { count: state.count - 1 }; // decrease count

    default:
      return state; // return current state if no match
  }

}

// 3. Create Store
const store = createStore(counterReducer);

// 4. Subscribe to store (runs when state changes)
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

// 5. Dispatch Actions
store.dispatch({ type: "INCREMENT" }); // count = 1
store.dispatch({ type: "INCREMENT" }); // count = 2
store.dispatch({ type: "DECREMENT" }); // count = 1

```

# Code Spliting and Lazy Loading in React?
Code Splitting and Lazy Loading is an important techniques used in modern web development to improve website performance.They are specially useful in a large Single Page Applications (SPAs) built using framework like React and Angular.This techniques reduce the initial Loading time of a web application and improve user experience.
<br>

<b>1. Code Splitting</b>
<br>
Code Splitting is a performance optimization technique where your JavaScript bundle is divided into smaller chunks instead of sending one large file to the browser.
Normally, when you build a React or web app, everything gets bundled into a single file (e.g., main.js).
This can become very large, slowing down your app's initial load time.
Code Splitting solves this by Breaking code into separate bundles (chunks) ,
Loading only the required code at the right time.
<b>In simple words we can say that code Splitting is a A build-time process where bundlers (like  Vite) split code into multiple bundles that can be loaded dynamically.</b>
<br>

<b>2. Lazy Loading :</b>
<br>
Lazy Loading is a technique where components or resources are loaded only when they are actually needed, not at the initial page load.
It is usually implemented using Code Splitting.
<br>

Example:

<b>1. Simple Example With Code Splitting + Lazy Loading</b>

```bash
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
  return (
    <div>
      <h1>My App</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;

````

<b>Explanation :</b>
<br>

1. React.lazy() -> Splits the code into a separate chunk (small chunks).
   <br>
2. import("./Dashboard") -> Dynamic import (creates new bundle).
   <br>
3. Suspense -> Shows fallback UI while loading.
   <br>

<b>2. Routing Based Lazy Loading </b>
Routing Based lazy loading mostly used in real world application to Load pages only when user visits them.

```bash
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading Page...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

```

# Caching Strategies :

Caching strategies are techniques used to store frequently accessed data in a temporary storage area (cache) so that future requests can be served faster. Instead of fetching data repeatedly from slow sources like databases or servers, cached data is reused, improving performance, reducing latency, and saving resources. These strategies are widely used in web applications, operating systems, and databases to enhance speed, efficiency, and user experience.

# Optimizing Images and Assets:

Optimizing images and assets means reducing the size and improving the efficiency of images, videos, CSS, JavaScript, and other files used in a website or application without losing quality. This process helps webpages load faster, reduces bandwidth usage, and improves user experience and performance. Techniques include compression, resizing, using modern formats, and minimizing unnecessary data so that assets are delivered quickly and efficiently.
