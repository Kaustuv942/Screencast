import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Log() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button variant="contained" color="primary">
        Login with Facebook
      </Button>
      <Button variant="contained" color="secondary">
        Login with Google
      </Button>
     
    </div>
  );
}
