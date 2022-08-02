import React from "react";
import "./ButtonDowloadMore.css";

export const ButtonDownloadMore = (props: any) => {
  return (
    <button className="btn btn-load-more text-upper" {...props}>
      Показать еще 5 билетов!
    </button>
  );
};
