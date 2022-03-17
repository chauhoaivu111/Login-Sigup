import Helmet from "../components/Helmet";
import TextField from "@material-ui/core/TextField";
import img from "../asset/island.jpg";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Grid from "../components/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { useSnackbar } from "notistack";

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
    width: "480px",
    marginTop: "10%",
  },
  title1: {
    textAlign: "left",
    fontSize: "80px",
    color: "#5694F2",
  },
  title2: {
    textAlign: "left",
    fontSize: "20px",
    color: "black",
    marginTop: "-3%",
  },
  fram_main_input: {
    height: "450px",
    width: "400px",
    backgroundColor: "white",
    marginTop: "9%",
    borderRadius: "15px",
  },
  title_login: {
    textAlign: "center",
    fontSize: "30px",
    marginTop: "20px",
  },
  textform: {
    width: "350px",
  },
  style_button: {
    backgroundColor: "#629CF4",
    width: "350px",
    marginTop: "20px",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "blue",
    },
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

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    const key = enqueueSnackbar("incorrect password or Email", {
      variant: "error",
      persist: true,
    });

    // when we're back online
    props.closeSnackbar(key);
  };

  return (
    <Helmet title="Login">
      <Paper className={classes.bg}>
        <Grid col={2} mdCol={2} smCol={1} gap={20}>
          <div className={classes.frame_title}>
            <Typography className={classes.title1}>
              Hahalolo
              <Typography className={classes.title2}>
                Bạn thích
                <h1>đi du lịch?</h1>
                <h3>Bạn muốn tìm hiểu thông tin về những điểm đến? </h3>
                Chỉ với vài thao tác, hãy nhanh chóng đăng nhập để trải nghiệm
                và cảm nhận các tiện ích tuyệt vời của chúng tôi.
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
                  margin="normal"
                  variant="outlined"
                  placeholder="Email"
                  label="Email"
                  className={classes.textform}
                ></TextField>

                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Mật Khẩu"
                  type="password"
                  label="Mật khẩu"
                  className={classes.textform}
                ></TextField>
              </div>

              <div style={{ textAlign: "center" }}>
                <Button
                  className={classes.style_button}
                  variant="contained"
                  onClick={handleClick}
                >
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

        <div
          style={{
            textAlign: "center",
            display: "flex",
            marginLeft: "45%",
            marginTop: "13%",
          }}
        >
          <CopyrightIcon />

          <Typography style={{ fontSize: "15px" }}>
            Hahalolo đã đăng kí bản quyền
          </Typography>
        </div>
      </Paper>
    </Helmet>
  );
};

export default Login;
