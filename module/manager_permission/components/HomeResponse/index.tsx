import "./index.scss";
import React, {useState} from "react";
import ReactPlayer from "react-player";

export function HomeResponse(): JSX.Element {
  // console.log("dataFilter");
  // const [isFocus, setIsFocus] = useState<number>(0);

  // console.log("isFocus", isFocus);
  const handleTouchStart = (id: number): void => {
    console.log("onTouchStart");
    // setIsFocus(id);
  };

  const handleTouchEnd = (id: number): void => {
    console.log("onTouchEnd", id);
    // setIsFocus(id);
  };

  const listBook = [
    {id: 0, videoUrl: "https://youtu.be/vMixl6xYfo0"},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
  ];
  return (
    <div className="home-container-respon">
      {listBook.map((item, index) => (
        <div
          // onTouchStart={() => handleTouchStart(item.id)}
          // onTouchEnd={() => {
          //   handleTouchEnd(item.id);
          //   console.log("index", index);
          // }}
          key={index}
          className="video-main"
        >
          {JSON.stringify(index)}
          <ReactPlayer
            playing
            // playing={!(isFocus === index)}
            url="test_video.mp4"
            controls
            volume={0.5}
            loop
            style={{objectFit: "contain"}}
            height="100%"
            // onReady={handleAutoPlaying}
          />
        </div>
      ))}
    </div>
  );
}
