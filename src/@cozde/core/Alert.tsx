import { Alert as MuiAlert, Snackbar } from "@mui/material";
import { useAppDispatch, useAppSelector } from "store";
import { close } from "store/app/alertSlice";

function Alert() {
  const dispatch = useAppDispatch();
  const { open, variant, message, anchorOrigin, delay } = useAppSelector(
    (state) => state.app.alert,
  );

  const handleClose = () => dispatch(close());

  return (
    <Snackbar
      open={open}
      autoHideDuration={delay}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
    >
      <MuiAlert onClose={handleClose} severity={variant} sx={{ width: "100%" }}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default Alert;
