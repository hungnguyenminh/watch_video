import "./index.scss";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {Image} from "antd";

export function HomeResponse(): JSX.Element {
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<object>({});

  console.log("dataFilter", dataFilter);

  const listBook = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="home-container-respon">
      {listBook.map((item, index) => (
        <div key={index} className="video-main">
          <Image
            style={{objectFit: "cover"}}
            width="100%"
            height={200}
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div className="title-item-video">
            <Image
              style={{objectFit: "cover", borderRadius: 50}}
              width={45}
              height={45}
              preview={false}
              fallback=""
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div className="detail-item">
              <span className="title">
                Trùng căn cước công dân với người đã khuất Trùng căn cước công
                dân với người đã khuất Trùng căn cước công dân với người đã
                khuất
              </span>
              <div className="detail-item-video">
                <span>HTV Entertainment</span>
                <span>- 372k views - </span>
                <span>6 days ago</span>
              </div>
            </div>
            <div>sss</div>
          </div>
        </div>
      ))}
    </div>
  );
}
