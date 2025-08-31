import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches to the JS) - Parcel - Babel

//JSX => Babel Transpiles it to React.createElement => React Element JS Object => HTML Element (render)
const jsxHeading = <h1 className="heading">Hello My First JSX Program</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
