import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Chyngyz from "./images/Chyngyz R..jpg";
import Dayana from "./images/Dayana K..jpeg";
import Cholponbek from "./images/Cholponbek.jpg";
import Farida from "./images/farida.PNG";
import Talant from "./images/talant.PNG";
import Alisher from "./images/alisher.PNG";
import Erzhan from "./images/erzhhan.PNG";
import Aigerim from "./images/aigerim.PNG";
import Ysakbek from "./images/ysakbek.PNG";
import "./Specilaist.css";

export default function ActionAreaCard() {
  return (
    <div className="spec">
      <div className="logo">
        <h1>Наши специалисты</h1>
      </div>
      <div className="products">
        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Farida}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Жаманкулова Фарида Ахмеджановна
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Заведующая отделением Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Talant}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Тынчтыкбеков Талант Тынчтыкбекович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="100%"
              height="440"
              image={Cholponbek}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Усеналиев Чолпонбек Эркинбекович
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Ysakbek}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Матиев Ысакбек Рашидович
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Aigerim}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Исаева Айгерим Сапаргалиевна{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Врач анестезиолог-реаниматолог
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Dayana}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Ишембиева Даяна Куванычпековна{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Клинический ординатор АиР
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Alisher}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Мусаев Алишер Дамирович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Chyngyz}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Умиров Чынгыз Рахматович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 500, height: 600 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image={Erzhan}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Karma",
                }}
              >
                Урбаев Эржан Эрланбекович{" "}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", fontSize: "1.1rem" }}
              >
                Клинический ординатор АиР{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
