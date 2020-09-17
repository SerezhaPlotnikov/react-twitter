import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateUser = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>Create User</div>
      {/* <div> */}
      {/* <label>First Name</label>
        <div>
          <Field
            name='firstName'
            component='input'
            type='text'
            placeholder='First Name'
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name='lastName'
            component='input'
            type='text'
            placeholder='Last Name'
          />
        </div>
      </div> */}
      <div>
        <label>Email</label>
        <div>
          <Field
            name='email'
            component='input'
            type='email'
            placeholder='Email'
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='Password'
          />
        </div>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

const CreateUsers = reduxForm({
  form: "createuser",
})(CreateUser);

export default CreateUsers;
