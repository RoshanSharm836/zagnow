import React from "react";

export default function Table({ Current }) {
  return (
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
        {Current.map((el, i) => {
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
  );
}
