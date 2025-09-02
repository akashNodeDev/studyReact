import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const titleElement = (
  <div className="heading" id="heading">
    React Element Example
  </div>
);

const newTitle = <span>Hello</span>;

// React Functional Component
const Title = () => (
  <h1 className="heading" id="heading">
    React Functional Component Example
  </h1>
);

// React Functional Component
const num = 100;
const HeadingComponent = () => (
  <div id="container">
    {/* We can call the functional component inside another functional component in the below three ways*/}
    {/**Also we can write any pce of the javascript code inside the functional component in the curly braces */}
    <Title />
    <Title></Title>
    {Title()}
    <h1>Ths is an exmple of Functional Component</h1>
    {/** Example of calling an element inside the functional component */}
    {titleElement}
    {/** Example of calling a JS variable inside the functional component */}
    <b>{num}</b>
    <b>{newTitle}</b>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
