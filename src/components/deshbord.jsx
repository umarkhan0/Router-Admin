import * as React from "react";
import PropTypes from "prop-types";
// import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from '@mui/icons-material'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AppBar from "@mui/material/AppBar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Badge from '@mui/material/Badge';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ListItem from "@mui/material/ListItem";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  let navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className=" flex justify-center flex-col items-center">
      <div>
        <img
          width={100}
          src={Logo}
        />
      </div>
      <List>
        <ListItem 
        onClick={() => navigate("/")}
        key={"Deshbord"}>
          <ListItemButton
            style={{
              width: "100%",
            }}
          >
            <ListItemIcon>
              <PermIdentityIcon
                style={{
                  color: "#001f3f",
                }}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: "#001f3f",
              }}
              primary={"Deshbord"}
            />
          </ListItemButton>
        </ListItem>
       
        <ListItem
        onClick={() => navigate("/product")}
          style={{
            color: "#001f3f",
          }}
          key={"Products"}
        >
          <ListItemButton>
            <ListItemIcon>
              <Inventory2RoundedIcon
                style={{
                  color: "#001f3f",
                }}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: "#001f3f",
              }}
              primary={"Products"}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          style={{
            color: "#001f3f",
          }}
        
        >
          <ListItemButton>
            <ListItemIcon>
              <GridViewRoundedIcon
                onClick={() => navigate("/catagries")}
                style={{
                  color: "#001f3f",
                }}
              />
            </ListItemIcon>
            <ListItemText
          
              style={{
                color: "#001f3f",
              }}
              primary={"Catagries"}
            />
          </ListItemButton>
        </ListItem>  <ListItem
        onClick={() => navigate("/customers")}
          style={{
            color: "#001f3f",
          }}
          key={"CUSTOMERS"}
        >
          <ListItemButton>
            <ListItemIcon>
              <GroupsRoundedIcon
                style={{
                  color: "#001f3f",
                }}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: "#001f3f",
              }}
              primary={"Customers"}
            />
          </ListItemButton>
        </ListItem>  <ListItem
          style={{
            color: "#001f3f",
          }}
          key={"Alert"}
        >
          <ListItemButton>
            <ListItemIcon>
              <NotificationsActiveRoundedIcon
                style={{
                  color: "#001f3f",
                }}
              />
            </ListItemIcon>
            <ListItemText
              style={{
                color: "#001f3f",
              }}
              primary={"Alert"}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#001f3f",
        }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <div>
              <p>
                <IconButton>
                  <AccountCircleRoundedIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                  <span className=" text-[20px] pl-2 text-[#fff]">
                    Deshbord
                  </span>
                </IconButton>
              </p>
            </div>
          </Box>
          <div className=" flex justify-end items-center w-full">
          
              <Box
                variant="contained"
                style={{
                
                  color: "#0073c9",
                  display: "flex",
                  width: "80px",
                
                  justifyContent: "space-between"
                }}
              >
                <Stack spacing={4} direction="row" sx={{ color: 'action.active' }} className=" cursor-pointer">
      <Badge color="secondary" badgeContent={99}>
               <NotificationsActiveRoundedIcon style={{
                backgroundColor: "#001f3f",
                color: "#fff"
               }} /> 
               </Badge>
               </Stack>
               <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}  className=" cursor-pointer">
     
               <LogoutRoundedIcon style={{
                backgroundColor: "#001f3f",
                color: "#fff"
               }} /> 
               
               
               </Stack>
                        {/* <TransitionsModal /> */}
                        
              </Box>
           
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        
      
<props.home />







      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
