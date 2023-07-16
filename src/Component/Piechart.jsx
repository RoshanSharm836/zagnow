import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
function Piechart({ lable }) {
  const data = {
    datasets: [
      {
        data: [60, 30],
        backgroundColor: ["#FC0011"],
      },
    ],
  };

  return (
    <section className="pie_box" id="pie" style={{ widows: "200px" }}>
      <Doughnut data={data} style={{ width: "100px" }} />
      <div>{lable}</div>
    </section>
  );
}

export default Piechart;
