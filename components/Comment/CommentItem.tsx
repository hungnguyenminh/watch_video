import React from "react";
import "./styles.scss";

function CommentItem() {
  return (
    <div className="comment-item-wrapper">
      <img
        className="user-avatar"
        src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/26/photo-1650990843778-1650990844390345942486.jpg"
        alt="user-avatar"
      />
      <div className="user-info-comment">
        <div className="user-comment">
          <div className="username">SoD_Nguyen</div>
          <div className="created-time">2 phút trước</div>
        </div>
        <div className="comment-content">
          fkjdsahfkjdshafjkdshfkjdsfkjdsah fkjdshafjkdshfkjdsfkjdsahfkj
          dshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjdsfkjdsahfkjdshafjkdshfkjds
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
