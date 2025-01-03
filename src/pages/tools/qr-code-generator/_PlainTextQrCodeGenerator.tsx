import BrowserOnly from "@docusaurus/BrowserOnly";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { successToast } from "@site/src/utils";
import { QRCode } from "antd";
import * as React from "react";
import { useState } from "react";
import {
  copyCanvasQRCode,
  downloadCanvasQRCode,
  downloadSvgQRCode,
} from "./_utils";

export default function PlainTextQrCodeGenerator() {
  const [text, setText] = useState("");
  const options = ["PNG", "SVG"];
  const PNG = 0,
    SVG = 1;
  const [selectedIndex, setSelectedIndex] = React.useState(PNG);

  // TODO: wifi and upi qr code
  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={2}>
          <TextField
            label="Text"
            size="small"
            placeholder="Enter text"
            variant="outlined"
            maxRows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            autoFocus
          />
          <Grid
            container
            sx={{
              gap: 2,
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Grid item>
              <Box
                id="myqrcode"
                component={QRCode}
                value={text || "hello"}
                bgColor="#fff"
                size={200}
                type={selectedIndex === SVG ? "svg" : "canvas"}
              ></Box>
            </Grid>
            <Grid item>
              <Stack spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<ContentCopyIcon />}
                  size="small"
                  onClick={async () => {
                    if (selectedIndex === SVG) {
                      setSelectedIndex(PNG);
                    }
                    await copyCanvasQRCode();
                    successToast("Copied to clipboard");
                  }}
                >
                  Copy to Clipboard
                </Button>
                <SplitButton
                  options={options}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  onClick={() => {
                    if (selectedIndex === SVG) {
                      downloadSvgQRCode();
                    } else if (selectedIndex === PNG) {
                      downloadCanvasQRCode();
                    }
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      )}
    </BrowserOnly>
  );
}

interface SplitButtonProps {
  options: string[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function SplitButton({
  options,
  selectedIndex,
  setSelectedIndex,
  onClick,
}: SplitButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="outlined" ref={anchorRef}>
        <Button startIcon={<DownloadIcon />} size="small" onClick={onClick}>
          Download as {options[selectedIndex]}
        </Button>
        <Button size="small" onClick={handleToggle}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      Download as {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
