import React, { FC } from "react";
import { Ticket } from "../../store/Store";
import "./CardTicket.css";

interface TicketProps {
  ticket: Ticket;
}

const declOfNum = (number: number, titles: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const CardTicket: FC<TicketProps> = ({
  ticket: { price, carrier, segments, logo },
}) => {
  return (
    <div className="card flex flex-column box-shadow">
      <div className="header-card flex justify-content-sb">
        <div className="price">
          <span>{new Intl.NumberFormat("ru-RU").format(price)}</span>
          <span> Р</span>
        </div>
        <div className="logo-aircompany flex align-items-center">
          <img className="logo-img" src={logo} alt={`aircompany-${carrier}`} />
          <div className="logo-name">{carrier}</div>
        </div>
      </div>
      <div className="description-card flex justify-content-sb">
        <div className="route-city">
          <div className="cities sub-color text-upper pb5">
            {segments.origin} - {segments.destination}
          </div>
          <div className="time fz14 font-letter-normal">10:45 - 08:00</div>
        </div>
        <div>
          <div className="sub-color text-upper pb5">В ПУТИ</div>
          <div className="fz14 font-letter-normal">
            <span>{Math.floor(segments.duration / 1000 / 60 / 60)}ч </span>
            <span>{Math.floor((segments.duration / 1000 / 60) % 60)}м</span>
          </div>
        </div>
        <div>
          <div className="sub-color text-upper pb5">
            {`${segments.stops.length} ${declOfNum(segments.stops.length, [
              "пересадка",
              "пересадки",
              "пересадок",
            ])}`}
          </div>
          <div className="fz14 font-letter-normal">
            {segments.stops.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};
