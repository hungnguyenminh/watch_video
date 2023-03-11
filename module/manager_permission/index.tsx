import "./index.scss";
import "./responsive.scss";
import React, {useState} from "react";
import {VideoItemTypes} from "@app/types/VideoItem/VideoItemTypes";
import {HomeResponse} from "@app/module/manager_permission/components/HomeResponse";
import VideoItem from "@app/components/VideoItem";

export function VideoView(): JSX.Element {
  const dummyData: VideoItemTypes[] = [
    {
      id: 0,
      user: {
        avatar:
          "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/248025440_882406119119157_3137082414913073398_n.jpg?stp=dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=94OtfwedYOEAX_IAkg7&_nc_ht=scontent.fhan15-1.fna&oh=00_AfD4A2zPMLw-cG05M6Vt2ikjWxbYjif9nsWxBFh7GhPSpA&oe=6410D733",
        accountName: "Hungnm",
        fullname: "Nguyễn Minh Hùng",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/DTosuuoN74A",
        videoDesc: "Yêu đơn phương - Karik, OnlyC",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#karik",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#onlyC",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#yeudonphuong",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#Vpop",
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
      id: 1,
      user: {
        avatar: "https://nguoinoitieng.tv/images/nnt/102/0/bgiz.jpg",
        accountName: "HaiTV",
        fullname: "Trần Văn Hải",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/gm7RhBMMf7A",
        videoDesc: "Cánh cửa và người đàn ông -Seachain",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#seachain",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#rapviet",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#karik_team",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#vieTalent",
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
      id: 2,
      user: {
        avatar:
          "data:image/jpeg;base64,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",
        accountName: "BrayRap",
        fullname: "Bray",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/cfbNtHNCMBo",
        videoDesc: "B RAY x SOFIA & CHÂU ĐĂNG KHOA | THIÊU THÂN | OFFICIAL MV",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#BRAY",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#Sofia",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#Chaudangkhoa",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#thieuthan",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#rapviet",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#officalMV",
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
      id: 3,
      user: {
        avatar:
          "https://images2.thanhnien.vn/uploaded/hienht/2021_04_12/den-vau_TICF.jpg?width=500",
        accountName: "AnhLaoCong",
        fullname: "Đen Vâu",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/CnZxamAbSnw",
        videoDesc: "Luôn yêu đời - Đen ft. Cheng Ft. Cheng @cheng.ofc",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#denvau",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#anhlaocong",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#luonyeudoi",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#ben",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#cheng",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#rapviet",
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
      id: 4,
      user: {
        avatar:
          "data:image/jpeg;base64,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",
        accountName: "DeChoat",
        fullname: "Dế choắt",
      },
      video: {
        videoId: "askdjf",
        videoUrl: "https://youtu.be/hp_3mMYSx9U",
        videoDesc: "KHU HUSTLE - NGHỊCH Share Stream Vạn câu hỏi",
        hashtags: [
          {
            id: "1",
            type: "music",
            hashtag: "#DECHOAT",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#rapviet",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#nghich",
            link: "https://www.tiktok.com/foryou?lang=en",
          },
          {
            id: "1",
            type: "music",
            hashtag: "#vancauhoi",
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
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFocus, setIdFocus] = useState<number>(0);

  const onMouseEnter = (id: number) => {
    console.log("sss", id);
    // setIsPlaying(true);
    setIdFocus(id);
  };

  const onMouseLeave = () => {
    // setIsPlaying(false);
  };

  return (
    <div className="home-container">
      <div className="home-mobile">
        <HomeResponse />
      </div>
      <div className="home-list-video">
        {dummyData.map(({id, user, video}, index) => (
          <div
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={() => onMouseLeave()}
            key={user.accountName + video.videoId}
          >
            <VideoItem
              isPlaying={isFocus === index}
              user={user}
              video={video}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
