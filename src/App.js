import React from "react";
import "./App.scss";

// Importing the components
import Navbar from "./components/Navbar/Navbar.component";
import TourList from "./components/TourList/Tourlist.component";

function App() {
  return (
    <div>
      <Navbar />
      <TourList />
    </div>
  );
}

export default App;
