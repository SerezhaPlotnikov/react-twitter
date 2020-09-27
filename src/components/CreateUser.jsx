import React from "react";
import { Field, reduxForm } from "redux-form";
import "./CreateUser.scss";

const CreateUser = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>Create User</div>
      <div>
        <label>Email</label>
        <div>
          <Field
            className='auth__input'
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
            className='auth__input'
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
