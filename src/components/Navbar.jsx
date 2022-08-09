import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Avatar
} from "@mui/material";

import { Mail } from "@mui/icons-material/";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import CodeIcon from "@mui/icons-material/Code";

const StyleTool = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: 4,
  width: "40%",
});
const Icons = styled(Box)({});
const Navbar = () => {
 
  return (
    <AppBar position="sticky">
      <StyleTool>
        <Typography
          sx={{ display: { xs: "none", sm: "block " } }}
          
          variant="h5"
          component="h2"
        >
          Ashified
        </Typography>
        <CodeIcon sx={{ display: { xs: "block", sm: "none" } }}></CodeIcon>
        <Search>
          <InputBase placeholder="Search....." />
        </Search>
        <Icons sx={{ display:"flex", alignItems:"center",gap:2 }}>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge> 
          <Badge badgeContent={8} color="error">
            <CircleNotificationsIcon  />
          </Badge> 
          <Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Badge>
          
        </Icons>
      </StyleTool>
      
    </AppBar>
  );
};

export default Navbar;
