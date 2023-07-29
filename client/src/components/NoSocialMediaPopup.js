import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const NoSocialMediaPopup = ({ isOpen, handleClose }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Ups!</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        The clicked social media button doesn't redirect anywhere; this is a
        portfolio app, not directly linked to any social media platform.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} autoFocus>
        Ok
      </Button>
    </DialogActions>
  </Dialog>
);

export default NoSocialMediaPopup;
