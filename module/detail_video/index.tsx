import React from "react";
import "./index.scss";
import {Row, Col, Input} from "antd";

import ReactPlayer from "react-player";
import CommentItem from "@app/components/Comment/CommentItem";
import {
  HeartFilled,
  CommentOutlined,
  ShareAltOutlined,
  SendOutlined,
} from "@ant-design/icons";

export function DetailVideo(): JSX.Element {
  // const [isLike, setIsLike] = useState(false);

  return (
    <div className="detail-video-wrapper">
      <Row className="detail-video-ant-row" wrap>
        <Col lg={{span: 17}} xs={{span: 24}} className="video-big-view">
          <ReactPlayer
            url="test_video.mp4"
            controls
            volume={0.5}
            loop
            width="100%"
            height="100%"
            style={{
              minWidth: "fit-content",
            }}
          />
        </Col>
        <Col lg={{span: 7}} xs={{span: 24}} className="review-section-wrapper">
          {/* <div className="review-section-title">Review Section</div> */}
          <div className="review-section-container">
            <div className="video-information-container">
              <div className="user-information-container">
                <img
                  className="user-avatar"
                  src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/26/photo-1650990843778-1650990844390345942486.jpg"
                  alt="user-avatar"
                />
                <div className="user-information">
                  <div className="user-name">Son Nguyen</div>
                  <div className="posted-time">5h trước</div>
                </div>
              </div>
              <div className="video-description-container">
                Xin chao mung cac ban #sh350i sh350i #sh350i #sh350i #sh350i
                #sh350i
              </div>
            </div>
            <div className="review-section-body">
              <div className="reaction-status">
                <div className="like">
                  <div className="icon">
                    <HeartFilled
                      style={{
                        fontSize: 15,
                        color: "#fe2c55",
                      }}
                    />
                  </div>
                  <div className="number-of-reaction">2.550</div>
                </div>
                <div className="comment-share">
                  <div className="icon-wrapper comment">
                    <CommentOutlined
                      style={{
                        fontSize: 22,
                        color: "#90959b",
                      }}
                    />
                    <div className="number-of-reaction">200</div>
                  </div>
                  <div className="icon-wrapper">
                    <ShareAltOutlined
                      style={{
                        fontSize: 22,
                        color: "#90959b",
                      }}
                    />
                    <div className="number-of-reaction">200</div>
                  </div>
                </div>
              </div>
              <div className="comment-list-wrapper">
                <div className="title">Bình luận</div>
                <div className="list-of-comment">
                  <CommentItem />
                  <CommentItem />
                  <CommentItem />
                  <CommentItem />
                </div>
                <div className="comment-editor">
                  <Input
                    className="input-field"
                    placeholder="Nhập bình luận..."
                  />
                  <div className="icon">
                    <SendOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
