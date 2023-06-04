import logo from "./logo.svg";
import "./App.css";
import MovieMania from "./component/MovieMania.js";
// require("dotenv").config();

function App() {
  let apiKey = process.env.API_KEY;
  console.log(apiKey);
  return (
    <>
      <MovieMania apiKey={apiKey} />
    </>
  );
}

export default App;
