import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field, Form } from "formik";
import TextField from 'common/components/TextField/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {CardHolder} from '../containers/CardHoldersContainer';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
  },
  title: {
    marginBottom: '1rem'
  }
});

interface CardHolderFormProps {
  title: string;
  submit: (values: CardHolder) => void;
  cancel: () => void;
  values?: CardHolder;
}

export default function CardHolderForm(props: CardHolderFormProps) {
  const classes = useStyles();

  console.log('values', props.values)

  const name = props.values ? props.values.name : "";
  console.log('name', name)

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.title}>
        {props.title}
      </Typography>
      <Formik
          initialValues={{ 
            id: props.values ? props.values.id : "", 
            name: props.values ? props.values.name : "",  
            card_number: props.values ? props.values.card_number : "" 
          }}
          onSubmit={props.submit}
      >
        <Form>       
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={12}> 
              <Field name="name" label="name" component={TextField} fullWidth margin="dense" /> 
            </Grid>
            <Grid item lg={4} md={4} sm={12}> 
              <Field name="card_number" label="card_number" component={TextField} fullWidth margin="dense" /> 
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <Button
                style={{marginLeft: 2, marginRight: 2}}
                type="submit"
                color="primary"
                variant="contained"
              >
                Save
              </Button>
              <Button
                style={{marginLeft: 2, marginRight: 2}}
                color="primary"
                variant="contained"
                onClick={props.cancel}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Paper>
    
  );
};
