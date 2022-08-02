import React, { FC } from "react";
import "./InputCheckbox.css";

interface PropsInputCheckbox {
  title: string;
  id?: string;
  classes?: string[];
  defaultChecked: boolean;
  onChangeHandler: () => void;
}

export const InputCheckbox: FC<PropsInputCheckbox> = ({
  title,
  id,
  classes,
  defaultChecked,
  onChangeHandler,
}) => {
  return (
    <div
      className={["checkbox", ...(classes || [])].join(" ")}
      id={id}
      onClick={onChangeHandler}
    >
      <input
        type="checkbox"
        name={title}
        onChange={() => {}}
        className="custom-checkbox"
        checked={defaultChecked}
      ></input>
      <label htmlFor={title} onChange={onChangeHandler}>
        {title}
      </label>
    </div>
  );
};
