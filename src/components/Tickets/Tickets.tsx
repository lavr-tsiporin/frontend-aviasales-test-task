import React from "react";
import { CardTicket } from "../CardTicket/CardTicket";
import { ButtonDownloadMore } from "../ButtonDowloadMore/ButtonDownloadMore";

export const Tickets = () => {
  return (
    <div>
      <CardTicket />
      <CardTicket />
      <ButtonDownloadMore />
    </div>
  );
};
