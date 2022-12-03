import "./styles.css";
import React from "react";
export default function Hello() {
  return (
    <div className="App">
      <h1>Event Handling:</h1>
      <ClickMe />
      <ClickMeClass msg="Hello ClickMe!!!" />
    </div>
  );
}
const ClickMe = () => {
  const onClickHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <button id="dfghhj" onClick={onClickHandler}>
        ClickMe
      </button>
      <input id="input" onChange={onClickHandler} />
    </div>
  );
};

class ClickMeClass extends React.Component {
  onClickHandler = (e) => {
    console.log(this);
    console.log(this.props);
    console.log(this.props.msg);
  };
  render() {
    return (
      <div>
        <button id="dfghhj" onClick={this.onClickHandler}>
          ClickMe
        </button>
        <input id="input" onChange={this.onClickHandler} />
      </div>
    );
  }
}
