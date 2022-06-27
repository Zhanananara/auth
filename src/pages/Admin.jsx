import React from "react";
import { Container, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { Link, Outlet, useLocation } from "react-router-dom";
import List from "../components/Admin/List";
import Products from "./Products";
const Admin = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <Container maxWidth="lg">
        <div style={{ display: "flex", flexDirection: "start" }}>
          <h1>Admin page</h1>
        </div>
        {pathname !== "/admin" ? (
          <Link to="add">
            <IconButton>
              <AddCircleIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
          </Link>
        ) : null}
        <Outlet />
      </Container>
    </div>
  );
};

export default Admin;
