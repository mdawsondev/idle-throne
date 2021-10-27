export interface ItemDetails {
  bonuses: { [key: string]: number }
  description: string;
  icon: string;
  id?: number;
  name: string;
  rarity: number;
  slot?: EquipmentSlot;
  type: EquipmentType;
}

export enum EquipmentType {
  consumable = "consumable",
  equipable = "equipable"
}

export enum EquipmentSlot {
  back = "back",
  chest = "chest",
  feet = "feet",
  finger1 = "finger1",
  finger2 = "finger2",
  hands = "hands",
  head = "head",
  legs = "legs",
  mainHand = "mainHand",
  neck = "neck",
  offHand = "offHand",
  shoulders = "shoulders",
  trinket1 = "trinket1",
  trinket2 = "trinket2",
  waist = "waist",
  wrist = "wrist"
}