import { Link, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React, { createContext, useContext, useState, useEffect } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useProductContext } from "../context/ProductContextProvide";

export default function OneProduct({ item }) {
  const { products, getProducts, deleteProduct } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (prod) => {
    let answer = true;

    if (answer) deleteProduct(prod);
  };
  const { pathname } = useLocation();
  return (
    // <Grid item xs={12} sm={6} md={6}>
    //   <Card
    //     sx={{
    //       height: 600,
    //       maxWidth: "lg",
    //       margin: "auto",
    //     }}
    //     elevation={24}
    //   >
    //     <CardHeader
    //       name={item.name}
    //       variant="h6"
    //       sx={{ margin: " 0 auto", textAlign: "center" }}
    //     />
    //     <CardMedia
    //       component="img"
    //       height="400"
    //       number={item.number}
    //       alt={item.date}
    //     />
    //     <CardContent sx={{}}>
    //       {/* <Typography gutterBottom variant="h5" component="div">
    //           {item.title}
    //         </Typography> */}
    //       <Typography variant="h6" color="green">
    //         ${item.doctor}
    //       </Typography>
    //       <Typography variant="body1">Type: {item.type}</Typography>
    //       {/* <Typography variant="body2" color="text.secondary">
    //           {item.description}
    //         </Typography> */}
    //     </CardContent>

    //     <BottomNavigation>
    //       {pathname !== `detail/${item.id}` ? (
    //         <BottomNavigationAction
    //           component={Link}
    //           to={`detail/${item.id}`}
    //           label="detail"
    //           value="detail"
    //           icon={<ReadMoreIcon />}
    //         />
    //       ) : null}
    //     </BottomNavigation>
    //   </Card>
    // </Grid>
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ color: "black" }}>
          <TableRow className="tablerow" style={{ color: "black" }}>
            {pathname !== `detail/${item.id}` ? (
              <TableCell
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                История болезни
              </TableCell>
            ) : null}

            <TableCell
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "1.5rem",
                fontFamily: "'Zilla Slab'",
              }}
            >
              Имя
            </TableCell>

            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
              align="left"
            >
              Дата рождения{" "}
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Группа крови{" "}
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Резус фактор{" "}
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
              align="left"
            >
              Лечащий врач
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
              align="left"
            >
              Откуда переведен
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
              align="left"
            >
              Дата госпитализации
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
              align="left"
            >
              Жалобы
            </TableCell>
            <TableCell
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.5rem" }}
              align="left"
            >
              Рекомендации
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "black", fontSize: "1rem" }}
                component="th"
                scope="row"
              >
                {item.number}
              </TableCell>
              <TableCell
                sx={{ color: "black", fontSize: "1rem" }}
                component="th"
                scope="row"
              >
                {item.name}
              </TableCell>
              <TableCell
                sx={{ color: "black", fontSize: "1rem" }}
                component="td"
                scope="row"
              >
                {item.date}
              </TableCell>
              <TableCell sx={{ color: "black", fontSize: "1rem" }}>
                {item.blood}
              </TableCell>
              <TableCell sx={{ color: "black", fontSize: "1rem" }}>
                {item.rezusfactor}
              </TableCell>
              <TableCell sx={{ color: "black", fontSize: "1rem" }} align="left">
                {item.doctor}
              </TableCell>
              <TableCell sx={{ color: "black", fontSize: "1rem" }} align="left">
                {item.type}
              </TableCell>
              <TableCell sx={{ color: "black", fontSize: "1rem" }} align="left">
                {item.datehp}
              </TableCell>
              <TableCell sx={{ color: "black", fontSize: "1rem" }} align="left">
                {item.complaints}
              </TableCell>

              <TableCell sx={{ color: "black", fontSize: "1rem" }} align="left">
                {item.dop}
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleDelete(item)}>
                  <DeleteIcon />
                </IconButton>
                <Link to={`edit/${item.id}`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                {pathname !== `detail/${item.id}` ? (
                  <Link to={`detail/${item.id}`}>
                    <IconButton>
                      <ReadMoreIcon />
                    </IconButton>
                  </Link>
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
