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


