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
import { QRCode } from "antd";
import * as React from "react";
import { useState } from "react";

function doDownload(url: string, fileName: string) {
  const a = document.createElement("a");
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const downloadCanvasQRCode = () => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    doDownload(url, `QRCode-${Date.now()}.png`);
  }
};

const copyCanvasQRCode = () => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    console.log(url);
    canvas.toBlob(async (blob) => {
      await navigator.clipboard.write([
        // @ts-ignore
        new ClipboardItem({ "image/png": blob }),
      ]);
    }, "image/png");
  }
};

const downloadSvgQRCode = () => {
  const svg = document
    .getElementById("myqrcode")
    ?.querySelector<SVGElement>("svg");
  const svgData = new XMLSerializer().serializeToString(svg!);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  doDownload(url, `QRCode-${Date.now()}.svg`);
};

function PlainTextQrCodeGenerator() {
  const [text, setText] = useState("");
  const options = ["PNG", "SVG"];
  const PNG = 0,
    SVG = 1;
  const [selectedIndex, setSelectedIndex] = React.useState(PNG);

  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={2}>
          <TextField
            label="Text"
            placeholder="Enter text"
            variant="outlined"
            maxRows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
          />
          <Grid
            container
            gap={2}
            justifyContent={{ xs: "center", sm: "start" }}
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
                  onClick={() => {
                    if (selectedIndex === SVG) {
                      setSelectedIndex(PNG);
                    }
                    copyCanvasQRCode();
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

const Types = {
  PLAIN_TEXT: 0,
  WIFI: 1,
  UPI: 2,
};

export default function QrCodeGenerator() {
  // TODO: wifi and upi qr code
  return <PlainTextQrCodeGenerator />;
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
        <Button startIcon={<DownloadIcon />} onClick={onClick}>
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
