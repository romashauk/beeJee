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

function TaskForm({ edit, handleSubmit }) {
  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <Field
        component={renderTextField}
        label="Name"
        className="form__input"
        name="username"
        disabled={edit}
      />
      <Field
        component={renderTextField}
        label="Email"
        className="form__input"
        name="email"
        disabled={edit}
      />
      <Field
        style={{ marginTop: 20 }}
        component={renderTextField}
        name="text"
        label="Task"
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <button type="submit">ADD</button>
    </form>
  );
}

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'User name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email is not valid';
  }

  if (!values.text) {
    errors.text = 'Text is required';
  }

  return errors;
};

export default reduxForm({
  form: 'taskForm',
  validate,
})(TaskForm);
