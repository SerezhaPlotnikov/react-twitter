import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { Field, reduxForm } from "redux-form";

function FormDialog(props) {
  const { handleSubmit } = props;
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='form-dialog-title'
      >
        <form onSubmit={handleSubmit}>
          <DialogActions>
            <Button onClick={props.handleClose} color='primary'>
              Cancel
            </Button>
            <button type='submit'>Submit</button>
          </DialogActions>
          <div>
            <label>First Name</label>
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
          </div>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email Address'
              type='email'
              fullWidth
            />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}

const ModalForm = reduxForm({
  form: "modalform",
})(FormDialog);

export default ModalForm;
