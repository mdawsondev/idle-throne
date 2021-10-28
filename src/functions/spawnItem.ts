import { items } from "/data";
import { ItemDetails } from "/components/Item";

export function spawnItem(): ItemDetails {
  const itemArr = items;
  const dropSelect = Math.floor(Math.random() * itemArr.length + 1) - 1;
  const drop = {...itemArr[dropSelect]}; // Clone to prevent pointers to original items.

  drop.id = Math.round(Math.random() * Math.pow(10, 10));

  return drop;
}