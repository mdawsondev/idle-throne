import React from "react";
import { ProgressBar  } from "/components";
import { Counter } from "/modules/App";
import { UIWindow } from "/modules/UI";

import "./ProgressBlock.scss";

export class ProgressBlock extends React.Component<{ counters: Counter[], click: (clickedCounter: Counter) => void, title: string}> {
  render() {
  const { click, counters, title } = this.props;
    const progressBars = counters.map(counter => {
      return (
        <ProgressBar
          click={click}
          counter={counter}
          key={counter.title}
        />
      );
    });

    return (
      <div className="progress-block">
        <UIWindow
          title="Royal Units"
          content={progressBars}
        />
      </div>
    )
  }
}