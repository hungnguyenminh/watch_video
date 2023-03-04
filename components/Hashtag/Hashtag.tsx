import React from 'react';
import {Icon} from "@app/components/Icon"
import "./styles.scss"
import {HashtagItemTypes} from "@app/types/HashtagItem/HashtagItemTypes";
const Hashtag = ({id, type, hashtag, link}: HashtagItemTypes) => {

    const handleAccessLink = () => {

    }

    return (
        <div className="hashtag-wrapper" onClick={() => {

        }
        }>
                <Icon className="hashtag-icon"
                      icon={type==="common" ? "hash" : "music"}
                      size={14}
                      color={"black"}/>
                <div className="hashtag-content">
                    {hashtag}
                </div>
        </div>
    );
};

export default Hashtag;
