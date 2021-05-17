import React, { useState } from "react";
import Collapse from "@kunukn/react-collapse";
import Down from "./Down";
import { withStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";
import CustomCheckbox from "./CustomCheckbox";

const CustomColorCheckbox = withStyles({
  root: {
    color: "#0072bc",
    "&$checked": {
      color: "#0072bc",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// const [checked, setChecked] = useState(true);

const handleChange = (event) => {
  //   setChecked(event.target.checked);
};

const Block = ({ isOpen, title, onToggle, children }) => {
  return (
    <div className="block">
      <button className="btn toggle" onClick={onToggle}>
        <CustomCheckbox isChecked={isOpen ? "Checked" : ""} />
        <span style={{ width: "80%" }}>{title}</span>
        <Down isOpen={isOpen} />
      </button>
      <Collapse layoutEffect isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
};
export default Block;
