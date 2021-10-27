import { ItemDetails } from "/components";
import untypedEnemies from "./enemies.json";
import untypedItems from "./items.json";
import untypedSetup from "./setup.json";

type SetupJSON = { [key: string]: any };

export const enemies: any[] = untypedEnemies;
export const items: ItemDetails[] = untypedItems;
export const setup: SetupJSON = untypedSetup;
