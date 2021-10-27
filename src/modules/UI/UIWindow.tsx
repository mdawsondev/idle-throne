import React from "react";

import "./UIWindow.scss";

export class UIWindow extends React.Component<{content: JSX.Element[], title: string}> {
  render() {
  const { content, title } = this.props;
    return (
      <div className="ui-window">
        <div className="ui-window__wrapper">
          <img
            src="/assets/casualui/Casual_UI_png/CasualUI_16_1.png"
            className="ui-window__wrapper ui-window__wrapper--top"
          />
          <img
            src="/assets/casualui/Casual_UI_png/CasualUI_16_2.png"
            className="ui-window__wrapper ui-window__wrapper--middle"
          />
          <img
            src="/assets/casualui/Casual_UI_png/CasualUI_16_3.png"
            className="ui-window__wrapper ui-window__wrapper--bottom"
          />
          <img
            src="/assets/casualui/Casual_UI_png/CasualUI_7_3.png"
            className="ui-window__wrapper ui-window__wrapper--close"
          />
        </div>
        <div className="ui-window__title">
          {title}
        </div>
        <div className="ui-window__bars">
          {content}
        </div>
      </div>
    )
  }
}