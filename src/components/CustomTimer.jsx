import { Chip, Typography } from "@mui/material";
import React, { Component } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Countdown from "react-countdown";

const font = "Unbounded";

export default class CustomTimer extends Component {
  state = { date: Date.now() + 120000 };
  autostart = () => {
    this.setState({ date: Date.now() + 120000 });
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
