import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "grey",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));

const Filter = ({
  type,
  setType,
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        // backgroundColor: "grey",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <MenuItem value="all" label="All">
              All
            </MenuItem>
            <MenuItem value="surgery" label="Хирургия">
              Хирургия
            </MenuItem>
            <MenuItem
              value="   Матиев Ысакбек Рашидович"
              label="   Матиев Ысакбек Рашидович"
            >
              Матиев Ысакбек Рашидович
            </MenuItem>
            <MenuItem value="therapy" label="Терапия">
              Терапия
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* new type */}

      <br />
      <br />
      <Box sx={{ minWidth: 220 }}>
        <IOSSlider
          sx={{ maxWidth: "350px" }}
          value={slider}
          onChange={(e, newValue) => {
            setSlider(newValue);
            setPage(1);
          }}
          valueLabelDisplay="auto"
          max={maxSliderValue}
          min={minSliderValue}
        />
        {/* <Typography color="white">Price</Typography> */}
      </Box>
      <br />
      <Button onClick={handleReset} variant="outlined">
        Reset
      </Button>
    </div>
  );
};

export default Filter;
