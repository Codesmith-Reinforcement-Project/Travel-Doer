import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

function signup() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <React.Fragment>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            const password = formJson.password;
            console.log(email);
            console.log(password);

            try {
              const response = await axios.post('http://localhost:8080/api/auth/signup', {
                email: email,
                password: password
              });
              await console.log(response);
              if (response.data === 'user successfully added...') {
                // const result = await response.json();
                alert('Sign up successful! Welcome!');
                // Handle success (e.g., show a notification or redirect)
              } else {
                alert('Sign up failed: ' + response.data);
                // Handle error (e.g., show an error message)
              }
            } catch (error) {
              console.error('Error signing up:', error);
              // Handle network or other errors
            }


            handleClose();
          },
        }}
      >
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To sign up, please enter your email address and password. 
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            size = "large"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            size = "normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Sign up</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default signup;