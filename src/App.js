import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comonent/Header/Header";
import Nav from "./comonent/Nav/Nav";
import MessangerContiner from "../src/comonent/Content/Messanger/MessangerContiner";
import Music from "../src/comonent/Content/Music/Music";
import Setting from "../src/comonent/Content/Setting/Setting";
import UnFoundPage from "../src/comonent/Content/UnFoundPage/UnFoundPage";
import News from "../src/comonent/Content/News/News";
import Group from "../src/comonent/Content/Group/Group";
import FriendsContiner from "../src/comonent/Content/Friends/FriendsContiner";
import ProfileContiner from "./comonent/Content/Profile/ProfileContiner";

const App = () => {
  debugger;
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wraper">
          <Nav />
          <Routes>
            <Route path="/" element={<ProfileContiner />} />
            <Route path="/messanger" element={<MessangerContiner />} />
            <Route path="/friends" element={<FriendsContiner />} />
            <Route path="/group" element={<Group />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<UnFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
