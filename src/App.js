import "./App.css";
import Navbar from "./Components/Navbar";
import Carousal from "./Components/Carousal";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Carousal
          height="20rem"
          url1="https://c1.wallpaperflare.com/preview/901/623/722/render-graphic-architecture-3d.jpg"
          url2="https://c1.wallpaperflare.com/preview/901/623/722/render-graphic-architecture-3d.jpg"
          url3="https://c1.wallpaperflare.com/preview/901/623/722/render-graphic-architecture-3d.jpg"
          url4="https://c1.wallpaperflare.com/preview/901/623/722/render-graphic-architecture-3d.jpg"
        />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
