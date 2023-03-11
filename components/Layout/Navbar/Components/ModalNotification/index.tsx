import React from "react";
import "./index.scss";
import {Image} from "antd";

export default function ModalNotification(): JSX.Element {
  const avatar =
    "https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/248025440_882406119119157_3137082414913073398_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=94OtfwedYOEAX_IAkg7&_nc_ht=scontent.fhan5-1.fna&oh=00_AfA_N2KJaQt1IPfPIuFfo2UPWTqbDo-p6rfu8w0SmqgJOQ&oe=64125BF5";
  const fakeData = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <div className="modal-notification-container">
      <div className="list-noti">
        {fakeData.map((item, index) => (
          <div key={index} className="item-noti">
            <Image
              style={{borderRadius: 50}}
              width={60}
              height={60}
              preview={false}
              src={avatar}
            />
            <div className="item-text">
              <strong className="title">Admin đã đăng video mới</strong>
              <div className="detail">
                Một trong những bản rap dựa trên những tuyệt tác bất hủ ở mùa 1
                và 2| Rap Việt - Tlinh
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
