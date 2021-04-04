import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Form = () => {
  <form onSubmit={() => {}}>
    <TextField
      className={classes.TextField}
      variant="outlined"
      id="name"
      name="name"
      label="Name"
      fullWidth
    />
    <TextField
      className={classes.TextField}
      variant="outlined"
      id="email"
      name="email"
      label="Email"
      fullWidth
    />
    <TextField
      className={classes.TextField}
      multiline
      variant="outlined"
      id="message"
      name="message"
      label="Message"
      rows={4}
      fullWidth
    />

    <Button
      type="submit"
      fullWidth
      variant="raised"
      color="primary"
      variant="contained"
    >
      Submit
    </Button>
  </form>;
};

export default Form;
