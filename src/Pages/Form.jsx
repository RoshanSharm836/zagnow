import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Popup from "../Component/Popup";

export default function Form() {
  const [output, setOutput] = useState("");
  const [Active, setActive] = useState(false);
  const [loader, setLoader] = useState(false);
  function handle(e) {
    setLoader(true);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      try {
        JSON.parse(reader.result);
        setTimeout(() => {
          setOutput(reader.result);
          setLoader(false);
        }, 2000);
      } catch (error) {
        alert("Invalid JSON file or format");
      }
    };
  }
  function handlesubmit(e) {
    e.preventDefault();
    setActive(true);
  }
  return (
    <div className="form w-11/12 m-auto ">
      <div className="flex items-center gap-5 py-5 pfont-semibold">
        <NavLink to={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5M5 12L12 5M5 12L12 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NavLink>
        <h1 className="text-xl font-semibold">Submit form</h1>
      </div>
      <form onSubmit={handlesubmit}>
        <label className="text-lg m-">Full name</label>
        <input
          className="p-4 bg-gray-100"
          type="text"
          placeholder="Full name"
        />
        <label className="text-lg m-">Email</label>
        <input className="p-4 bg-gray-100" type="email" placeholder="Email" />
        <label className="text-lg m-">Upload JSON File</label>
        <input
          className="p-4 bg-gray-100"
          type="file"
          accept=".json"
          onChange={handle}
        />

        <label className="text-lg m-">File Contents</label>
        <pre className="output relative">
          {loader ? (
            <div>
              <span class="loader "></span>
              <span className="verfiy">validating...</span>
            </div>
          ) : (
            output
          )}
        </pre>
        <input
          className="p-3 w-11/12 m-auto my-10 rounded-full bg-blue-500 text-white"
          type="submit"
          value="submit"
        />
      </form>
      {Active ? <Popup setActive={setActive} setOutput={setOutput} /> : ""}
    </div>
  );
}
