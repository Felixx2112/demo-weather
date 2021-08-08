import React from "react";
import { Input, Row, Col } from "antd";
import PropTypes from "prop-types";

const { Search } = Input;

function SearchWeather(props) {
  const { loading, search } = props;
  return (
    <Row style={{ margin: "30px auto" }}>
      <Col span={12} offset={6}>
        <Search
          placeholder="name of city..."
          enterButton="Search"
          loading={loading}
          onSearch={(val) => search(val)}
        />
      </Col>
    </Row>
  );
}

PropTypes.propTypes = {
  loading: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchWeather;
