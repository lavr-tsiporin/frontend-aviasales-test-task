import { Ticket } from "../store/Store";
import axios, { AxiosError } from "axios";

type Errors = {
  status?: number;
  message?: string;
};

export const getTickets = async (
  conroller: AbortController = new AbortController(),
) => {
  try {
    const response = await axios.get<Ticket[]>(
      "http://localhost:3001/api/tickets",
      {
        headers: {
          Accept: "application/json",
        },
        signal: conroller.signal,
      },
    );
    return response.data;
  } catch (error: unknown) {
    const err = error as Error | AxiosError<Errors>;
    if (axios.isAxiosError(err) && err.response) {
      throw new Error(err.response.data.message);
    }
  }
};
