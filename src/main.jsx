import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import Gamelayout from "./Layout/Gamelayout";
import Homelayout from "./Layout/Homelayout";
import Instructionlayout from "./Layout/Instructionlayout";
import Rootlayout from "./Layout/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/quiz-app/" element={<Rootlayout />}>
      <Route index element={<Homelayout />} />
      <Route path="/quiz-app/Instructionlayout" element={<Instructionlayout />}/>
        <Route path="/quiz-app/Gamelayout" element={<Gamelayout/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
