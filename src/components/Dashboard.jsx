import React from "react";
import { TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "../components/Grid";
import Paper from "@material-ui/core/Paper";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';


const useStyle = makeStyles({
    root: {
        width: 300,
        height:"665px"
      },
});
const Dashboard = () => {
  const classes = useStyle();
  return (
    <div>


<Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" style = {{fontSize:"20px"}} />
          </ListItemIcon>
          <Typography variant="inherit" style = {{fontSize:"20px"}}>Bài Viết </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" style = {{fontSize:"20px"}} />
          </ListItemIcon>
          <Typography variant="inherit" style = {{fontSize:"20px"}}>Bài Đăng</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" style = {{fontSize:"20px"}} />
          </ListItemIcon>
          <Typography variant="inherit" noWrap style = {{fontSize:"20px"}}> 
            Trang cá nhân
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" style = {{fontSize:"20px"}} />
          </ListItemIcon>
          <Typography variant="inherit" noWrap style = {{fontSize:"20px"}}> 
            Đăng xuất
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>

     

     

      
    </div>
  );
};

export default Dashboard;
