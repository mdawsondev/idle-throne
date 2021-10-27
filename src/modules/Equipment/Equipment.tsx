import React from "react";
import { EquipmentSlot, ItemDetails } from "/components";
import "./Equipment.scss";
import { IEquipment } from "./IEquipment";

interface EquipmentProps {
  equipped: IEquipment;
  onUnequip(item: ItemDetails): void;
}

export class Equipment extends React.Component<EquipmentProps> {
  showEquipped(item: ItemDetails) {
    const handleUnequip = this.props.onUnequip;
    const { icon } = item;

    const img = (
      <img
        className="equipment__icon equipment__icon--equipped"
        onClick={() => handleUnequip(item)}
        src={icon}
      />
    );

    return img;
  }

  render() {
    const { equipped } = this.props;
    const slotNames = [ // Should fix this to keysof.
      "mainHand",
      "head",
      "chest",
      "belt",
      "back",
      "legs",
      "boots",
      "shoulders",
      "gloves",
      "bracers",
      "neck",
      "ring1",
      "ring2",
    ];

    const equipmentSlots = slotNames.map(slot => {
      const item = equipped[slot as EquipmentSlot];

      let equippedIcon = null;
      let transparentClass = null;
      let grayscaleClass = null;
      let placeholderClass = null;

      if (!!item) equippedIcon = this.showEquipped(item);
      else {
        grayscaleClass = "equipment__slot--grayscale";
        placeholderClass = `equipment__icon--${slot}`;
        transparentClass = "equipment__slot--transparent";
      }

      return (
        <div className={`equipment__slot ${grayscaleClass}`}>
          <div className={`equipment__icon ${transparentClass} ${placeholderClass}`}>
            {equippedIcon}
          </div>
        </div>
      )
    });

    return (
      <div className="equipment">
        {equipmentSlots};
      </div>
    )
  }
}