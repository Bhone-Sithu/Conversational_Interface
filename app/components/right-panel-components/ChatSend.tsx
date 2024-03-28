import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
  Button,
  TextField,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
function ChatSend() {
  return (
    <div className="p-3 grid grid-cols-3 gap-3 w-full">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Reply Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Reply Type"
        >
          <MenuItem value={10} selected>
            Ice Breaker
          </MenuItem>
          <MenuItem value={20}>Candy Crusher</MenuItem>
          <MenuItem value={30}>Honey Keeper</MenuItem>
        </Select>
      </FormControl>
      <ButtonGroup
        size="large"
        aria-label="Large button group"
        className=" col-span-2 ml-auto "
        color="secondary"
      >
        <Button key="one">Variant 1</Button>,
        <Button key="one">Variant 2</Button>,
        <Button key="one">Variant 3</Button>,
      </ButtonGroup>
      <TextField
        id="outlined-multiline-static"
        label="Type Something..."
        className="col-span-full"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        startIcon={<SendIcon />}
        className="col-span-full"
      >
        Send
      </Button>
    </div>
  );
}

export default ChatSend;
