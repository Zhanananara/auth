import React from "react";
import CardContent from "@mui/material/CardContent";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Link, NavLink } from "react-router-dom";
import "./Home.scss";
import reanimation from "./images/reanimation.jpg";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="content">
        <div className="text-content">
          {/* <div className="title">«Реанимация — это прежде всего команда»</div> */}
          {/* <div className="text-p">
            <p>© Ольга Ципенюк</p>
          </div> */}
          {/* <img
            width="80%"
            src="https://medik.kg/static/img/minified-svg/line.svg"
            alt=""
          /> */}
        </div>
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "Zilla Slab",
            textAlign: "center",
          }}
        >
          Отделение реанимации иссык-кульской областной больницы
        </Typography>

        <div className="main-content">
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
            }}
          >
            <Grid item xs={12} md={12}>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  width="70%"
                  height="80%"
                  src={reanimation}
                  // src="https://pro-palliativ.ru/wp-content/uploads/2020/11/Depositphotos_13547674_l-2015-1024x681.jpg"
                  alt=""
                />
              </Grid>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="10px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <Typography
                  className="type"
                  style={{
                    fontSize: "23px",
                    margin: "3% 14%",
                    lineHeight: "1.9em",
                    fontFamily: "Zilla Slab",
                    textAlign: "justify",
                  }}
                >
                  Отделение было открыто в 1974 году с открытием Иссык-Кульской
                  Обеьдиненной Областной больницы в городе Каракол . Реанимация
                  — это комплекс процедур, направленных на возвращение человека
                  к жизни или поддержание жизненных функций организма больного.
                  Пограничное состояние между жизнью и смертью, при котором
                  необходимо проводить реанимацию в медицинской практике носит
                  названием терминальное состояние. Реанимационные мероприятия
                  направлены на выведения человека из терминального состояния.
                  <br />
                  Расчитано на 12 коек :<li>Детские - 3 </li>
                  <li>Взрослые- 9 </li>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContext: "center",
              textAlign: "center",
            }}
          >
            <Grid item xs={12} md={12}>
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  width="70%"
                  height="80%"
                  // src="https://aussiedlerbote.de/wp-content/uploads/2021/11/reanimaciya.jpg"
                  alt=""
                  src="https://pro-palliativ.ru/wp-content/uploads/2020/11/Depositphotos_13547674_l-2015-1024x681.jpg"
                />
              </Grid>
              <Typography
                placement="bottom"
                variant="body1"
                component="div"
                color="white"
                my="10px"
                p="0 40px"
                sx={{
                  height: "100%",
                  fontSize: "23px",
                  color: "black",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Modern Antiqua",
                  }}
                >
                  Реанимация{" "}
                </Typography>
                <Typography
                  style={{
                    fontSize: "23px",
                    margin: "3% 12%",
                    lineHeight: "1.9em",
                    textAlign: "justify",
                    fontFamily: "Zilla Slab",
                  }}
                >
                  К реанимационным относятся не только мероприятия, направленные
                  на восстановление сердечной деятельности и дыхания у больных и
                  пострадавших, находящихся в состоянии клинической смерти, но и
                  меры, направленные на профилактику клинической смерти, а также
                  искусственное управление, иногда весьма длительное, функциями
                  дыхания, сердца, деятельностью мозга, метаболическими
                  процессами и др.
                  <br />
                  <h3 style={{ textAlign: "start" }}>
                    Реанимационная помощь осуществляется:
                  </h3>
                  <li>в кардиологическом </li>
                  <li>в неврологическом</li>
                  <li>в хирургическом</li>
                  <li>в терапевческих отделениях</li>
                  Так же для
                  <li>лор</li>
                  <li>травмотологических</li>
                  <li>хирургических операций</li>
                  <br />
                  Врачи анестезиологи-реаниматологи отделения АРиИТ взрослых
                  проводят плановые и экстренные анестезии и оказывают
                  круглосуточную неотложную помощь в 3-х операционных,
                  оснащённых современной дыхательной и следящей аппаратурой,
                  используя современные медицинские технологии, методики
                  поддержания постоянного температурного режима пациента и т.п.
                  В отделении имеется собственный Банк препаратов крови.
                  <MenuItem>
                    <NavLink to="/specialist" className="mobile-link">
                      <h5 className="spec">Специалисты</h5>
                    </NavLink>
                  </MenuItem>
                  <li>Усеналиев Ч.Э </li>
                  <li> Матиев Ы.Р</li>
                  <li>Тынчтыкбеков Т.Т </li>
                  <li>Жаманкулова Ф. </li>
                  <li>Исаева А.С</li>
                  <li>Ишембиева Д.К</li>
                  <li>Мусаев А.Д</li>
                  <li>Умиров Ч.Р</li>
                  <li>Мамбетакунов Ж.А </li>
                  <li>Урбаев Э.Э</li>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </div>
        {/* <div className="information">
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Реанимация
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Иссык-Кульская обьединенная областная больница
              </Typography>

              <Typography variant="body2" style={{ margin: "10px" }}>
                Отделение было открыто в 1974 году с открытием Иссык-Кульской
                Обеьдиненной Областной больницы в городе Каракол
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Койки
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Расчитано:12 коек
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <li>Детские - 3 </li>
                <li>Взрослые- 9 </li>
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5">
                Реанимационная помощь осуществляется:
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <li>в кардиологическом </li>
                <li>в неврологическом</li>
                <li>в хирургическом</li>
                <li>в терапевческих отделениях</li>
                Так же для
                <li>лор</li>
                <li>травмотологических</li>
                <li>хирургических операций</li>
              </Typography>
            </CardContent>
          </Card>
          <Card className="card-info" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Специалисты
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                <li>Усеналиев Ч.Э </li>
                <li> Матиев Ы.Р</li>
                <li>Тынчтыкбеков Т.Т </li>
                <li>Жаманкулова Ф. </li>
                <li>Исаева А.С</li>
                <li>Ишембиева Д.К</li>
                <li>Мусаев А.Д</li>
                <li>Умиров Ч.Р</li>
                <li>Мамбетакунов Ж.А </li>
                <li>Урбаев Э.Э</li>
              </Typography>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
