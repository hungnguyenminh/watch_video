import {HashtagItemTypes} from "@app/types/HashtagItem/HashtagItemTypes";

export interface VideoItemTypes {
  id?: number;
  isPlaying?: boolean;
  user: {
    avatar?: string;
    accountName: string;
    fullname: string;
  };

  video: {
    videoId: string;
    videoUrl: string;
    videoDesc?: string;
    hashtags?: HashtagItemTypes[];
    reaction?: {
      nOfLike?: number;
      nOfComment?: number;
    };
  };
}
