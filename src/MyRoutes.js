import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Admin/Edit";
import Add from "./components/Admin/Add";
import List from "./components/Admin/List";
import MainLayout from "./layout/MainLayout";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Specialist from "./pages/Specialist";
import Require from "./components/Auth/Require";
import Admin from "./pages/Admin";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/specialist" element={<Specialist />} />
        <Route
          path="/admin"
          element={
            <Require>
              <Admin />
            </Require>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />

          <Route path="edit/:id" element={<Edit />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:prodId" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
