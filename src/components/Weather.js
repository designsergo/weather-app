import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className="weather__key">
          Location: 
          <span className="weather__value">
            {props.city}, {props.country}
          </span>
        </p>
      )}
    {props.temperature && (
      <p className="weather__key">
        Temperature (°C): <span className="weather__value">{props.temperature}</span>
      </p>
    )}
    
            <p className="wind-wind">wind: </p>
            {props.chill && (
              <p className="weather__key">
                chill: <span className="weather__value">{props.chill}</span>
              </p>
            )}
         
            {props.direction && (
              <p className="weather__key">
                direction: <span className="weather__value">{props.direction}˚</span>
              </p>
            )}
         
            {props.speed && (
              <p className="weather__key">
                speed (m/s): <span className="weather__value">{props.speed}</span>
              </p>
            )}

          <p className="wind">forecast for several days</p>

    <table className="table-table">
            <tr>
              <th className="wind">
              
              day</th>
              <td>{props.day && (
                <p className="weather__key">
                  <span className="weather__value">{props.day}
                  </span>
                </p>)}
              </td>

              <td>{props.day1 && (
                <p className="weather__key">
                  <span className="weather__value">{props.day1}
                  </span>
                </p>)}</td>
                <td>{props.day2 && (
                <p className="weather__key">
                  <span className="weather__value">{props.day2}
                  </span>
                </p>)}</td>
                <td>{props.day3 && (
                <p className="weather__key">
                  <span className="weather__value">{props.day3}
                  </span>
                </p>)}</td>
                <td>{props.day4 && (
                <p className="weather__key">
                  <span className="weather__value">{props.day4}
                  </span>
                </p>)}</td>
            </tr>
            <tr>
              <th className="wind">high</th>
              <td>{props.high && (
            <p className="weather__key">
              <span className="weather__value">{props.high}˚</span>
            </p>
          )}</td>
              <td>{props.high1 && (
            <p className="weather__key">
              <span className="weather__value">{props.high1}˚</span>
            </p>
          )}</td>
          <td>{props.high2 && (
            <p className="weather__key">
              <span className="weather__value">{props.high2}˚</span>
            </p>
          )}</td>
          <td>{props.high3 && (
            <p className="weather__key">
              <span className="weather__value">{props.high3}˚</span>
            </p>
          )}</td>
          <td>{props.high4 && (
            <p className="weather__key">
              <span className="weather__value">{props.high4}˚</span>
            </p>
          )}</td>
            </tr>

            <tr>
              <th className="wind">low</th>
              <td>
                {props.low && (
                <p className="weather__key"><span className="weather__value">{props.low}˚</span></p>
                )} 
            </td>
              <td>
              {props.low1 && (
                <p className="weather__key"><span className="weather__value">{props.low1}˚</span></p>
              )}
          </td>
          <td>
              {props.low2 && (
                <p className="weather__key"><span className="weather__value">{props.low2}˚</span></p>
              )}
          </td>
          <td>
              {props.low3 && (
                <p className="weather__key"><span className="weather__value">{props.low3}˚</span></p>
              )}
          </td>
          <td>
            
              {props.low4 && (
                <p className="weather__key"><span className="weather__value">{props.low4}˚</span></p>
              )}
          </td>
            </tr>
          </table>
        
    

    {props.humidity && (
      <p className="weather__key">
        Humidity :<span className="weather__value">{props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Condition: <span className="weather__value">{props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
