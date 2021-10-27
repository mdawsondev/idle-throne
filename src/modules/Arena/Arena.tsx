import React from "react";
import { IEnemy, IPlayer } from "./IArena";
import "./Arena.scss";

export class Arena extends React.Component<{ enemy: IEnemy, player: IPlayer }> {
  renderHealthBar(baseHealth: number, currentHealth: number) {
    const healthPercentage = `${(currentHealth / baseHealth) * 100}%`;
    const healthBar = (
      <div className="arena__health--outer">
        <div className="arena__health--inner" style={{ width: healthPercentage }}></div>
      </div>
    );

    return healthBar;
  }

  renderUnit(unit: IPlayer | IEnemy) {
    const name = unit.name ?? "Player";
    const icon = unit.icon ?? "/assets/mobsavataricons/chicken_01.png";
    const facing = "facing" in unit ? unit.facing : "";

    const unitView = (
      <div className="arena__unit">
        <p>{name}</p>
        <img className={`arena__unit__icon arena__unit__icon--${facing}`} src={icon} />
        {this.renderHealthBar(unit.baseHealth, unit.currentHealth)}
      </div>
    )

    return unitView;
  }

  render() {
    const { enemy, player } = this.props;
    return (
      <div className="arena">
        {this.renderUnit(player)}
        {this.renderUnit(enemy)}
      </div>
    )
  }
}