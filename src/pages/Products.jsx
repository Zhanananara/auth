import { Container } from "@mui/system";
import React from "react";
import List from "../components/Admin/List";
import Filter from "../components/Products/Filter";
import ProdList from "../components/Products/ProdList";

const Products = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <ProdList />
        {/* <List /> */}
      </Container>
    </div>
  );
};

export default Products;
