import { Ticket } from "../store/Store";

export enum Filter {
  ALL = "ALL",
  NO_TRANSFER = "NO_TRANSFER",
  FILTER_ONE_TRANSFER = "FILTER_ONE_TRANSFER",
  FILTER_TWO_TRANSFER = "FILTER_TWO_TRANSFER",
  FILTER_THREE_TRANSFER = "FILTER_THREE_TRANSFER",
  SORT_LOW_COST = "SORT_LOW_COST",
  SORT_FAST = "SORT_FAST",
}

const filterItems = (type: Filter, array: Ticket[]) => {
  switch (type) {
    case Filter.ALL:
      return array;

    case Filter.NO_TRANSFER:
      return array.filter((t) => t.segments.stops.length === 0);

    case Filter.FILTER_ONE_TRANSFER:
      return array.filter((t) => t.segments.stops.length === 1);

    case Filter.FILTER_TWO_TRANSFER:
      return array.filter((t) => t.segments.stops.length === 2);

    case Filter.FILTER_THREE_TRANSFER:
      return array.filter((t) => t.segments.stops.length === 3);

    case Filter.SORT_FAST:
      return array.sort((a, b) => a.segments.duration - b.segments.duration);

    case Filter.SORT_LOW_COST:
      return array.sort((a, b) => a.price - b.price);

    default:
      return array;
  }
};

export const filterHandler = (types: Filter[], tickets: Ticket[]): Ticket[] => {
  const res = types.reduce((prev: Ticket[], next: Filter) => {
    const result = filterItems(next, tickets);
    if (next === Filter.SORT_FAST || next === Filter.SORT_LOW_COST) {
      return [...result];
    }
    return [...prev, ...result];
  }, []);
  return res;
};
