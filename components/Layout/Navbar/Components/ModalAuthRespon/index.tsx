import React from "react";
import "./index.scss";
import {
  CloseOutlined,
  RightCircleOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {useRouter} from "next/router";

interface IModalAuthRespon {
  ToggleModalAuthRes: () => void;
}
export default function ModalAuthRespon(props: IModalAuthRespon): JSX.Element {
  const {ToggleModalAuthRes} = props;
  const router = useRouter();
  const gotoLogin = (): void => {
    router.push("/login");
  };
  const gotoRegister = (): void => {
    router.push("/login");
  };
  const gotoLogout = (): void => {
    router.push("/login");
  };
  return (
    <div className="modal-auth-respon-container">
      <div onClick={ToggleModalAuthRes} className="item-action">
        <div>
          <CloseOutlined />
        </div>
        <span className="text">Account</span>
      </div>
      <div onClick={gotoLogin} className="item-action">
        <div>
          <UserSwitchOutlined />
        </div>
        <span className="text">Login</span>
      </div>
      <div onClick={gotoRegister} className="item-action">
        <div>
          <UserAddOutlined />
        </div>
        <span className="text">Register</span>
      </div>
      <div onClick={gotoLogout} className="item-action">
        <div>
          <RightCircleOutlined />
        </div>
        <span className="text">Log out</span>
      </div>
    </div>
  );
}
