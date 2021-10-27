import React from "react";
import { Item, ItemDetails } from "/components/Item";
import "./Inventory.scss";

type InventoryProps = {
  columns: number;
  items: ItemDetails[];
  onDelete(item: ItemDetails): void;
  onEquip(item: ItemDetails): void;
  onTrash(item: ItemDetails): void;
  rows: number;
}

export class Inventory extends React.Component<InventoryProps> {
  render() {
    const { columns, onEquip, items, rows } = this.props;
    const [iconMargin, iconSize] = [10, 60];
    const cellSize = iconMargin + iconSize;

    const inventoryStyle = {
      backgroundSize: cellSize,
      height: cellSize * rows,
      width: cellSize * columns
    }

    return (
      <div className="inventory" style={inventoryStyle}>
        {items.map((item, i) => {
          const id = `item-info-${i}`;

          return (
            <Item
              id={id}
              item={item}
              iconMargin={iconMargin}
              iconSize={iconSize}
              onEquip={onEquip}
            />
          )
        })}
      </div>
    )
  }
}