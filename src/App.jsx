import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/home";
import Property from "./Pages/Property/property";
import NavBar from "./NavBar/navBar";
import Footer from "./Footer/footer";
import Dubai from "./Pages/Dubai/dubai";
import News from "./Pages/News/news";
import About from "./Pages/About/about";
import MobileNavBar from "./NavBar/mobileNavBar";

function App() {
  const [activPage, setActivePage] = useState("dubai");
  const renderPage = () => {
    switch (activPage) {
      case "home":
        return <Home />;
      case "property":
        return <Property />;
      case "dubai":
        return <Dubai />;
      case "news":
        return <News />;
      case "about":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <NavBar activPage={activPage} setActivePage={setActivePage} />
      <MobileNavBar activPage={activPage} setActivePage={setActivePage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
export default App;
