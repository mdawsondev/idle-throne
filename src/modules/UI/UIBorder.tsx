import React from "react";
import "./UIBorder.scss";

export class UIBorder extends React.Component {
  render() {
    return (
      <div className="ui-border">
        <div className="ui-border__bottom"></div>
        <div className="ui-border__left"></div>
        <div className="ui-border__right"></div>
        <div className="ui-border__top"></div>
        <img className="ui-border__bottom--left" src="/assets/casualui/Casual_UI_png/CasualUI_13_3.png" />
        <img className="ui-border__bottom--right" src="/assets/casualui/Casual_UI_png/CasualUI_13_3.png" />
        <img className="ui-border__top--left" src="/assets/casualui/Casual_UI_png/CasualUI_13_2.png" />
        <img className="ui-border__top--right" src="/assets/casualui/Casual_UI_png/CasualUI_13_2.png" />
      </div>
    )
  }
}