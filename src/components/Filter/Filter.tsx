import React, { useEffect, useState } from "react";
import { Filter as FilterCondition } from "../../utils/filter";
import { InputCheckbox } from "../InputCheckbox/InputCheckbox";
import "./Filter.css";
import { addFilter, removeFilter } from "../../store/actions";
import { useDispatch } from "../../store/Store";

const filterGroup = [
  {
    key: FilterCondition.ALL,
    title: "Все",
    add: addFilter(FilterCondition.ALL),
    remove: removeFilter(FilterCondition.ALL),
    checked: true,
  },
  {
    key: FilterCondition.NO_TRANSFER,
    title: "Без персадок",
    add: addFilter(FilterCondition.NO_TRANSFER),
    remove: removeFilter(FilterCondition.NO_TRANSFER),
    checked: false,
  },
  {
    key: FilterCondition.FILTER_ONE_TRANSFER,
    title: "1 пересадка",
    add: addFilter(FilterCondition.FILTER_ONE_TRANSFER),
    remove: removeFilter(FilterCondition.FILTER_ONE_TRANSFER),
    checked: false,
  },
  {
    key: FilterCondition.FILTER_TWO_TRANSFER,
    title: "2 пересадки",
    add: addFilter(FilterCondition.FILTER_TWO_TRANSFER),
    remove: removeFilter(FilterCondition.FILTER_TWO_TRANSFER),
    checked: false,
  },
  {
    key: FilterCondition.FILTER_THREE_TRANSFER,
    title: "3 пересадки",
    add: addFilter(FilterCondition.FILTER_THREE_TRANSFER),
    remove: removeFilter(FilterCondition.FILTER_THREE_TRANSFER),
    checked: false,
  },
];

export const Filter = () => {
  const [checkedFilters, setCheckedFilters] = useState(
    filterGroup.map((el) => el.checked),
  );
  const dispatch = useDispatch();

  const changeHandler = (position: number) => {
    let updateChecked = checkedFilters.map((el, index) =>
      index === position ? !el : el,
    );
    if (position > 0) {
      updateChecked[0] = false;
    }
    if (position === 0) {
      updateChecked = updateChecked.map((el, idx) => {
        if (idx === 0) return true;
        return false;
      });
    }
    if (updateChecked.every((el) => el === false)) {
      updateChecked = updateChecked.map((el, idx) => {
        if (idx === 0) return true;
        return false;
      });
    }

    setCheckedFilters(updateChecked);
  };

  useEffect(() => {
    checkedFilters.forEach((el, idx) => {
      if (el) {
        return dispatch(filterGroup[idx].add);
      }
    });

    return () =>
      checkedFilters.forEach((el, idx) => {
        return dispatch(filterGroup[idx].remove);
      });
  }, [checkedFilters]);

  return (
    <div className="filter-container flex flex-column">
      <div className="filter-title font-semibold text-upper">
        Количество пересадок
      </div>
      {filterGroup.map((filter, idx) => (
        <InputCheckbox
          title={filter.title}
          key={filter.key}
          onChangeHandler={() => changeHandler(idx)}
          defaultChecked={checkedFilters[idx]}
        />
      ))}
    </div>
  );
};
