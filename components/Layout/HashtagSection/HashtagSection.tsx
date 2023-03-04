import React from "react";
import "./index.scss";
import Hashtag from "@app/components/Hashtag/Hashtag";

export default function HashtagSection(): JSX.Element {
  const listOfHashtag = [
    {
      id: "1",
      type: "common",
      hashtag: "Yeu don phuong la gi",
    },
    {
      id: "1",
      type: "music",
      hashtag: "Yeu don p",
    },
    {
      id: "1",
      type: "music",
      hashtag: "Yeu don p",
    },
    {
      id: "1",
      type: "common",
      hashtag: "Yeu don phuong la gi",
    },
    {
      id: "1",
      type: "music",
      hashtag: "Yeu don phuong la gi",
    },
    {
      id: "1",
      type: "common",
      hashtag: "Yeu don phuong la gi",
    },
  ];

  return (
    <div className="hashtag-section-container">
      <div className="menu-name">Khám phá</div>
      <div className="hashtag-section">
        {listOfHashtag.map((item, index) => {
          return (
            <Hashtag
              id={item.id}
              type={`${item.type}`}
              hashtag={`${item.hashtag}`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
