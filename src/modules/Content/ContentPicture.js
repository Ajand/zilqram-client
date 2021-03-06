import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  image: {
    width: "100%",
  },
}));

const ContentPicture = ({ src, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={image ? `${process.env.REACT_APP_FILE_URL}/${image}` : src}
        className={classes.image}
      />
    </div>
  );
};

export default ContentPicture;
