import React from "react";

const RenderList = (props) => {
  const RoutersChecklist = [
    "BrowserRouter",
    "Router",
    "Route",
    "Switch",
    "Link",
  ];

  return (
    <ul>
      {RoutersChecklist.map((Checklist) => (
        <li>{Checklist}</li>
      ))}
    </ul>
  );
};

export default RenderList;
