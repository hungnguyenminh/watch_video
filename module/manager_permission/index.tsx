import "./index.scss";
import "./responsive.scss";
import React, {useState} from "react";
import {VideoItemTypes} from "@app/types/VideoItem/VideoItemTypes";
import {HomeResponse} from "@app/module/manager_permission/components/HomeResponse";
import VideoItem from "@app/components/VideoItem";

export function VideoView(): JSX.Element {
  const [dataFilter, setDataFilter] = useState<object>({});

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

  return (
    <div className="home-container">
      <div className="home-mobile">
        <HomeResponse />
      </div>
      <div className="home-list-video">
        {dummyData.map(({user, video}, index) => (
          <VideoItem
            key={user.accountName + video.videoId}
            user={user}
            video={video}
          />
        ))}
      </div>
    </div>
  );
}
