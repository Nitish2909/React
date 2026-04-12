import React, { useState } from "react";
const App = () => {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   details: "",
  // });
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTask([...task, setFormData])
    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    console.log(task);

    setTitle("");
    setDetails("");
  };

const handleDelete = (index) => {
  setTask(prev => prev.filter((_, i) => i !== index));
};
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <div className="h-screen lg:flex  ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 lg:w-1/2  sm:w-full  p-10 w-1/2 "
      >
        <label>Title :</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Enter Yout Notes Title"
          className=" w-full p-4 border backdrop-blur-sm outline-0"
        />
        <label>Title :</label>
        <textarea
          type="text"
          name="details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          placeholder="Notes Details"
          className=" px-5 w-full font-medium h-40 py-2 flex flex-row border backdrop-blur-sm outline-0"
        ></textarea>
        <button
          onSubmit={handleSubmit}
          className="bg-lime-500 p-5 font-bold text-2xl rounded-2xl w-full"
        >
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2   w-full ">
        <div className="flex flex-wrap gap-4 p-5">
          {task.map((elem, idx)=>{
            
            return <div key={idx} className=" w-full rounded-2xl bg-gray-400 p-5 sm:w-[48%] lg:w-[30%] ">
              <h2 className="text-2xl font-bold pl-8 break-words flex ">{elem.title}</h2>
              <p className="text-xl font-semibold leading-tight break-words ">{elem.details}</p>
              <div>
                <button onClick={()=> handleDelete(idx)} className="bg-red-500 py-2 px-6 ml-4 mt-5 font-bold text-xl rounded-full cursor-pointer active:scale-95 ">Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
