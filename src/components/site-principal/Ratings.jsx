"use client";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function Ratings({ colorRating }) {
  const [value, setValue] = useState(2.5);

  return (
    <>
      <Typography component="legend">{value}/5&nbsp;(10 avaliações)</Typography>
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          if (newValue == null) {
            setValue(0);
          } else {
            setValue(newValue);
          }
        }}
        value={value}
        icon={
          <StarIcon
            sx={{
              color: colorRating == undefined ? "black" : colorRating,
              fontSize: 30,
            }}
          />
        }
        emptyIcon={<StarBorderIcon sx={{ color: "", fontSize: 30 }} />}
        precision={0.5}
      />
    </>
  );
}
