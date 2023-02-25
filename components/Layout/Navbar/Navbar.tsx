import React, {useState} from "react";
import {Button, Image, Input, Modal} from "antd";
import {
  PhoneOutlined,
  PlusOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
import Config from "@app/config";
import {ModalLogin} from "@app/components/Layout/Sidebar/Components/ModalLogin";
import {ModalRegister} from "@app/components/Layout/Sidebar/Components/ModalRegister";

export default function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal, setIsModal] = useState<string>("login");

  const router = useRouter();
  const avatar =
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/02/how-to-delete-tiktok-920x515.jpg";
  const toSelfBook = (): void => {
    router.push("/self_book");
  };
  const ToggleRegisterModal = (): void => {
    if (isModal === "login") {
      setIsModal("register");
    } else {
      setIsModal("login");
    }
  };
  const goToHomePage = (): void => {
    router.push("/home");
  };
  const goToLoginPage = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="navbar" style={{height: Config.HEIGHT_NAVBAR}}>
      <div onClick={goToHomePage} className="logo">
        <Image
          style={{borderRadius: 50}}
          width={80}
          height={40}
          preview={false}
          src={avatar}
        />
      </div>
      <div className="search-navbar">
        <div className="input-search-container">
          <Input
            placeholder="Tìm Kiếm Sách ..."
            className="input-search"
            // addonAfter={<SearchOutlined style={{color: "#C6C6C8"}} />}
          />
          <div className="icon-search-container">
            <div className="verticalLine" />
            <SearchOutlined className="icon-search" />
          </div>
        </div>
        <div className="group-button">
          <Icon icon="Bell" size={20} />
          <div onClick={toSelfBook} className="button-search">
            <Button icon={<PlusOutlined style={{fontSize: 15}} />}>
              <span>Upload</span>
            </Button>
          </div>
          <div onClick={goToLoginPage} className="button-login">
            <Button>Log in</Button>
          </div>

          {/* <Icon icon="Bell_Noti" size={20} /> */}
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        {isModal === "login" ? (
          <ModalLogin ToggleRegisterModal={ToggleRegisterModal} />
        ) : (
          <ModalRegister ToggleRegisterModal={ToggleRegisterModal} />
        )}
      </Modal>
    </div>
  );
}
