import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <p>teszt</p>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
