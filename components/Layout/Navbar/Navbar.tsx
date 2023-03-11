import React, {useState} from "react";
import {Button, Image, Input, Modal} from "antd";
import {PlusOutlined, SearchOutlined, UploadOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {Icon} from "@app/components/Icon";
import Config from "@app/config";
import "./responsive.scss";
import ModalAuthRespon from "@app/components/Layout/Navbar/Components/ModalAuthRespon";
import {FormLoginGlobal} from "@app/components/FormLoginGlobal";
import {FormRegisterGlobal} from "@app/components/FormRegisterGlobal";
import ModalNotification from "@app/components/Layout/Navbar/Components/ModalNotification";

export default function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal, setIsModal] = useState<string>("login");
  const [isModalAuth, setIsModalAuth] = useState<boolean>(false);

  const router = useRouter();
  const avatar =
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/02/how-to-delete-tiktok-920x515.jpg";
  const toSelfBook = (): void => {
    router.push("/self_book");
  };

  const ToggleModalAuthRes = (): void => {
    setIsModalAuth(!isModalAuth);
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
    setIsModal("login");
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
            placeholder="Tìm Kiếm ..."
            className="input-search"
            // addonAfter={<SearchOutlined style={{color: "#C6C6C8"}} />}
          />
          <div className="icon-search-container">
            <div className="verticalLine" />
            <SearchOutlined className="icon-search" />
          </div>
        </div>

        <div className="group-button">
          <div className="bell-icon">
            <Icon icon="Bell" size={20} />
            <div className="modal-notificaiton">
              <ModalNotification />
            </div>
          </div>
          <div onClick={toSelfBook} className="button-search">
            <Button icon={<PlusOutlined style={{fontSize: 15}} />}>
              <span>Upload</span>
            </Button>
          </div>
          <div onClick={goToLoginPage} className="button-login">
            <Button>Log in</Button>
          </div>
          <UploadOutlined style={{fontSize: 15}} className="upload-icon" />
          <div className="icon-responsive">
            <SearchOutlined className="icon-search" />
            <div onClick={ToggleModalAuthRes}>
              <Icon icon="user-bottom" size={30} />
            </div>
          </div>
          {/* <Icon icon="Bell_Noti" size={20} /> */}
        </div>
      </div>
      {isModalAuth && (
        <div className="modal-auth">
          <ModalAuthRespon ToggleModalAuthRes={ToggleModalAuthRes} />
        </div>
      )}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        {isModal === "login" ? (
          <FormLoginGlobal ToggleRegisterModal={ToggleRegisterModal} />
        ) : (
          <FormRegisterGlobal ToggleRegisterModal={ToggleRegisterModal} />
        )}
      </Modal>
    </div>
  );
}
