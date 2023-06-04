import logo from "./logo.svg";
import "./App.css";
import MovieList from "./component/MovieList.js";
// require("dotenv").config();

// import "dotenv/config";
function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_1;
  // console.log(process.env); // remove this after you've confirmed it is working
  console.log(process.env);
  console.log(apiKey);
  return (
    <>
      <div className="w-scree flex justify-center">
        <MovieList apiKey={apiKey} />
      </div>
    </>
  );
}

export default App;
