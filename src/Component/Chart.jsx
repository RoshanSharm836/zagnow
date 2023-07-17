import React from "react";
import Piechart from "./Piechart";

export default function Chart() {
  return (
    <di class="chart ">
      <h1 className="text-xl font-semibold text-left px-10 py-2">
        All Customers
      </h1>
      <div className="flex w-full justify-evenly ">
        <Piechart lable={"Current Customers"} c={"#5F27CD"} percentage={"85"} />
        <Piechart lable={"New Customers"} c={"#16C098"} percentage={"66"} />
        <Piechart lable={"Target Customers"} c={"#FF6B6B"} percentage={"90"} />
        <Piechart
          lable={"Retarget Customers"}
          c={"#FFC5C5"}
          percentage={"30"}
        />
      </div>
    </di>
  );
}
