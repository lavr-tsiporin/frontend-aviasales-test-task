import { Action, ActionType } from "./actions";
import { StateType } from "./Store";

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case Action.UPDATE_TICKETS:
      return { ...state, tickets: action.tickets };

    case Action.SET_ERRORS:
      return { ...state, errors: action.errors };

    case Action.SET_LOADING:
      return { ...state, isLoading: action.loading };

    case Action.UPDATE_FILTERED_TICKETS:
      return { ...state, filteredTickets: action.filteredTickets };

    case Action.ADD_CONDITION_FILTER:
      return {
        ...state,
        conditionFilter: [...state.conditionFilter, action.filter],
      };

    case Action.REMOVE_CONDITION_FILTER:
      return {
        ...state,
        conditionFilter: state.conditionFilter.filter(
          (f) => f !== action.filter,
        ),
      };

    default:
      return state;
  }
};
