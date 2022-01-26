import * as React from "react";
import './starRating.scss';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";


const StarRating = (value) => {

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
    >
      <Typography component="legend">{value.value}</Typography>
      <Rating 
        name="half-rating-read" 
        value={value.value} 
        precision={0.5} 
        max={10} 
        readOnly 
      />
    </Box>
  );
}

export default StarRating;