import React, { useState } from "react";
import { datalist } from "../MOCK_DATA";
import Pagenation from "./Pagenation";
export default function List() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const Indexoflast = page * limit;
  const IndexofFirst = Indexoflast - limit;
  const Current = datalist?.slice(IndexofFirst, Indexoflast);
  console.log(IndexofFirst, Indexoflast);
  return (
    <div className="dashboard_list">
      <table>
        <thead>
          <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>email</th>
            <th>gender</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody id="body">
          {Current.map((el, i) => {
            return (
              <tr key={el.first_name + i}>
                <th>{el.first_name}</th>
                <th>{el.last_name}</th>
                <th>{el.email}</th>
                <th>{el.gender}</th>
                <th>{el.country}</th>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
      <Pagenation
        Total={datalist?.length}
        currentPage={page}
        limit={limit}
        setPage={setPage}
      />
    </div>
  );
}
