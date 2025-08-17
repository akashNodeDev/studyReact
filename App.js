import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *  <div id="child1">
 *    <h1> I'm in h1 tag </h1>
 *    <h2> I'm in h2 tag </h2>
 *  </div>
 *  <div id="child2">
 *    <h1> I'm in h1 tag </h1>
 *    <h2> I'm in h2 tag </h2>
 *  </div>
 * </div>
 *
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "check" },
//   "First React Program"
// );
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "child1-h1" }, "I'm in h1 tag"),
    React.createElement("h2", { key: "child1-h2" }, "I'm in h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "child2-h1" }, "I'm in h1 tag"),
    React.createElement("h2", { key: "child2-h2" }, "I'm in h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
