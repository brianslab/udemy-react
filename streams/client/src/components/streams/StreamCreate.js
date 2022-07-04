import React from 'react';
import { Field, formValues, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput ({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} /> {/* lecture 328*/}
      </div>
    );
  }

  onSubmit (formValues) {
    console.log(formValues);
  }

  render () {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Title is required.';
  }

  if (!formValues.description) {
    errors.description = 'Description is required.';
  }

  return errors;
};

export default reduxForm({
  form : 'streamCreate' // name of form
})(StreamCreate);
