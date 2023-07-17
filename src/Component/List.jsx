import React, { useState } from "react";
import { datalist } from "../MOCK_DATA";
import Pagenation from "./Pagenation";
export default function List() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [arr, setArr] = useState([]);

  const Indexoflast = page * limit;
  const IndexofFirst = Indexoflast - limit;
  const Current = datalist?.slice(IndexofFirst, Indexoflast);
  console.log(IndexofFirst, Indexoflast);

  function handlesort(e) {
    let data = datalist.filter((el) => {
      if (el.new === e.target.value) {
        return el;
      }
    });
    setArr(data);
  }

  return (
    <div className="dashboard_list">
      <div className="flex justify-between p-3">
        <span>Active member</span>
        <input type="text" placeholder="search" />
        <select
          onChange={(e) => {
            handlesort(e);
          }}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>first_name</th>
            <th>company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="body">
          {arr.length === 0
            ? Current.map((el, i) => {
                return (
                  <tr key={el.first_name + i}>
                    <th>{el.first_name}</th>
                    <th>{el.company}</th>
                    <th>{el.Phone_Number}</th>
                    <th>{el.Email}</th>
                    <th>{el.Country}</th>
                    <th className={el.Status === "Active" ? "green" : "red"}>
                      {el.Status}
                    </th>
                  </tr>
                );
              })
            : arr.map((el, i) => {
                return (
                  <tr key={el.first_name + i}>
                    <th>{el.first_name}</th>
                    <th>{el.company}</th>
                    <th>{el.Phone_Number}</th>
                    <th>{el.Email}</th>
                    <th>{el.Country}</th>
                    <th className={el.Status === "Active" ? "green" : "red"}>
                      {el.Status}
                    </th>
                  </tr>
                );
              })}
        </tbody>
      </table>
      <Pagenation
        Total={arr.length === 0 ? datalist?.length : arr.length}
        currentPage={page}
        limit={limit}
        setPage={setPage}
      />
    </div>
  );
}
