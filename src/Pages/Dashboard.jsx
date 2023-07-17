import React from "react";
import List from "../Component/List";
import DashboardNav from "../Component/DashboardNav";
import Chart from "../Component/Chart";

export default function Dashboard() {
  return (
    <div class="dashboard">
      <DashboardNav />
      <div class="dashboard_header">
        <span>Orders</span>
        <button>
          +<span>Add Orders</span>
        </button>
      </div>

      <Chart />
      <div class="second-chart flex">
        <h1 className="text-xl font-semibold text-left ">Stats Overview</h1>
        <span>Active</span>
        <hr
          className="bar"
          style={{ width: `${80}%`, backgroundColor: "#ffc5c5" }}
        />
        <span className="relative text-right w-11/12" style={{ top: "-10px" }}>
          {"80%"}
        </span>
        <span>Inactive</span>
        <hr
          className="bar"
          style={{ width: `${60}%`, backgroundColor: "#00b087" }}
        />
        <span className="relative text-right w-11/12" style={{ top: "-10px" }}>
          {"60%"}
        </span>
      </div>
      <List />
    </div>
  );
}
