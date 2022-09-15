import React from "react";
import { Routes, Route } from 'react-router-dom';
import Axios from "axios";
import Homepage from "./components/homepage/homepage";
import Info from "./user/info";
import Navbar from "./components/header/navbar";
import NavbarLogin from "./components/header/navbarLogin";
import History from "./user/history";

export const AppContext = React.createContext()

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  return (
    <AppContext.Provider >
      <div id="App">
        <Navbar />
        {/* <NavbarLogin /> */}
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="user/history" element={<History/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
