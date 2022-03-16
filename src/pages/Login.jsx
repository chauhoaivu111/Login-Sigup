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
}));

const Login = (props) => {
  const classes = useStyle();
  return (
    <Helmet title="Home page">
      <Paper className={classes.bg}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div
            style={{
              justifySelf: "center",
              height: "200px",
              width: "200px",
              marginTop: "20%",
            }}
          >
            <Typography
              style={{ textAlign: "left", fontSize: "60px", color: "blue" }}
            >
              Halo
              <Typography
                style={{ textAlign: "left", fontSize: "20px", color: "black" }}
              >
                Where the world start
              </Typography>
            </Typography>
          </div>

          <Paper
            style={{
              height: "500px",
              width: "500px",
              backgroundColor: "white",
              marginTop: "18%",
              borderRadius: "15px",
            }}
          >
            <div style={{ padding: "24px" }}>
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  marginTop: "20px",
                }}
              >
                Đăng Nhập
              </Typography>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <TextField
                  //  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Email"
                  label="Email"
                  style={{ width: "400px" }}
                ></TextField>

                <TextField
                  //  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Mật Khẩu"
                  type="password"
                  label="Mật khẩu"
                  style={{ width: "400px" }}
                ></TextField>
              </div>

              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#629CF4",
                    width: "400px",
                    marginTop: "20px",
                    borderRadius: "15px",
                  }}
                >
                  Đăng Nhập
                </Button>
                <Typography
                  style={{
                    color: "#629CF4",
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "20px"
                  }}
                >
                  <Link to="/">Quên mật khẩu</Link>
                </Typography>

                <Typography style={{ textAlign: "center" }}>
                  Bạn chưa có tài khoản?{" "}
                  <span style={{ color: "#629CF4", cursor: "pointer" }}>
                    {" "}
                    <Link to="/">Đăng kí</Link>
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
