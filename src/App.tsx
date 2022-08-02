import React, { useEffect } from "react";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { Tabs } from "./components/Tabs/Tabs";
import { Tickets } from "./components/Tickets/Tickets";
import { useDispatch } from "./store/Store";
import { getTickets } from "./utils/api";
import {
  setErrors,
  setLoading,
  updateFilterTickets,
  updateTickets,
} from "./store/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(setLoading(true));

    getTickets(controller)
      .then((r) => {
        if (r) {
          dispatch(updateTickets(r));
          dispatch(updateFilterTickets(r));
          dispatch(setLoading(false));
        }
      })
      .catch((err) => {
        dispatch(setErrors(err));
        dispatch(setLoading(false));
      });

    return () => {
      controller.abort();
      dispatch(setLoading(false));
    };
  }, []);

  return (
    <React.Fragment>
      <div className="container flex justify-content-center flex-column">
        <Header />
        <section
          className="flex"
          style={{ justifyContent: "space-around", marginBottom: "10px" }}
        >
          <div>
            <Filter />
          </div>
          <div>
            <Tabs />
            <Tickets />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;
