import BrowserOnly from "@docusaurus/BrowserOnly";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StopIcon from "@mui/icons-material/Stop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { useState } from "react";

function secsToLabel(timeInSecs: number) {
  return dayjs().hour(0).minute(0).second(0).second(timeInSecs).format("mm:ss");
}

const TimerName = {
  work: "Work",
  shortBreak: "Short break",
  longBreak: "Long break",
  notRunning: "Not running",
};

export default function PomodoroTimer() {
  // current running timer or notRunning
  const [timerName, setTimeName] = useState(TimerName.notRunning);
  return (
    <BrowserOnly>
      {() => (
        <Stack spacing={2}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            gap={2}
            flexWrap={"wrap"}
          >
            {[
              { time: 25 * 60, onClick: () => {}, name: TimerName.work },
              { time: 25 * 60, onClick: () => {}, name: TimerName.shortBreak },
              { time: 25 * 60, onClick: () => {}, name: TimerName.longBreak },
            ].map((pomo) => (
              <Stack sx={{ flex: 1 }} spacing={1}>
                <Typography fontWeight={"bold"}>{pomo.name}</Typography>
                <Button fullWidth variant="outlined" startIcon={<StopIcon />}>
                  {secsToLabel(pomo.time)}
                </Button>
              </Stack>
            ))}
          </Stack>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography fontSize={108} fontFamily={"monospace"}>
              {secsToLabel(25 * 60)}
            </Typography>
          </Box>
          <Divider />
          <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
            {[
              {
                label: "Change duration",
                onClick: () => {},
                icon: <AccessTimeOutlinedIcon />,
              },
            ].map((setting) => (
              <Button
                variant="text"
                startIcon={setting.icon}
                size="small"
                sx={{
                  // to align icon and text: https://github.com/mui/material-ui/issues/19584#issuecomment-1074725120
                  lineHeight: 0,
                }}
              >
                {setting.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      )}
    </BrowserOnly>
  );
}
