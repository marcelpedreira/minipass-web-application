import React from "react";
import TextField from '@material-ui/core/TextField';

const TextFieldInput = (props: any) => {
  const {
    input,
    label,
    name,
    // classes,
    // meta: { touched, error },
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
      // className={classes.textField}
      value={input.value}
      onChange={event => input.onChange(event.target.value)}
      variant="outlined"
      fullWidth={fullWidth}
      margin={margin}
      InputLabelProps={{ shrink: true }}
      {...restProps}
    />
  );
}

export default TextFieldInput;