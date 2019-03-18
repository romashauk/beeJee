import React from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  label,
  input,
  className,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    className={className}
    error={touched && error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

function LogInForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form__container">
      <Field
        component={renderTextField}
        label="Login"
        className="form__input"
        name="username"
      />
      <Field
        component={renderTextField}
        label="Password"
        className="form__input"
        name="password"
        type="password"
      />
      <button className="form__button" type="submit">
        Sign in
      </button>
    </form>
  );
}
const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'User name is required';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LogInForm);
