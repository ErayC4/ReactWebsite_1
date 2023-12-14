import "./App.css";
import Padding from './Padding.jsx';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App() {
  Padding({ targetIds: ["navbar", "footer"] });

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
