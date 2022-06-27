import React from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { Tabs } from "./components/Tabs/Tabs";
import { Tickets } from "./components/Tickets/Tickets";

function App() {
  return (
    <div className="container flex justify-content-center flex-column">
      <Header />
      <section className="flex" style={{ justifyContent: "space-around" }}>
        <div>
          <Filter />
        </div>
        <div>
          <Tabs />
          <Tickets />
        </div>
      </section>
    </div>
  );
}

export default App;
