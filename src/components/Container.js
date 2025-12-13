import React from "react";

export function Container(props) {
  return (
    <div
      className={`w-full max-w-7xl p-2 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
