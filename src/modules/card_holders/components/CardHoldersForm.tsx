import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form } from "formik";
import TextField from 'common/components/TextField/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
  },
  title: {
    marginBottom: '1rem'
  }
});

export default function CardHolderForm(props: any) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.title}>
        {props.title}
      </Typography>
      <Formik
          initialValues={{ name: "", card_number: "" }}
          onSubmit={props.submitData}
      >
        <Form>       
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={12}> <Field name="name" label="name" component={TextField} fullWidth margin="dense"/> </Grid>
            <Grid item lg={4} md={4} sm={12}> <Field name="card_number" label="card_number" component={TextField} fullWidth margin="dense"/> </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Paper>
    
  );
};
