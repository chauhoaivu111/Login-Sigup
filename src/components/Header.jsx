import React from "react";
import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Grid from "../components/Grid";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const Header = () => {
  const classes = useStyle();
  return (
    <div>


      <Box className={classes.header}>
        <TextField
          margin="normal"
          variant="outlined"
          placeholder="search"
          InputProps={{
            style: {
              borderRadius: 50,
              paddingLeft: "50px",
              fontSize: 15,
              width: "400px",
            },

            endAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
      </Box>

      <Grid col={2}>


          <Paper style ={{width:"200px",backgroundColor:"red"}}></Paper>

      </Grid>

      
    </div>
  );
};

export default Header;
