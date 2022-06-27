import React, { FC, useState } from "react";
import "./InputCheckbox.css";

interface PropsInputCheckbox {
  title: string;
  id?: string;
  classes?: string[];
}

export const InputCheckbox: FC<PropsInputCheckbox> = ({
  title,
  id,
  classes,
}) => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={["checkbox", ...(classes || [])].join(" ")}
      id={id}
      onClick={toggleChecked}
    >
      <input
        type="checkbox"
        name={title}
        onChange={() => {}}
        className="custom-checkbox"
        checked={checked}
      ></input>
      <label htmlFor={title} onClick={toggleChecked}>
        {title}
      </label>
    </div>
  );
};
