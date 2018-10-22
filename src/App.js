import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "24774ada5d8cb6f10be262dfc6716646";
class App extends React.Component {
  state = {
    tempetature: undefined,
    wind: undefined,
    day: undefined,
    high: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_call = await fetch(
      //`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
    );
    const data = await api_call.json();
    //if (city && country)
    if (city) {
      this.setState({
        //temperature: data.main.temp,
        temperature: data.query.results.channel.item.condition.temp,
        chill: data.query.results.channel.wind.chill,
        direction: data.query.results.channel.wind.direction,
        speed: data.query.results.channel.wind.speed,
        day: data.query.results.channel.item.forecast[0].day,
        high: data.query.results.channel.item.forecast[0].high,
        low: data.query.results.channel.item.forecast[0].low,
        day1: data.query.results.channel.item.forecast[1].day,
        high1: data.query.results.channel.item.forecast[1].high,
        low1: data.query.results.channel.item.forecast[1].low,
        day2: data.query.results.channel.item.forecast[2].day,
        high2: data.query.results.channel.item.forecast[2].high,
        low2: data.query.results.channel.item.forecast[2].low,
        day3: data.query.results.channel.item.forecast[3].day,
        high3: data.query.results.channel.item.forecast[3].high,
        low3: data.query.results.channel.item.forecast[3].low,
        day4: data.query.results.channel.item.forecast[4].day,
        high4: data.query.results.channel.item.forecast[4].high,
        low4: data.query.results.channel.item.forecast[4].low

        // city: data.name,
        // country: data.sys.country,
        // humidity: data.main.humidity,
        // description: data.weather[0].description,
        // error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        chill: undefined,
        direction: undefined,
        speed: undefined,
        day: undefined,

        day1: undefined,
        high: undefined,
        low: undefined,

        day2: undefined,
        high1: undefined,
        low1: undefined,

        day3: undefined,
        high2: undefined,
        low2: undefined,

        day4: undefined,
        high3: undefined,
        low3: undefined,

        error: "Please enter the value."
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="conteiner">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    chill={this.state.chill}
                    direction={this.state.direction}
                    speed={Math.round(parseInt(this.state.speed) /3.6)}
                    day={this.state.day}
                    day1={this.state.day1}
                    day2={this.state.day2}
                    day3={this.state.day3}
                    day4={this.state.day4}
                    high={this.state.high}
                    high1={this.state.high1}
                    high2={this.state.high2}
                    high3={this.state.high3}
                    high4={this.state.high4}
                    low={this.state.low}
                    low1={this.state.low1}
                    low2={this.state.low1}
                    low3={this.state.low2}
                    low4={this.state.low4}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
