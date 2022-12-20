import { Chip, Typography } from "@mui/material";
import React, { Component } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Countdown from "react-countdown";

const font = "Unbounded";

export default class CustomTimer extends Component {
  state = { date: Date.now() + 5000 };
  autostart = () => {
    this.setState({ date: Date.now() + 5000 });
    if (localStorage.getItem("key") === 1) {
      return localStorage.setItem("key", 2);
    }
    if (localStorage.getItem("key") === 2) {
      return localStorage.setItem("key", 3);
    }
    if (localStorage.getItem("key") === 3) {
      return localStorage.setItem("key", 4);
    }
    if (localStorage.getItem("key") === 4) {
      return localStorage.setItem("key", 1);
    }
  };

  render() {
    return (
      <Chip
        label={
          <Typography fontSize="20px" fontFamily={font}>
            <Countdown
              key={this.state.date}
              date={this.state.date}
              onComplete={this.autostart}
            />
          </Typography>
        }
        color="error"
        icon={<AvTimerIcon />}
        sx={{
          my: 2,
          py: 4,
          fontSize: 24,
          width: "240px",
          opacity: "0.9",
        }}
      />
    );
  }
}
