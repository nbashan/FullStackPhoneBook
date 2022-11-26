import React from 'react';
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<h1>HELLO WORLD</h1>);
