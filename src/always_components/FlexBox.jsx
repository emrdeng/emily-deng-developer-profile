import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const FlexBox = styled(Box)(({ customHeight, customWidth, customBackgroundColor }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: customHeight || "70vh",
    width: customWidth || "100vw",
    overflow: "hidden",
    backgroundColor: customBackgroundColor || "#FFFFFF"
}))

export default FlexBox;