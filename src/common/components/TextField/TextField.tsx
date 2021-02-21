import React from "react";
import TextField from '@material-ui/core/TextField';

// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };

const TextFieldInput = (props: any) => {
  const {
    input,
    label,
    // name,
    // classes,
    // meta: { touched, error },
    // meta,
    form: { touched, error },
    field: { name, value, onChange, onBlur },
    helperText,
    fullWidth,
    labelProps,
    margin,
    InputProps,
    ...restProps
  } = props;
  // const hasError = !!(touched && error);
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      helperText={touched.name && error.name}
      // className={classes.textField}
      value={value}
      // onChange={event => input.onChange(event.target.value)}
      onChange={onChange}
      variant="outlined"
      fullWidth={fullWidth}
      margin={margin}
      InputLabelProps={{ shrink: true }}
      {...restProps}
    />
  );
}

export default TextFieldInput;