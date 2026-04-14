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

```
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

```
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






