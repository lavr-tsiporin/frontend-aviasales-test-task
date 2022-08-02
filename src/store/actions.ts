import { Filter } from "../utils/filter";
import { Ticket, Tickets } from "./Store";

export enum Action {
  UPDATE_TICKETS = "UPDATE_TICKETS",
  SET_ERRORS = "SET_ERRORS",
  SET_LOADING = "SET_LOADING",
  UPDATE_FILTERED_TICKETS = "UPDATE_FILTERED_TICKETS",
  ADD_CONDITION_FILTER = "CONDITION_FILTER",
  REMOVE_CONDITION_FILTER = "REMOVE_CONDITION_FILTER",
}

export type ActionType =
  | { type: Action.UPDATE_TICKETS; tickets: Ticket[] }
  | { type: Action.SET_ERRORS; errors: string }
  | { type: Action.SET_LOADING; loading: boolean }
  | { type: Action.UPDATE_FILTERED_TICKETS; filteredTickets: Ticket[] }
  | { type: Action.ADD_CONDITION_FILTER; filter: Filter }
  | { type: Action.REMOVE_CONDITION_FILTER; filter: Filter };

export const updateTickets = (payload: Ticket[]): ActionType => {
  return { type: Action.UPDATE_TICKETS, tickets: payload };
};

export const setErrors = (payload: string): ActionType => {
  return { type: Action.SET_ERRORS, errors: payload };
};

export const setLoading = (payload: boolean): ActionType => {
  return { type: Action.SET_LOADING, loading: payload };
};

export const updateFilterTickets = (
  payload: Ticket[] | Tickets,
): ActionType => {
  return { type: Action.UPDATE_FILTERED_TICKETS, filteredTickets: payload };
};

export const addFilter = (payload: Filter): ActionType => {
  return { type: Action.ADD_CONDITION_FILTER, filter: payload };
};

export const removeFilter = (payload: Filter): ActionType => {
  return { type: Action.REMOVE_CONDITION_FILTER, filter: payload };
};
