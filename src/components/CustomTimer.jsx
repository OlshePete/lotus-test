import { Chip, Typography } from "@mui/material";
import React, { Component } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Countdown from "react-countdown";

const font = "Unbounded";

const setStorageKey = () => {
  if (!localStorage.getItem("key")) {
    localStorage.setItem("key", 0);
    return;
  }
  if (localStorage.getItem("key") == 0) {
    localStorage.setItem("key", 1);
    return;
  }
  if (localStorage.getItem("key") == 1) {
    localStorage.setItem("key", 2);
    return;
  }
  if (localStorage.getItem("key") == 2) {
    localStorage.setItem("key", 3);
    return;
  }
  if (localStorage.getItem("key") == 3) {
    localStorage.setItem("key", 0);
    return;
  }
};
//init changes
export default class CustomTimer extends Component {
  state = { date: Date.now() + 5000 };
  autostart = () => {
    this.setState({ date: Date.now() + 5000 });
    setStorageKey();
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
          py: 3,
          fontSize: 24,
          opacity: "0.7",
          width: 200,
        }}
      />
    );
  }
}
