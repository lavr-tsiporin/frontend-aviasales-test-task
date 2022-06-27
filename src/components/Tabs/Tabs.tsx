import React from "react";
import "./Tabs.css";

export const Tabs = () => {
  return (
    <div className="tabs flex">
      <div className="tab tab-active font-semibold text-upper">
        Самый дешевый
      </div>
      <div className="tab font-semibold text-upper">Самый быстрый</div>
      <div className="tab font-semibold text-upper">Оптимальный</div>
    </div>
  );
};
