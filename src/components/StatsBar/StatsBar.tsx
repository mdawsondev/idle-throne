import React from "react";
import "./StatsBar.scss";
import * as setup from "/data/setup.json";

interface StatsBarProps {
  currency: number;
  currencyPerTick: number;
  prestiege: number;
  timer: number;
}

export class StatsBar extends React.Component<StatsBarProps> {
  secondsToHMS(seconds: number) {
    const hms = new Date(seconds * 1000).toISOString().substr(11, 8);
    return hms;
  }
  render() {
    const {currency, currencyPerTick, prestiege, timer} = this.props;
    const {currencyName, tickName} = setup;

    const formatter = new Intl.NumberFormat("en-US");
    const currencyStr = formatter.format(currency);
    const currencyPerTickStr = formatter.format(currencyPerTick);
    const earningsPer = `${currencyName[0]}P${tickName[0]}`;
    const hms = this.secondsToHMS(timer);

    return (
      <div className="stats-bar">
        <p style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span className="stats-bar__column">
            <img className="stats-bar__icon" src="/assets/commontreasurechest/icons/gold_02.PNG" />
            <b>{currencyName}</b>: {currencyStr}
          </span>
          <span className="stats-bar__column">
            <img className="stats-bar__icon" src="/assets/commontreasurechest/icons/gold_01.PNG" />
            <b>{earningsPer}</b>: {currencyPerTickStr}
          </span>
          <span className="stats-bar__column">
            <img className="stats-bar__icon" src="/assets/commontreasurechest/icons/gold_02.PNG" />
            <b>Time</b>: {hms}
          </span>
          <span className="stats-bar__column">
            <img className="stats-bar__icon" src="/assets/commontreasurechest/icons/gold_02.PNG" />
            <b>Prestiege</b>: {prestiege}
          </span>
        </p>
      </div>
    );
  }
}
