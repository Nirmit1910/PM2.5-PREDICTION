import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Predict from "./components/Predict/Predict";
import Footer from "./components/Footer/Footer";
import Precautions from "./components/Precautions/Precautions";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Predict />
      <Precautions/>
      <Footer />
      </>
  );
}

export default App;
