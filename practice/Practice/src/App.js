import React, { useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Organizms/Home/Home";
import AddtoCart from "./Components/Organizms/AddTocart/AddtoCart";
import Layout from "./Components/Organizms/Layout/Layout";
import FormPractice from "./Components/Molecules/FormPractice/FormPractice";
import Todo from "./Components/Molecules/Todo/Todo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddtoCart />} />
        <Route path="/form" element={<FormPractice />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Layout>
  );
}

export default App;
