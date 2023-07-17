import React from "react";
import List from "../Component/List";
import Piechart from "../Component/Piechart";

export default function Dashboard() {
  return (
    <div class="dashboard">
      <div class="dashboard_left">
        <img src="logo.png" alt="logo" className="my-5 " />
        <div className="flex items-center gap-2 fz">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="12"
            viewBox="0 0 22 12"
            fill="none"
          >
            <path
              d="M15.6656 0.85L17.2058 2.29L11.9863 7.17L8.46745 3.88C8.05032 3.49 7.37649 3.49 6.95936 3.88L0.541974 9.89C0.124843 10.28 0.124843 10.91 0.541974 11.3C0.959104 11.69 1.63293 11.69 2.05006 11.3L7.70806 6L11.2269 9.29C11.6441 9.68 12.3179 9.68 12.735 9.29L18.7139 3.71L20.2541 5.15C20.5856 5.46 21.1632 5.24 21.1632 4.8V0.5C21.1739 0.22 20.9386 0 20.6391 0H16.0507C15.5694 0 15.3341 0.54 15.6656 0.85Z"
              fill="black"
            />
          </svg>
          Reports
        </div>
        <div className="flex items-center gap-2 fz">
          <img src="Grid.svg" alt="work" width="25px" />
          Workspaces
        </div>
        <div className="flex items-center gap-2 fz">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
          >
            <path
              d="M21.5109 12.98C21.5544 12.66 21.587 12.34 21.587 12C21.587 11.66 21.5544 11.34 21.5109 11.02L23.8044 9.37C24.0109 9.22 24.0653 8.95 23.9349 8.73L21.7609 5.27C21.6305 5.05 21.337 4.97 21.0979 5.05L18.3914 6.05C17.8262 5.65 17.2175 5.32 16.5544 5.07L16.1414 2.42C16.1088 2.18 15.8805 2 15.6088 2H11.2609C10.9892 2 10.7609 2.18 10.7283 2.42L10.3153 5.07C9.65225 5.32 9.04355 5.66 8.47834 6.05L5.77181 5.05C5.52181 4.96 5.23921 5.05 5.10877 5.27L2.93486 8.73C2.79355 8.95 2.85877 9.22 3.06529 9.37L5.35877 11.02C5.31529 11.34 5.28268 11.67 5.28268 12C5.28268 12.33 5.31529 12.66 5.35877 12.98L3.06529 14.63C2.85877 14.78 2.80442 15.05 2.93486 15.27L5.10877 18.73C5.23921 18.95 5.53268 19.03 5.77181 18.95L8.47834 17.95C9.04355 18.35 9.65225 18.68 10.3153 18.93L10.7283 21.58C10.7609 21.82 10.9892 22 11.2609 22H15.6088C15.8805 22 16.1088 21.82 16.1414 21.58L16.5544 18.93C17.2175 18.68 17.8262 18.34 18.3914 17.95L21.0979 18.95C21.3479 19.04 21.6305 18.95 21.7609 18.73L23.9349 15.27C24.0653 15.05 24.0109 14.78 23.8044 14.63L21.5109 12.98ZM13.4349 15.5C11.337 15.5 9.63051 13.93 9.63051 12C9.63051 10.07 11.337 8.5 13.4349 8.5C15.5327 8.5 17.2392 10.07 17.2392 12C17.2392 13.93 15.5327 15.5 13.4349 15.5Z"
              fill="black"
            />
          </svg>
          Setting
        </div>
      </div>
      <div class="dashboard_header">
        <span>Orders</span>
        <button>
          +<span>Add Orders</span>
        </button>
      </div>

      <div class="chart ">
        <h1 className="text-xl font-semibold text-left p-3">All Customers</h1>
        <div className="flex w-full justify-evenly ">
          <Piechart
            lable={"Current Customers"}
            c={"#5F27CD"}
            percentage={"85"}
          />
          <Piechart
            lable={"Current Customers"}
            c={"#16C098"}
            percentage={"66"}
          />
          <Piechart
            lable={"Current Customers"}
            c={"#FF6B6B"}
            percentage={"90"}
          />
          <Piechart
            lable={"Current Customers"}
            c={"#FFC5C5"}
            percentage={"30"}
          />
        </div>
      </div>
      <div class="second-chart flex">
        <h1 className="text-xl font-semibold text-left ">Stats Overview</h1>
        <span>Active</span>
        <hr
          className="bar"
          style={{ width: `${80}%`, backgroundColor: "#ffc5c5" }}
        />
        <span>Inactive</span>
        <hr
          className="bar"
          style={{ width: `${60}%`, backgroundColor: "#00b087" }}
        />
        <hr />
      </div>
      <List />
    </div>
  );
}
