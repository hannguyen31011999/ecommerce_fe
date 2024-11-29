import LogoHeader from "@/components/icons/LogoHeader";
import { animation, backgroundButton } from "@/styles/theme";
import { Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { IoSettings } from "react-icons/io5";

export default function HeaderLayout() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px ",
        height: {
          xl: "72px",
        },
      }}
    >
      <Button variant="default">
        <LogoHeader width={40} height={40} />
      </Button>
      <Button
        variant="default"
        size="md"
        sx={{
          "&:hover": { background: backgroundButton.actionHover },
          borderRadius: "50%",
          animation: `${animation.spin} 4s linear infinite`,
          animationDelay: "0s",
        }}
      >
        <IoSettings size={20} color={grey[400]} />
      </Button>
    </Box>
  );
}
