import React from "react";
import logoAircompany from "../../assets/S7 Logo.png";
import "./CardTicket.css";

export const CardTicket = () => {
  return (
    <div className="card flex flex-column box-shadow">
      <div className="header-card flex justify-content-sb">
        <div className="price">
          <span>13 400</span>
          <span> Р</span>
        </div>
        <div className="logo-aircompany">
          <img src={logoAircompany} alt="aircompany" />
        </div>
      </div>
      <div className="description-card flex justify-content-sb">
        <div className="route-city">
          <div className="cities sub-color text-upper pb5">MOW-HKT</div>
          <div className="time fz14 font-letter-normal">10:45-08:00</div>
        </div>
        <div>
          <div className="sub-color text-upper pb5">В ПУТИ</div>
          <div className="fz14 font-letter-normal">21ч 15м</div>
        </div>
        <div>
          <div className="sub-color text-upper pb5">2 пересадки</div>
          <div className="fz14 font-letter-normal">HKG, JNB</div>
        </div>
      </div>

      <div className="description-card flex justify-content-sb">
        <div className="route-city">
          <div className="cities sub-color text-upper pb5">MOW-HKT</div>
          <div className="time fz14 font-letter-normal">11:20-00:50</div>
        </div>
        <div>
          <div className="sub-color text-upper pb5">В ПУТИ</div>
          <div className="fz14 font-letter-normal">13ч 30м</div>
        </div>
        <div>
          <div className="sub-color text-upper pb5">1 пересадка</div>
          <div className="fz14 font-letter-normal">HKG</div>
        </div>
      </div>
    </div>
  );
};
