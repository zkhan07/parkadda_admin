import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ScrollDialog(props) {
  const [scroll, setScroll] = React.useState("paper");
  const [maxWidth, setMaxWidth] = React.useState("md");

  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = scrollType => () => {
  //     setOpen(true);
  //     setScroll(scrollType);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (props.isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [props.isOpen]);

  return (
    <div>
      <Dialog
        fullWidth={false}
        maxWidth={maxWidth}
        open={props.isOpen}
        onClose={props.closeModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Modal</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeModal} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
