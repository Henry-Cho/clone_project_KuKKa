import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
    padding: "14px",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function HalfRating() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating" defaultValue={0.0} precision={0.5} />
      {/* Read Only 는 게시글 작성하고나서!? */}
      {/* <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      /> */}
    </div>
  );
}