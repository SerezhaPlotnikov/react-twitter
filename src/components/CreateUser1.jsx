// import { Field, Form, Formik } from "formik";
// import React from "react";

// export const CreateUser1 = () => {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <Formik
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         onSubmit={(props, value) => {
//           console.log(value);
//           debugger;
//           props.dispatch.AuthCreate(value);
//         }}
//       >
//         <Form>
//           <label htmlFor='email'>Email</label>
//           <Field
//             id='email'
//             name='email'
//             placeholder='jane@acme.com'
//             type='email'
//           />
//           <label htmlFor='Password'>Password</label>
//           <Field
//             type='password'
//             id='password'
//             name='password'
//             placeholder='password'
//           />
//           <button type='submit'>Submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
