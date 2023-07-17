import "./App.css";
import Card from "./Component/Card";
import { NavLink } from "react-router-dom";
import Navbar from "./Component/Navbar";
function App({ data }) {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-between items-center p-4 container_header">
        <span className="text-3xl font-semibold">Discover</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.35416 21C10.0593 21.6224 10.9855 22 12 22C13.0144 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3678 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88257 2.63214 7.75735 3.75736C6.63213 4.88258 5.99999 6.4087 5.99999 8C5.99999 11.0902 5.22046 13.206 4.34965 14.6054C3.61512 15.7859 3.24785 16.3761 3.26131 16.5408C3.27622 16.7231 3.31485 16.7926 3.46176 16.9016C3.59445 17 4.19258 17 5.38884 17H18.6111C19.8074 17 20.4055 17 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        className=" 
  container_search relative flex justify-around items-center p-2"
      >
        <svg
          className="absolute left-10"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input
          className="p-2 bg-gray-100 rounded-lg w-95"
          type="text"
          placeholder="Serach anything"
        />
        <div className="p-3 bg-black rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 12H18M3 6H21M9 18H15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="container_btm flex justify-between items-center p-4">
        <div className="py-2 px-4 bg-black rounded-lg text-white">All</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Men</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg"> Women</div>
        <div className="py-2 px-4 bg-gray-100 rounded-lg">Kids</div>
      </div>
      <div className="container">
        {data?.map((el) => {
          return (
            <NavLink to={`/product/${el.id}`}>
              <Card data={el} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default App;
