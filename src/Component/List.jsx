import React, { useState } from "react";
import { datalist } from "../MOCK_DATA";
import Pagenation from "./Pagenation";
import Table from "./Table";
export default function List() {
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState("");

  const Indexoflast = page * limit; // last index (end)
  const IndexofFirst = Indexoflast - limit; // first index (start)
  const Current = // if filter is active then arr or full data show
    arr.length === 0
      ? datalist?.slice(IndexofFirst, Indexoflast)
      : arr?.slice(IndexofFirst, Indexoflast);
  // console.log(IndexofFirst, Indexoflast);
  console.log(value);

  function handlesort(e) {
    // filteing data
    const data = datalist.filter((el) => {
      if (el.new === e.target.value) {
        return el;
      }
    });
    setArr(data);
  }
  const search = (value) => {
    setValue(value);

    const filtered = datalist.filter((el) => {
      // converting key into lowercase and also value, then checking key includes that value or not. if include then return that obj in newarray and mapping at last
      return el.first_name.toLowerCase().includes(value.toLowerCase());
    });

    setArr(filtered);
  };

  return (
    <div className="dashboard_list">
      <div className="flex justify-between p-3 items-center">
        <span className="text-green-300">Active member</span>
        <div className="flex gap-2 relative items-center">
          <svg
            className="absolute left-5"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M11.4669 19.564C16.0221 19.564 19.7148 15.9046 19.7148 11.3905C19.7148 6.87634 16.0221 3.21691 11.4669 3.21691C6.91169 3.21691 3.21896 6.87634 3.21896 11.3905C3.21896 15.9046 6.91169 19.564 11.4669 19.564Z"
              stroke="#7E7E7E"
              stroke-width="2.04339"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.7768 21.6074L17.292 17.1631"
              stroke="#7E7E7E"
              stroke-width="2.04339"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            className="bg-gray-100 w-56 serachinput rounded-lg p-2"
            type="text"
            onChange={(e) => {
              search(e.target.value);
            }}
            placeholder="search"
          />
          <select
            onChange={(e) => {
              handlesort(e);
            }}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <Table Current={Current} />
      <Pagenation
        Total={arr.length === 0 ? datalist?.length : arr.length}
        currentPage={page}
        limit={limit}
        setPage={setPage}
      />
    </div>
  );
}
