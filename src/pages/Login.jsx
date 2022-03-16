import Helmet from "../components/Helmet";
import TextField from "@material-ui/core/TextField";
import img from "../asset/island.jpg";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Grid from "../components/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  bg: {
    backgroundImage: `url(${img})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  frame_title: {
    justifySelf: "center",
    height: "200px",
    width: "200px",
    marginTop: "20%",
  },
  title1: {
    textAlign: "left",
    fontSize: "60px",
    color: "blue",
  },
  title2: {
    textAlign: "left",
    fontSize: "20px",
    color: "black",
  },
  fram_main_input: {
    height: "500px",
    width: "500px",
    backgroundColor: "white",
    marginTop: "18%",
    borderRadius: "15px",
  },
  title_login: {
    textAlign: "center",
    fontSize: "30px",
    marginTop: "20px",
  },
  textform: {
    width: "400px",
  },
  style_button: {
    backgroundColor: "#629CF4",
    width: "400px",
    marginTop: "20px",
    borderRadius: "15px",
  },
  forgetpass: {
    color: "#629CF4",
    textAlign: "center",
    cursor: "pointer",
    padding: "20px",
  },
}));

const Login = (props) => {
  const classes = useStyle();
  return (
    <Helmet title="Home page">
      <Paper className={classes.bg}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className={classes.frame_title}>
            <Typography className={classes.title1}>
              Halo
              <Typography className={classes.title2}>
                Where the world start
              </Typography>
            </Typography>
          </div>

          <Paper className={classes.fram_main_input}>
            <div style={{ padding: "24px" }}>
              <Typography className={classes.title_login}>Đăng Nhập</Typography>

              <div
                className={classes.frame_input}
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <TextField
                  //  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Email"
                  label="Email"
                  className={classes.textform}
                ></TextField>

                <TextField
                  //  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Mật Khẩu"
                  type="password"
                  label="Mật khẩu"
                  className={classes.textform}
                ></TextField>
              </div>

              <div style={{ textAlign: "center" }}>
                <Button className={classes.style_button} variant="contained">
                  Đăng Nhập
                </Button>
                <Typography className={classes.forgetpass}>
                  <Link to="/">Quên mật khẩu</Link>
                </Typography>

                <Typography style={{ textAlign: "center" }}>
                  Bạn chưa có tài khoản?{" "}
                  <span style={{ color: "#629CF4", cursor: "pointer" }}>
                    {" "}
                    <Link to="/Register">Đăng kí</Link>
                  </span>
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Paper>
    </Helmet>
  );
};

export default Login;
