import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput ({ input }) {
    return <input {...input} />; // lecture 328
  }

  render () {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form : 'streamCreate' // name of form
})(StreamCreate);
