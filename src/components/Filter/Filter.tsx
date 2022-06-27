import React from "react";
import { InputCheckbox } from "../InputCheckbox/InputCheckbox";
import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filter-container flex flex-column">
      <div className="filter-title font-semibold text-upper">
        Количество пересадок
      </div>
      <InputCheckbox title="Все" />
      <InputCheckbox title="Без пересадок" />
      <InputCheckbox title="1 пересадка" />
      <InputCheckbox title="2 пересадки" />
      <InputCheckbox title="3 пересадки" />
    </div>
  );
};
