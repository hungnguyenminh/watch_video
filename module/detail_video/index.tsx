import React from "react";
import "./index.scss";
import {Row, Col} from "antd";

export function DetailVideo(): JSX.Element {
  return (
    <div className="detail-video-wrapper">
      <Row wrap>
        <Col lg={{span: 16}} xs={{span: 24}} className="video-big-view">
          1111111111111111111111
        </Col>
        <Col lg={{span: 8}} xs={{span: 0}} className="review section">
          222222222222222222
        </Col>
      </Row>
    </div>
  );
}
