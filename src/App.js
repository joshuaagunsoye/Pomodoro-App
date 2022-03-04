import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Modal from "@mui/material/Modal";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CircularDeterminate from "./CircleBar/CircleBar";
import Time from "./Time/Time";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="App">
        <div className="topbuttons">
          <Button variant="contained">Pomodoro</Button>
          <Button variant="contained">short break</Button>
          <Button variant="contained">long break</Button>
        </div>

        <div id= "circle">
          <CircularDeterminate />
        </div>
        <div className="settings">
          <SettingsApplicationsIcon onClick={handleOpen} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Settings
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Time (Minutes)
                <p>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </p>
              </Typography>
            </Box>
          </Modal>
          <div className="centered">
          <Time />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
