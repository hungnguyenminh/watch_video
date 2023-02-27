import "./index.scss";
import "./responsive.scss";
import {Button, Image} from "antd";
import React, {useState} from "react";
import {useRouter} from "next/router";
import ReactPlayer from "react-player";
import {HeartFilled, MessageFilled} from "@ant-design/icons";
import {Icon} from "@app/components/Icon";
import {HomeResponse} from "@app/module/manager_permission/components/HomeResponse";

export function ManagerPermission(): JSX.Element {
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<object>({});

  const avatar =
    "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/02/how-to-delete-tiktok-920x515.jpg";

  const goToViewDetail = (value: string): void => {
    console.log("goToViewDetail");
    router.push("/detail_video");
  };
  console.log("dataFilter", dataFilter);

  const listBook = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="home-container">
      <div className="home-mobile">
        <HomeResponse />
      </div>
      <div className="home-list-video">
        {listBook.map((item, index) => (
          <div className="item-video" key={index}>
            <div>
              <Image
                style={{borderRadius: 50}}
                width={55}
                height={55}
                preview={false}
                src={avatar}
              />
            </div>
            <div className="item-detail">
              <div className="name-shop">
                <div className="text">
                  <b>dothongminhshop</b>
                  <span>DoThongMinhShop</span>
                </div>
                <Button
                  className="button-view-detail"
                  onClick={() => goToViewDetail()}
                >
                  View Detail
                </Button>
              </div>
              <div className="introduce">
                <p className="hashtag">
                  Xin giới thiệu với các bạn cây lau nhà siêu sạch
                  <b> #dodadung </b>
                  <b>#dogiadungthongminh</b>
                  <b>#dodadung</b>
                </p>
                <div className="detail">
                  <div className="video">
                    <ReactPlayer url="https://www.youtube.com/watch?v=wWgIAphfn2U" />
                  </div>
                  <div className="action">
                    <div className="group-action">
                      <div className="item-icon">
                        <div className="icon">
                          <HeartFilled style={{fontSize: 21}} />
                        </div>
                        <p>17</p>
                      </div>
                      <div className="item-icon">
                        <div className="icon">
                          <MessageFilled style={{fontSize: 21}} />
                        </div>
                        <p>0</p>
                      </div>
                      <div className="item-icon">
                        <div className="icon">
                          <Icon icon="Share_Web" size={21} color="black" />
                        </div>
                        <p>Chia sẻ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
