import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
function Piechart({ lable, c, percentage }) {
  const data = {
    datasets: [
      {
        data: [`${100 - percentage}`, `${percentage}`],
        backgroundColor: ["#E2E2E2", `${c}`],
      },
    ],
  };
  var options = {
    cutout: 50, //  for thickness
  };

  return (
    <section className="pie_box relative " id="pie" style={{ widows: "200px" }}>
      <Doughnut data={data} options={options} style={{ width: "150px" }} />
      <div className="py-3 pielable">{lable}</div>
      <div className="percentage " style={{ color: `${c}` }}>
        {percentage}%
      </div>
    </section>
  );
}

export default Piechart;
