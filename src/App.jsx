import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Header/Blogs/Blogs";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <hr />
      <Blogs></Blogs>
    </div>
  );
}

export default App;
