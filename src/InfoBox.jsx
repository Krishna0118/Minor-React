import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import CloudIcon from "@mui/icons-material/Cloud";

export default function InfoBox({ info }) {
  let initialURL =
    "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.jpg?s=612x612&w=is&k=20&c=FelKRxiV_U--KxN2N6mreV_ofYbFfptvAJ61Z3wtP2A=";

  const HOT_URL =
    "https://media.istockphoto.com/id/1257088461/photo/glowing-sun-on-orange-sky.jpg?s=2048x2048&w=is&k=20&c=t06Dia9hVCAJNvlCNdAFSFDMqZh666GeZ91J1ZIaua4=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1638778809167-c9e1e55dcd70?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (info.temp >= 40) {
    initialURL = HOT_URL;
  } else if (info.temp <= 15) {
    initialURL = COLD_URL;
  } else if (info.humidity >= 70) {
    initialURL = RAIN_URL;
  }

  return (
    <div className="infoBox">
      <div className="weatherCard">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={initialURL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <CloudIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
            
              <p>
                The Weather can be described as <b>{info.weather}</b> 
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}