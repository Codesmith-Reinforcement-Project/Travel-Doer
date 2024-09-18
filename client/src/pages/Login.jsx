import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

function login() {
  let successful = false;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    // console.log(e.target.innerText);
    // if (successful) e.target.innerText = 'LOG OUT'
  };

  const handleClose = (e) => {
    setOpen(false);
    // console.log(e.target)
    // if (successful) e.target.innerText = 'LOG OUT'
  };
 
  return (
    <React.Fragment>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        Log In
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
              const response = await axios.post('http://localhost:8080/api/auth/login', {
                email: email,
                password: password
              });
              
              if (response.data) {
                successful = true;
                // const result = await response.json();
                alert('Log in successful: Welcome ', email);
                // Handle success (e.g., show a notification or redirect)
              } else {
                alert('Log in unsuccessful! Check email and password.');
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
        <DialogTitle>Log In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login, please enter your email address and password. 
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
          <Button type="submit">Log In</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default login;