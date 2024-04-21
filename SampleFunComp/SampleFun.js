import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 id="title">This is React functional Component</h1>
);

const HeadingComponent = () => (
    <div id="component">
    <Title />
    <h1 id="heading">Component inside another component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);