import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Properties from "./Components/Properties";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PropertyDetails from "./Components/PropertyDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<App />}>
      <Route index element={<Properties />} />
      <Route path="/pg" element={<Properties purpose="PG" />} />
      <Route path="/flat" element={<Properties purpose="FLAT" />} />
      <Route path="/villa" element={<Properties purpose="VILLA" />} />
      <Route path="/plot" element={<Properties purpose="PLOT" />} />
      <Route path="/commercial" element={<Properties purpose="COMMERCIAL" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/propertydetail" element={<PropertyDetails />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
