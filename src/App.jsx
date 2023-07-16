import "./App.css";
import Card from "./Component/Card";
import { NavLink } from "react-router-dom";
import Navbar from "./Component/Navbar";
function App({ data }) {
  return (
    <div className="App">
      <Navbar />
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
