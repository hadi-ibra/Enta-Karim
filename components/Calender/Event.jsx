import { Typography, Checkbox } from "@mui/material";
import React from "react";
import mobileStyle from "../../styles/mobile.module.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Event({ date, title, text, bg }) {
  let d = date.getDate();
  let m = date.toLocaleString("en-us", { month: "short" });
  let background = bg % 2 == 0 ? "#063b66" : "#09bdce"
  return (
    <>
      <div className={mobileStyle.eventBox}>
        <div className={mobileStyle.dateBox} style={{backgroundColor:background}}>
          <Typography className={mobileStyle.number}>{d}</Typography>
          <Typography>{m}</Typography>
        </div>
        <div className={mobileStyle.descBox} style={{backgroundColor:background}}>
          <div className={mobileStyle.text}>
            <Typography className={mobileStyle.title}>{title}</Typography>
            <Typography>{text}</Typography>
          </div>
          <div className={mobileStyle.checkBox}>
            <Checkbox
              {...label}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
