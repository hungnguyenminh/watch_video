import React, {useState} from "react";
import {Button, Image} from "antd";
import ReactPlayer from "react-player";
import {HeartFilled, MessageFilled} from "@ant-design/icons";
import {Icon} from "@app/components/Icon";
import {useRouter} from "next/router";
import defaultAvatar from "@app/public/img/default_avatar.png";
import {VideoItemTypes} from "@app/types/VideoItem/VideoItemTypes";
import "./styles.scss";

function ItemVideo({user, video, isPlaying}: VideoItemTypes) {
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();

  console.log("ispakying", isPlaying);
  // const handleAutoPlaying = () => {
  //   setIsPlaying(!isPlaying);
  // };

  const handleLikeVideo = () => {
    setIsLike(!isLike);
  };
  const goToViewDetail = (): void => {
    router.push("/detail_video");
  };
  return (
    <div className="item-video">
      <Image
        className="user-avatar"
        preview={false}
        src={user.avatar ? user.avatar : defaultAvatar}
      />
      <div className="item-detail">
        <div className="user-information">
          <div className="text">
            <b>{user.accountName}</b>
            <span>{user.fullname}</span>
          </div>
          <Button
            className="view-detail-btn"
            onClick={(): void => goToViewDetail()}
          >
            View Detail
          </Button>
        </div>
        <div className="video-description-container">
          <div className="video-view">
            <div className="description-content">
              <div className="description-text">{video.videoDesc}</div>
              <div className="hashtag-container">
                {video?.hashtags?.map((item, index) => (
                  <b
                    key={item.id}
                    role="button"
                    onClick={() => window.open(item.link)}
                  >
                    {item.hashtag}
                  </b>
                ))}
              </div>
            </div>
            <div className="video-section">
              <div className="video-player">
                <ReactPlayer
                  playing={isPlaying}
                  url={video.videoUrl}
                  controls
                  volume={0.5}
                  loop
                  height={550}
                  width={350}
                  // onReady={handleAutoPlaying}
                />
              </div>
              <div className="action-btn-wrapper">
                <div className="item-icon">
                  <div className="icon" role="button" onClick={handleLikeVideo}>
                    <HeartFilled
                      style={{
                        fontSize: 21,
                        color: `${isLike ? "#fe2c55" : "#161823"}`,
                      }}
                    />
                  </div>
                  <p>{video.reaction?.nOfLike}</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <MessageFilled style={{fontSize: 21}} />
                  </div>
                  <p>{video.reaction?.nOfComment}</p>
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
  );
}

export default ItemVideo;
