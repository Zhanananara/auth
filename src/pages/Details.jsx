import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../components/context/ProductContextProvide";
import Spinner from "../components/Products/Spinner";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const Details = () => {
  const { prodId } = useParams();
  const { getOneProduct, forEditVal } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  return (
    <Container maxWidth="lg">
      <div>
        <Paper>
          <div className="prodDetail">
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIosNewIcon fontSize="large" sx={{ color: "black" }} />
            </IconButton>
            <h1>DETAILS</h1>{" "}
          </div>
          {forEditVal ? (
            <>
              {/* <Card sx={{ marginBottom: "20px" }}>
                <div className="detail_body">
                  <div className="detail_right">
                    <CardHeader
                      title={forEditVal.number}
                      subheader={forEditVal.name}
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    />
                    <CardMedia
                      component="img"
                      image={forEditVal.date}
                      alt={forEditVal.description}
                      sx={{
                        width: "100%",
                        height: "80vh",
                        textAlign: "center",
                      }}
                    />
                    <CardContent>
                      <Typography
                        id="desc"
                        variant="body2"
                        color="text.secondary"
                      >
                        {forEditVal.datehp}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing id="price">
                      ${forEditVal.blood}
                    </CardActions>
                  </div>
                </div>
              </Card> */}
              <TableContainer component={Paper} sx={{}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead style={{ color: "black" }}>
                    <TableRow className="tablerow" style={{ color: "black" }}>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        История болезни
                      </TableCell>

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
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                        align="left"
                      >
                        Дата рождения{" "}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        Группа крови{" "}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        Резус фактор{" "}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                        align="left"
                      >
                        Лечащий врач
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                        align="left"
                      >
                        Откуда переведен
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                        align="left"
                      >
                        Дата госпитализации
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                        align="left"
                      >
                        Жалобы
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                        align="left"
                      >
                        Рекомендации
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        component="th"
                        scope="row"
                      >
                        {forEditVal.number}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        component="th"
                        scope="row"
                      >
                        {forEditVal.name}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        component="td"
                        scope="row"
                      >
                        {forEditVal.date}
                      </TableCell>
                      <TableCell sx={{ color: "black", fontSize: "1rem" }}>
                        {forEditVal.blood}
                      </TableCell>
                      <TableCell sx={{ color: "black", fontSize: "1rem" }}>
                        {forEditVal.rezusfactor}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        align="left"
                      >
                        {forEditVal.doctor}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        align="left"
                      >
                        {forEditVal.type}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        align="left"
                      >
                        {forEditVal.datehp}
                      </TableCell>
                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        align="left"
                      >
                        {forEditVal.complaints}
                      </TableCell>

                      <TableCell
                        sx={{ color: "black", fontSize: "1rem" }}
                        align="left"
                      >
                        {forEditVal.dop}
                      </TableCell>
                    </TableRow>
                    )
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          ) : (
            <Spinner />
          )}
        </Paper>
      </div>
    </Container>
  );
};

export default Details;
