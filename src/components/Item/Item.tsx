import React from "react";
import { hoverAtMouse } from "/functions";
import { ItemDetails } from "./";
import "./Item.scss";

type ItemProps = {
  iconMargin: number;
  iconSize: number;
  id: string;
  item: ItemDetails;
  onEquip(item: ItemDetails): void;
}

export class Item extends React.Component<ItemProps> {
  render() {
    const { iconMargin, iconSize, id, item, onEquip } = this.props;
    const { description, icon, name, rarity } = item;

    return (
      <div
        className="item"
        key={id}
        onClick={() => onEquip(item)}
        onMouseMove={e => hoverAtMouse(e, id)}
        onMouseEnter={e => hoverAtMouse(e, id)}
        onMouseLeave={e => hoverAtMouse(e, id)}
        style={{
          height: iconSize,
          margin: `${iconMargin/2}px`
        }}
      >
        <div className="item__details" id={id}>
          <div className="item__details--flex">
            <span className={`item__details--name item__details--name-${rarity}`}>
              {name}
            </span>
            <span className="item__details--description">
              "{description}"
            </span>
          </div>
        </div>
        <img className="item__icon" height={iconSize} src={icon} width={iconSize} />
      </div>
    )
  }
}