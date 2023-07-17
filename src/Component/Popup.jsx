import React from "react";

export default function Popup({ setActive, setOutput }) {
  return (
    <div className="popup">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="102"
        height="96"
        viewBox="0 0 102 96"
        fill="none"
      >
        <path
          d="M51 0C22.8481 0 0.0263672 21.3334 0.0263672 47.6493C0.0263672 73.9651 22.8481 95.2985 51 95.2985C79.1519 95.2985 101.974 73.9651 101.974 47.6493C101.974 21.3334 79.1519 0 51 0Z"
          fill="#4381FF"
        />
        <path
          d="M74.4403 32.1963L39.4914 63.1282L27.5939 52.0066"
          stroke="white"
          stroke-width="8.5008"
          stroke-linecap="round"
        />
      </svg>
      <span>Success!</span>
      <div>524 entries successfully uploaded</div>
      <button>Go to My Entries</button>
      <button
        onClick={() => {
          setActive(false);
          setOutput("");
        }}
      >
        Cancel
      </button>
    </div>
  );
}
