import "./index.scss";
import "./responsive.scss";
import React from "react";
import {VideoItemTypes} from "@app/types/VideoItem/VideoItemTypes";
import {HomeResponse} from "@app/module/manager_permission/components/HomeResponse";
import VideoItem from "@app/components/VideoItem";

export function VideoView(): JSX.Element {
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
        videoUrl: "https://youtu.be/DTosuuoN74A",
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
        videoUrl:
          "https://www.tiktok.com/@datnguyen0701/video/7201549971613617434?is_from_webapp=1&sender_device=pc",
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
        videoUrl:
          "https://www.tiktok.com/@datnguyen0701/video/7201549971613617434?is_from_webapp=1&sender_device=pc",
        videoDesc:
          "Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann  Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann Xin chao mung cac bann",
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
        videoUrl:
          "https://www.tiktok.com/@datnguyen0701/video/7201549971613617434?is_from_webapp=1&sender_device=pc",
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
        videoUrl:
          "https://www.tiktok.com/@datnguyen0701/video/7201549971613617434?is_from_webapp=1&sender_device=pc",
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
