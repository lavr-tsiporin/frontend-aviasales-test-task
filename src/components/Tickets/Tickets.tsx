import React, { useEffect, useState } from "react";
import { CardTicket } from "../CardTicket/CardTicket";
import { ButtonDownloadMore } from "../ButtonDowloadMore/ButtonDownloadMore";
import { Loading } from "../Loading/Loading";
import { useDispatch, useStore } from "../../store/Store";
import { updateFilterTickets } from "../../store/actions";
import { filterHandler } from "../../utils/filter";

const load: number = 5;

export const Tickets = () => {
  const [loadMore, setLoadMore] = useState<number>(load);
  const { isLoading, filteredTickets, errors, conditionFilter, tickets } =
    useStore();
  const dispatch = useDispatch();

  const loadMoreHandler = () => {
    setLoadMore(loadMore + load);
  };

  useEffect(() => {
    dispatch(updateFilterTickets(filterHandler(conditionFilter, tickets)));
  }, [conditionFilter]);

  if (isLoading) {
    return (
      <div className="flex flex-column">
        <Loading />
      </div>
    );
  }

  if (errors) {
    return <div className="flex flex-column">{errors.toString()}</div>;
  }

  return (
    <div className="flex flex-column">
      {filteredTickets.slice(0, loadMore).map((ticket, idx) => (
        <CardTicket ticket={ticket} key={idx} />
      ))}
      {loadMore < filteredTickets.length && (
        <ButtonDownloadMore onClick={loadMoreHandler} />
      )}
    </div>
  );
};
