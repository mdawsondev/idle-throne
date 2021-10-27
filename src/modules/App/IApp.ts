import { IEnemy, IPlayer } from "../Arena";
import { ItemDetails } from "/components";
import { IEquipment } from "/modules";

export interface AppState {
  arenaLevel: number;
  counters: Counter[]
  currency: number;
  currencyPerTick: number;
  enemy: IEnemy;
  equipment: IEquipment;
  gameStart: number;
  inventory: ItemDetails[];
  prestiege: number;
  player: IPlayer;
  prestiegeStart: number;
  timer: number;
}

export interface Counter {
  basePrice: number;
  baseSeconds: number;
  baseValue: number;
  count: number;
  price: number;
  title: string;
}

export interface IApp {
  onTick(): void;
  updateCurrency(): void;
  updateTimer(): void;
  handleClickCounter(clickedCounter: Counter): void;
  handleClickPrestiege(): void;
}
