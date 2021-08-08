import React from "react";
import { Row, Col, Card, Image } from "antd";
import PropTypes from "prop-types";

InfoWeather.propTypes = {
  dataWeather: PropTypes.object,
};

function InfoWeather(props) {
  const { dataWeather } = props;
  return (
    <Row>
      {/* span: giua, offset: trai, phai| tong thuong la 24 */}
      <Col span={8} offset={8}>
        <Card size="small" title="Thong tin thoi tiet">
          <p>- Nhiet do: {dataWeather.temp}</p>
          <p>- Thong tin: {dataWeather.main}</p>
          <p>- Mieu ta: {dataWeather.description}</p>
          <div style={{ display: "grid" }}>
            - Anh thoi tiet:{" "}
            <Image
              width={50}
              src={`https://openweathermap.org/img/w/${dataWeather.icon}.png`}
            />
          </div>
          <p>- Do am: {dataWeather.humidity}</p>
          <p>- Ap suat: {dataWeather.pressure}</p>
        </Card>
      </Col>
    </Row>
  );
}

export default InfoWeather;
