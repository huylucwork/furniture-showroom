import React from "react";
import { Routes, Route } from 'react-router-dom';
import Axios from "axios";
import Header from "./components/headerFooter/header";
import Homepage from "./components/publicPage/homepage";
import User from "./components/user/user";
import History from "./components/user/history";

export const AppContext = React.createContext()

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  return (
    <AppContext.Provider >
      <div id="App">
        <Header />
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
