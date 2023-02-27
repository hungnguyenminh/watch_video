import React from "react";
import "./index.scss";
import "./responsive.scss";
import {Formik} from "formik";
import ErrorMessageGlobal from "@app/components/ErrorMessageGlobal";
import {InputGlobal} from "@app/components/InputGlobal";
import {FacebookFilled, GoogleCircleFilled} from "@ant-design/icons";
import {ButtonGlobal} from "@app/components/ButtonGlobal";
import ApiUser from "@app/api/ApiUser";
import {useMutation} from "react-query";
import {useDispatch} from "react-redux";
// import {loginUser} from "@app/redux/slices/UserSlice";
import {useRouter} from "next/router";
// import {LoginValidation} from "@app/validation/login/LoginValidation";
// import {IRootState} from "@app/redux/store";
import {
  noRememberAccount,
  rememberAccount,
} from "@app/redux/slices/RememberAccountSlice";
import {Input} from "antd";

interface UserAccount {
  email: string;
  password: string;
  remember: boolean;
  pass_jwt: string;
}

interface IModalLogin {
  ToggleRegisterModal?: () => void;
}

export function FormLoginGlobal(props: IModalLogin): JSX.Element {
  const {ToggleRegisterModal} = props;
  const dispatch = useDispatch();
  const router = useRouter();

  // const isRemember = useSelector(
  //   (state: IRootState) => state.remember.isRemember
  // );

  const initialValues: UserAccount = {
    email: "",
    password: "",
    remember: false,
    pass_jwt: "",
  };

  const gotoRegister = (): void => {
    router.push("/register");
  };

  const login = useMutation(ApiUser.login);
  const handleLogin = (value: UserAccount): void => {
    router.push("/");
    // login.mutate(
    //   {
    //     username: value.username.trim(),
    //     password: value.password.trim(),
    //     has_role: true,
    //   },
    //   {
    //     onSuccess: (res) => {
    //       const dataUser = {
    //         accessToken: res.response.access_token,
    //         expires_in: res.response.expires_in,
    //         role: res.role,
    //         pass_jwt: res.response.pass_jwt,
    //       };
    //       dispatch(loginUser(dataUser));
    //       router.push("/");
    //     },
    //   }
    // );
  };

  const handleCheckRemember = (checked: boolean): void => {
    if (checked) {
      dispatch(rememberAccount());
      sessionStorage.removeItem("isRemember");
    } else {
      dispatch(noRememberAccount());
      sessionStorage.setItem("isRemember", "false");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validateOnChange
      validateOnBlur
      // validationSchema={LoginValidation}
    >
      {({handleSubmit}): JSX.Element => {
        return (
          <div className="modal-login-container">
            <div className="title-login-form">
              <span>Đăng nhập vào TikTok</span>
            </div>
            <div className="login-container">
              <div className="login-form-item">
                <span className="title">Email</span>
                <InputGlobal
                  itemScope={false}
                  name="email"
                  placeholder="Email"
                  className="input_login"
                  onPressEnter={(): void => handleSubmit()}
                />
                <ErrorMessageGlobal name="username" />
              </div>
              <div className="login-form-item">
                <span className="title">Password</span>
                <InputGlobal
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                  className="input_login"
                  onPressEnter={(): void => handleSubmit()}
                />
                <ErrorMessageGlobal name="username" />
              </div>
              <div className="forgot-password">
                <span>Forgot password?</span>
              </div>
              <hr className="horizontal-line" />
              <div className="text-login-social">
                <span>Or User Your Social to Log in</span>
              </div>
              <div className="group-login-social">
                <div className="item-icon">
                  <FacebookFilled className="icon-facebook" />
                </div>
                <div className="item-icon">
                  <GoogleCircleFilled className="icon-gmail" />
                </div>
              </div>
              <ButtonGlobal
                onClick={handleSubmit}
                className="btn-login"
                title="Đăng nhập"
                loading={login.isLoading}
              />
              <div className="bottom-text">
                <p className="noti">Bạn không có tài khoản?</p>
                <p
                  className="register"
                  onClick={ToggleRegisterModal ?? gotoRegister}
                >
                  Đăng ký
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
