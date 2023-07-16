import React from "react";
export default function Card({ data }) {
  // console.log("data", data);
  return (
    <div className="card">
      <img src={data.imgUrl} alt="img" srcset="" />
      <div>{data.title}</div>
      <div style={{ color: "#00000099" }}>INR {data.price}</div>
    </div>
  );
}
