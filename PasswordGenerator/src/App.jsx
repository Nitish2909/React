import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <div className="bg-gray-400 w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8">
      <h1 className="text-4xl text-center ">Password Generator</h1>
      <div className="flex  text-orange-500 gap-4 mt-4 overflow-hidden">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="w-full rounded-lg text-center text-xl bg-white "
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 rounded-lg text-white mx-auto p-4"
        >
          Copy
        </button>
      </div>
      <div className="mt-4">
        <input
          type="range"
          min={8}
          max={50}
          onChange={(e) => setLength(e.target.value)}
          value={length}
        />
        <label className="ml-1">Length : {length}</label>

        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberinput"
          onChange={(e) => setNumberAllowed(e.target.value)}
          className="ml-2"
        />
        <label className="ml-1">Numbers</label>

        <input
          type="checkbox"
          defaultChecked={characterAllowed}
          id="characterinput"
          onChange={(e) => setCharacterAllowed(e.target.value)}
          className="ml-2"
        />
        <label className="ml-1">Characters</label>
      </div>
    </div>
  );
};

export default App;
