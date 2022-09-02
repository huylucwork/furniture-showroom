import React from "react";
import { Routes, Route } from 'react-router-dom';
import Axios from "axios";
import Homepage from "./components/homepage/homepage";
import Navbar from "./components/header/navbar";
export const AppContext = React.createContext()

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  return (
    <AppContext.Provider >
      <div id="App">
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;