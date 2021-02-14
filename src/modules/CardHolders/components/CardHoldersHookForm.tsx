import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
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
  values: CardHolder;
}

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

export default function CardHolderForm(props: CardHolderFormProps) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      id: props.values ? props.values.id : "", 
      name: props.values ? props.values.name : "",  
      card_number: props.values ? props.values.card_number : "" 
    },
    // validationSchema: validationSchema,
    onSubmit: props.submit
  });

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.title}>
        {props.title}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin="dense"
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="card_number"
          name="card_number"
          label="card_number"
          value={formik.values.card_number}
          onChange={formik.handleChange}
          error={formik.touched.card_number && Boolean(formik.errors.card_number)}
          helperText={formik.touched.card_number && formik.errors.card_number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Paper>
  );
};
