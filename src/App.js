import React from "react";
import "./App.scss";
import LocationInput from "./components/LocationInput/LocationInput";
import InfoPage from "./components/InfoPage/InfoPage";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: {
        base: "https://api.openweathermap.org/data/2.5/",
        key: "0574f312792797a5b999b0d60435f78e",
      },
      data: {
        curentWeather: {},
        forecast: {},
      },
      location: "",
      submitLocation: false,
      correctLocation: false,
    };

    this.changeLocation = this.changeLocation.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
    this.backToChoiseLocation = this.backToChoiseLocation.bind(this);
  }

  changeLocation(e) {
    this.setState({ location: e.target.value });
  }

  backToChoiseLocation() {
    this.setState({ submitLocation: false });
    this.setState({ data: { curentWeather: {}, forecast: {} } });
    this.setState({ correctLocation: false });
  }

  async fetchData(location, forecast = "weather") {
    const api = this.state.api;
    try {
      const { data } = await axios.get(
        `${api.base}${forecast}?q=${location}&units=metric&appid=${api.key}`
      );
      this.setState({ correctLocation: true });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async submitLocation(event) {
    event.preventDefault();

    const curentWeather = await this.fetchData(this.state.location);
    const forecast = await this.fetchData(this.state.location, "forecast");

    this.setState({
      data: { curentWeather: curentWeather, forecast: forecast },
    });

    if (this.state.correctLocation) {
      this.setState({ submitLocation: true });
      this.setState({ location: "" });
    }
  }

  render() {
    return (
      <div>
        {!this.state.submitLocation ? (
          <LocationInput
            changeLocation={this.changeLocation}
            value={this.state.location}
            sumbit={this.submitLocation}
          />
        ) : (
          <InfoPage
            data={this.state.data}
            backToChoiseLocation={this.backToChoiseLocation}
          />
        )}
      </div>
    );
  }
}

export default App;
