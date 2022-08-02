import React from "react";
import { reducer } from "./reducers";
import { ActionType } from "./actions";
import { Filter } from "../utils/filter";

export type Tickets = Ticket[];

interface Segments {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface Ticket {
  price: number;
  carrier: string;
  logo: string;
  segments: Segments;
}

export type StateType = {
  tickets: Tickets;
  filteredTickets: Tickets;
  isLoading: boolean;
  errors: string;
  conditionFilter: Filter[];
};

const initialState: StateType = {
  tickets: [],
  filteredTickets: [],
  isLoading: false,
  errors: "",
  conditionFilter: [],
};

const StoreContext = React.createContext<StateType>(initialState);
const DispatchContext = React.createContext<React.Dispatch<ActionType>>(
  () => {},
);

const ContexProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<StateType, ActionType>
  >(reducer, initialState);
  const s = React.useMemo(() => state, [state]);
  const d = React.useMemo(() => dispatch, [dispatch]);
  return (
    <DispatchContext.Provider value={d}>
      <StoreContext.Provider value={s}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
};

function useStore() {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a StoreContext");
  }
  return context;
}

function useDispatch() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a DispatchContext");
  }
  return context;
}

export { ContexProvider, useStore, useDispatch };
