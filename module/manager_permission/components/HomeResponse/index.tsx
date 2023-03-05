import "./index.scss";
import React, {useState} from "react";
import {useRouter} from "next/router";
import {VideoItemTypes} from "@app/types/VideoItem/VideoItemTypes";
import VideoItem from "@app/components/VideoItem";
import ReactPlayer from "react-player";

export function HomeResponse(): JSX.Element {
  const router = useRouter();
  const dummyData: VideoItemTypes[] = [
    {
      user: {
        avatar:
          "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/26/photo-1650990843778-1650990844390345942486.jpg",
        accountName: "Sd_Nguyen",
        fullname: "Nguyen Van A",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "http://techslides.com/demos/sample-videos/small.mp4",
        videoDesc: "Xin chao mung cac ban",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
        ],
        reaction: {
          nOfLike: 200,
          nOfComment: 200,
        },
      },
    },
    {
      user: {
        avatar:
          "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/26/photo-1650990843778-1650990844390345942486.jpg",
        accountName: "Sd_Nguyen",
        fullname: "Nguyen Van A",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/EngW7tLk6R8",
        videoDesc: "Xin chao mung cac ban",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
        ],
        reaction: {
          nOfLike: 200,
          nOfComment: 200,
        },
      },
    },
    {
      user: {
        avatar:
          "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/26/photo-1650990843778-1650990844390345942486.jpg",
        accountName: "Sd_Nguyen",
        fullname: "Nguyen Van A",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/EngW7tLk6R8",
        videoDesc:
          "Xin chao mung cac ban da den voi chuong trinh cua chung toi",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#sh350i",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
        ],
        reaction: {
          nOfLike: 200,
          nOfComment: 200,
        },
      },
    },
  ];
  const goToViewDetail = (value: string): void => {
    router.push("/detail_video");
  };

  return (
    <div className="home-container-responsive">
      {dummyData.map(({user, video}, index) => (
        <div className="video-container">
          <ReactPlayer url={video.videoUrl} controls volume={0.5} loop />
        </div>
      ))}
    </div>
  );
}
