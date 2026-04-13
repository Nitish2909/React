import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(()=>{
     getData()
  },[index])

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <a href={elem.url} target="_blank">
          <div key={idx}>
            <div className="h-55 w-60 overflow-hidden rounded-xl">
              <img
                className="-full w-full object-cover"
                src={elem.download_url}
              />
            </div>
            <h2 className="font-bold text-xl ml-12 ">{elem.author}</h2>
          </div>
        </a>
      );
    });
  }

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(count+1)
  //   },1000)
  // })
  return (
    <div>
      {/* <button
        onClick={getData}
        className="bg-green-500 px-8 py-3 font-bold text-2xl rounded m-5"
      >
        Get Data
      </button> */}
      <div className="flex flex-wrap gap-5 ">{printUserData}</div>
      <div className="flex justify-center items-center gap-5">
        <button 
        onClick={()=>{
          if(index >1){
            setIndex(index-1)
          }

        }}
        className="bg-amber-400 px-4 py-2 text-xl font-bold rounded-2xl active:scale-95">
          Prev
        </button>
         <button
         onClick={()=>{
          setIndex(index+1)
         }}
         className="bg-amber-400 px-4 py-2 text-xl font-bold rounded-2xl active:scale-95">
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
