import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Block from "./Block";
import ShowChoices from "./Choices";

import {
  FormGroup,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  TextField,
} from "@material-ui/core";

const initialState = [false, false, false];

function reducer(state, { type, index }) {
  switch (type) {
    case "expand-all":
      return [true, true, true];
    case "collapse-all":
      return [false, false, false];
    case "toggle":
      state[index] = !state[index];
      return [...state];
    case "toggleButton":
      state[index] = !state[index];
      return [...state];
    default:
      throw new Error();
  }
}

const choices = [
  { id: 1, score: "1", text: "Excellent" },
  { id: 2, score: "2", text: "Good" },
  { id: 3, score: "3", text: "Fair" },
  { id: 4, score: "4", text: "Poor" },
  { id: 5, score: "5", text: "Very Poor" },
];

/* 
function Block({ isOpen, title, onToggle, children }) {
  return (
    <div className="block">
      <button className="btn toggle" onClick={onToggle}>
        <span>{title}</span>
        <Down isOpen={isOpen} />
      </button>
      <Collapse layoutEffect isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
} 
*/

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
    }}
  />
);
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [value, setValue] = useState("female");
  const [selectedValue, setSelectedValue] = useState("a");
  // const [textRating, setTextRating] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("setValue");
  };

  const handleChangeEmoticons = (event) => {
    setSelectedValue(event.target.value);
    console.log("handleChangeEmoticons");
  };

  const handleTextChange = (event) => {
    console.log("handleTextChange");
  };

  // const handleClick = (event) => {
  //   console.log("event.target.dataset.id ", event.target.dataset);
  //   switch (event.target.value) {
  //     case "5":
  //       setTextRating("Excellent");
  //       break;
  //     case "4":
  //       setTextRating("Good");
  //       break;
  //     case "3":
  //       setTextRating("Fair");
  //       break;
  //     case "2":
  //       setTextRating("Poor");
  //       break;
  //     case "1":
  //       setTextRating("Very Poor");
  //       break;
  //   }
  // };
  console.log("choices", choices);
  return (
    <div className="app">
      <header>
        {/* 
        <button
          onClick={() => dispatch({ type: "expand-all" })}
          disabled={state.every((s) => s === true)}
        >
          Expand All
        </button>
        <button
          onClick={() => dispatch({ type: "collapse-all" })}
          disabled={state.every((s) => s === false)}
        >
          Collapse all
        </button> 
        */}
      </header>

      <Block
        title="Reception / Concierge / Information Counter"
        isOpen={state[0]}
        onToggle={() => dispatch({ type: "toggle", index: 0 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Accident & Emergency"
        isOpen={state[1]}
        onToggle={() => dispatch({ type: "toggle", index: 1 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Admission / Registration"
        isOpen={state[2]}
        onToggle={() => dispatch({ type: "toggle", index: 2 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Wards"
        isOpen={state[3]}
        onToggle={() => dispatch({ type: "toggle", index: 3 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Outpatient Clinics"
        isOpen={state[4]}
        onToggle={() => dispatch({ type: "toggle", index: 4 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Health Screening Centre"
        isOpen={state[5]}
        onToggle={() => dispatch({ type: "toggle", index: 5 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Lab"
        isOpen={state[6]}
        onToggle={() => dispatch({ type: "toggle", index: 6 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Imaging"
        isOpen={state[7]}
        onToggle={() => dispatch({ type: "toggle", index: 7 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Rehab"
        isOpen={state[8]}
        onToggle={() => dispatch({ type: "toggle", index: 8 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Billing / Cashier / Accounts"
        isOpen={state[9]}
        onToggle={() => dispatch({ type: "toggle", index: 9 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Pharmacy"
        isOpen={state[10]}
        onToggle={() => dispatch({ type: "toggle", index: 10 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>

      <Block
        title="Security Services"
        isOpen={state[11]}
        onToggle={() => dispatch({ type: "toggle", index: 11 })}
      >
        <div className="content">
          <ShowChoices choices={choices} />
          <ColoredLine color="#0072BC" />
          <div style={{ width: "100%", fontSize: "12px", color: "#0072BC" }}>
            Which aspect(s) do you rate as average / good / excellent?You may
            select 1 or more and then click submit.
          </div>
        </div>
      </Block>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
