import { EquipmentSlot, ItemDetails } from "/components";

export type IEquipment = {
  [key in EquipmentSlot]: ItemDetails | null;
}