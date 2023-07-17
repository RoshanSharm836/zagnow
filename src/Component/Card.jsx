import React from "react";
export default function Card({ data }) {
  // console.log("data", data);
  return (
    <div className="card relative">
      <div className="absolute right-4 top-4 p-2 rounded-lg bg-white">
        <svg
          className="w-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 34 31"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.2101 5.33753C14.1891 1.80564 9.15122 0.855569 5.36603 4.08972C1.58083 7.32388 1.04793 12.7312 4.02046 16.5563C6.26568 19.4454 12.644 25.2455 15.6309 27.9108C16.18 28.4008 16.4545 28.6458 16.776 28.7422C17.0551 28.8259 17.3652 28.8259 17.6443 28.7422C17.9658 28.6458 18.2403 28.4008 18.7894 27.9108C21.7762 25.2455 28.1546 19.4454 30.3998 16.5563C33.3723 12.7312 32.9045 7.28986 29.0542 4.08972C25.204 0.889589 20.2312 1.80564 17.2101 5.33753Z"
            stroke="black"
            stroke-width="3.02205"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <img src={data.imgUrl} alt="img" srcset="" />
      <div className="card_title">{data.title}</div>
      <div className="text-sm" style={{ color: "#00000099" }}>
        INR {data.price}
      </div>
    </div>
  );
}
