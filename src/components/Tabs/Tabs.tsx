import React, { useRef, useEffect } from "react";
import { addFilter, removeFilter } from "../../store/actions";
import { Filter as filterCondition } from "../../utils/filter";
import { useDispatch, useStore } from "../../store/Store";
import "./Tabs.css";

export const Tabs = () => {
  const activeTab = useRef<HTMLDivElement | null>(null);
  const { tickets } = useStore();
  const dispatch = useDispatch();

  // useEffect(
  //   () => dispatch(addFilter(filterCondition.SORT_LOW_COST)),
  //   [tickets],
  // );

  const toggleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target } = e;
    if (activeTab.current !== target) {
      if (activeTab.current?.classList.contains("tab-active")) {
        activeTab.current.classList.remove("tab-active");
        dispatch(
          removeFilter(
            activeTab.current.getAttribute("data-sort") as filterCondition,
          ),
        );
      }
      (target as HTMLDivElement).classList.add("tab-active");
      activeTab.current = target as HTMLDivElement;

      dispatch(
        addFilter(
          activeTab.current.getAttribute("data-sort") as filterCondition,
        ),
      );
    }
  };

  return (
    <div className="tabs flex">
      <div
        className="tab tab-active font-semibold text-upper"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          toggleActive(e);
        }}
        data-sort={filterCondition.SORT_LOW_COST}
        ref={activeTab}
      >
        Самый дешевый
      </div>
      <div
        className="tab font-semibold text-upper"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          toggleActive(e);
        }}
        data-sort={filterCondition.SORT_FAST}
      >
        Самый быстрый
      </div>
      <div
        className="tab font-semibold text-upper"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => toggleActive(e)}
        data-sort={filterCondition.ALL}
      >
        Оптимальный
      </div>
    </div>
  );
};
