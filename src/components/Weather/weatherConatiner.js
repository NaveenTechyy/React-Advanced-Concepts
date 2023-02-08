import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import { useSelector, useDispatch } from "react-redux";
import { weatherDetails } from "./Redux-saga/weatherAction";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import wind from "./Images/wind.png";
import temperature from "./Images/temperature.jpg";
import humidity from "./Images/Humidity.png";
import sunrise from "./Images/sunrise.png";
import sunset from "./Images/sunset.png";
import sealevel from "./Images/sealevel.png";
import background from "./Images/background.jpg";

function WeatherConatiner() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const weather = useSelector(state => state);

  const handleChange = event => {
    setCity(event);
  };

  const onSearch = () => {
    dispatch(weatherDetails(city));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "auto",
        height: "auto",
      }}
    >
      <h1 style={{ marginLeft: "650px" }}>Weather App</h1>

      <SearchBar
        value={city}
        onChange={handleChange}
        onRequestSearch={onSearch}
      />

      {weather.map((item, idx) => (
        <div
          id={idx}
          style={{
            margin: "auto",
            width: "50%",
            border: "3px #ffffff",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <div>
            <Card
              style={{
                background: "yellow",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div style={{ display: "flex", margin: "auto" }}>
            <Card style={{ flex: 2, margin: "20px" }}>
              <CardContent>
                <img
                  src={wind}
                  style={{ width: "100px", height: "100px" }}
                  alt="Wind"
                />
                <Typography variant="h5" component="div">
                  {`${item.wind.speed}km/h`}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  wind
                </Typography>
              </CardContent>
            </Card>

            <Card style={{ flex: 2, margin: "20px" }}>
              <CardContent>
                <img
                  src={temperature}
                  style={{ width: "100px", height: "100px" }}
                  alt="temperature"
                />
                <Typography variant="h5" component="div">
                  {`${parseFloat(item.main.temp - 272.15).toFixed(2)}K`}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Temperature
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ flex: 2, margin: "20px" }}>
              <CardContent>
                <img
                  src={humidity}
                  style={{ width: "100px", height: "100px" }}
                  alt="humidity"
                />
                <Typography variant="h5" component="div">
                  {`${item.main.humidity}%`}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Humidity
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div style={{ display: "flex", margin: "auto" }}>
            <Card style={{ flex: 2, margin: "20px" }}>
              <CardContent>
                <img
                  src={sunrise}
                  style={{ width: "100px", height: "100px" }}
                  alt="sunrise"
                />
                <Typography variant="h5" component="div">
                  {item.sys.sunrise}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Sunrise
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ flex: 2, margin: "20px" }}>
              <CardContent>
                <img
                  src={sunset}
                  style={{ width: "100px", height: "100px" }}
                  alt="Wind"
                />
                <Typography variant="h5" component="div">
                  {item.sys.sunset}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Sunset
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ flex: 2, margin: "20px" }}>
              <CardContent>
                <img
                  src={sealevel}
                  style={{ width: "100px", height: "100px" }}
                  alt="Wind"
                />
                <Typography variant="h5" component="div">
                  {item.main.sea_level}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Sea Level
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherConatiner;
