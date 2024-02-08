"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  //for adding all the tasks in a container make a empty array
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    // to stop the auto reload function 
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);

    console.log(title)
    console.log(desc)
    console.log(mainTask)
    settitle("")
    setdesc("")
  }
  //delete handling
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  //showing the tasks in the screen
  let renderTask = <h2 className="text-3xl flex  justify-center">No task available</h2>
  if (mainTask.length > 0) {
  renderTask = mainTask.map((t, i) => {
    
    return (
        //i is the unique identification 
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-4 w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button onClick={()=>deleteHandler(i)} className="bg-red-400 font-bold text-white rounded-xl p-5 mb-4">Delete</button>
        </li>
      )
    })
}

  return (
    <>
      <h1 className="bg-black text-white text-5xl  text-center  ">
        Asif's Todo List
      </h1>

      {/* creating form for the input */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter title"
          className="border-red-300 m-4 text-2xl p-4 border-[4px] rounded-xl"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="border-red-300 m-4 text-2xl p-4 border-[4px] rounded-xl"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />

        <button className="bg-black text-white m-4 p-5 rounded text-2xl font-bold">
          Add task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
        {renderTask}
        </ul>
      </div>
    </>
  );
};

export default page;
