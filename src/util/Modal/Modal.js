import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Table from "../Table/Table";

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
      {/* <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
      <Button onClick={handleClickOpen("body")}>scroll=body</Button> */}
      <Dialog
        maxWidth={maxWidth}
        open={props.isOpen}
        onClose={props.closeModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {props.vehicles}
          <div align="right" style={{ marginTop: "-35px" }}>
            27 Aug 2020
          </div>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.header}
            {props.table}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeModal} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={props.closeModal} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
