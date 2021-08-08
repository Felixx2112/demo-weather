import React, { useState } from "react";
import "antd/dist/antd.css";
import SearchWeather from "./components/Search";
import InfoWeather from "./components/InfoWeather";
import { api } from "./services/api";
import { helper } from "./helpers/common";

function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});

  const SearchWeatherByCity = async (city = "") => {
    console.log(city);
    if (city !== "") {
      // phai nhap gia tri
      setLoading(true);
      const data = await api.getDataWeather(city);
      console.log(data);
      if (!helper.isEmptyObject(data)) {
        setWeather(data);
      }
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <SearchWeather loading={loading} search={SearchWeatherByCity} />
      {!helper.isEmptyObject(weather) && <InfoWeather dataWeather={weather} />}
    </div>
  );
}

export default App;
