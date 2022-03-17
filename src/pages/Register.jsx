import Helmet from "../components/Helmet";
import TextField from "@material-ui/core/TextField";
import img from "../asset/island.jpg";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Grid from "../components/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FormHelperText } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import CopyrightIcon from "@material-ui/icons/Copyright";

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
    height: "570px",
    width: "500px",
    backgroundColor: "white",
    marginTop: "15%",
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
}));

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      Email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("required!"),
      Email: Yup.string().email("Invalid email format").required("required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("required!"),
    }),
  });

  const classes = useStyle();
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
              <Typography className={classes.title_login}>Đăng Ký</Typography>

              <div
                className={classes.frame_input}
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <TextField
                      margin="normal"
                      variant="outlined"
                      placeholder="Họ và Tên"
                      label="Name"
                      className={classes.textform}
                      type="username"
                      name="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      error={formik.errors.username && formik.touched.username}
                    ></TextField>
                    {formik.errors.username && formik.touched.username && (
                      <FormHelperText
                        style={{
                          color: "red",
                          textAlign: "left",
                          paddingLeft: "30px",
                        }}
                      >
                        {formik.errors.username}
                      </FormHelperText>
                    )}
                  </div>

                  <div>
                    <TextField
                      margin="normal"
                      variant="outlined"
                      placeholder="Email"
                      type="email"
                      label="Email"
                      className={classes.textform}
                      name="Email"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      error={formik.errors.Email && formik.touched.Email}
                    ></TextField>
                    {formik.errors.Email && formik.touched.Email && (
                      <FormHelperText
                        style={{
                          color: "red",
                          textAlign: "left",
                          paddingLeft: "30px",
                        }}
                      >
                        {formik.errors.Email}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <TextField
                      margin="normal"
                      variant="outlined"
                      placeholder="Mật Khẩu"
                      type="password"
                      label="Mật khẩu"
                      name="password"
                      className={classes.textform}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      error={formik.errors.password && formik.touched.password}
                    ></TextField>
                    {formik.errors.password && formik.touched.password && (
                      <FormHelperText
                        style={{
                          color: "red",
                          textAlign: "left",
                          paddingLeft: "30px",
                        }}
                      >
                        {formik.errors.password}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <TextField
                      margin="normal"
                      variant="outlined"
                      placeholder="xác nhận mật khẩu"
                      type="password"
                      label="confirm"
                      className={classes.textform}
                      name="confirm_password"
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      error={
                        formik.errors.confirm_password &&
                        formik.touched.confirm_password
                      }
                    ></TextField>
                    {formik.errors.confirm_password &&
                      formik.touched.confirm_password && (
                        <FormHelperText
                          style={{
                            color: "red",
                            textAlign: "left",
                            paddingLeft: "30px",
                          }}
                        >
                          {formik.errors.confirm_password}
                        </FormHelperText>
                      )}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      className={classes.style_button}
                      variant="contained"
                      type="submit"
                    >
                      Đăng Nhập
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Paper>
        </Grid>

        <div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              marginLeft: "45%",
              marginTop: "2%",
            }}
          >
            <CopyrightIcon />

            <Typography style={{ fontSize: "15px" }}>
              Hahalolo đã đăng kí bản quyền
            </Typography>
          </div>
        </div>
      </Paper>
    </Helmet>
  );
};

export default Register;
