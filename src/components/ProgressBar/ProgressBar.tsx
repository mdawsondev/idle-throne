import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { setup } from '/data';

import { Counter } from "/modules/App";
import "./ProgressBar.scss";

interface ProgressBarProps {
  click: (clickedCounter: Counter) => any;
  counter: Counter;
}

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const {click, counter} = this.props;
    const currencyShort = setup.currencyName[0].toLowerCase();

    const formatter = new Intl.NumberFormat("en-US");
    const baseValue = formatter.format(counter.baseValue);
    const currencyPerTick = formatter.format(counter.baseValue * counter.count);
    const price = formatter.format(counter.price);


    return (
      <div className="progress-bar" key={`pb-${counter.title}`}>
        <div className="progress-bar--left">
          <span className="progress-bar__title">
            {counter.title}
          </span>
          <div className="progress-bar__bar">
            {currencyPerTick}/s
          </div>
        </div>
        <div className="progress-bar--right">
          <span className="progress-bar__counter">{counter.count}</span>
            <FontAwesomeIcon
              className="progress-bar__button"
              color="brown"
              icon={faPlusSquare}
              onClick={() => click(counter)}
              size="2x"
            />
          <span className="progress-bar__price">{price}{currencyShort}</span>
        </div>
      </div>
    );
  }
}
