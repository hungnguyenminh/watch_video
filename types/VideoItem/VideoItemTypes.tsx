import {HashtagItemTypes} from "@app/types/HashtagItem/HashtagItemTypes";

export interface VideoItemTypes {
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
