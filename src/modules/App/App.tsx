import React from "react";
import { AppState, Counter, IApp } from "./";
import { StatsBar } from "/components";
import { createCounters, spawnEnemy, spawnItem } from "/functions";
import { Arena, Inventory, ProgressBlock, UIBorder } from "/modules";
import { ItemDetails } from "/components/Item";
import { setup } from "/data";

import "./App.scss";
import { Equipment } from "../Equipment";
import { EquipmentType } from "/components/Item/IItem";

export class App extends React.Component<{}, AppState> implements IApp {
  constructor(props: {}) {
    super(props);
    const countersInit = {
      counterName: setup.counterName,
      prestiege: 0,
      titles: setup.counterTitles
    };

    this.state = {
      arenaLevel: 1,
      counters: createCounters(countersInit),
      currency: 0,
      currencyPerTick: 0,
      equipment: {
        back: null,
        chest: null,
        feet: null,
        finger1: null,
        finger2: null,
        hands: null,
        head: null,
        legs: null,
        mainHand: null,
        neck: null,
        offHand: null,
        shoulders: null,
        trinket1: null,
        trinket2: null,
        waist: null,
        wrist: null
      },
      enemy: spawnEnemy(1),
      gameStart: Date.now(),
      inventory: [],
      player: {
        baseDamage: 0,
        baseHealth: 20,
        currentHealth: 13
      },
      prestiege: 0,
      prestiegeStart: Date.now(),
      timer: 0,
    };
  }

  componentDidMount() {
    const ms = 1000;
    const ticker = setInterval(() => this.onTick(), ms);
  }

  onTick() {
    this.updateTimer();
    this.updateCurrency()
  }

  updateCurrency() {
    const { counters, currency } = this.state;
    const paycheck = counters.reduce((pre, cur) => {
      const count = cur.count;
      const value = cur.baseValue;
      const profit = count * value;

      return pre + profit;
    }, 0)
    const updatedCurrency = currency + paycheck;
    this.setState({ currency: updatedCurrency, currencyPerTick: paycheck });
  }

  updateTimer() {
    const { timer } = this.state;
    const updatedTimer = timer + 1;
    this.setState({ timer: updatedTimer });
  }

  autoAttack = () => {

  }

  handleClickCounter = (clickedCounter: Counter) => {
    console.log(clickedCounter);
    const { counters, currency } = this.state;
    const affordable = currency >= clickedCounter.price;

    if (affordable) {
      const updatedCurrency = currency - clickedCounter.price;
      const updatedCounters = counters.map(counter => {
        if (counter.title === clickedCounter.title) {
          counter.count++;
          counter.price = counter.basePrice * counter.count;
        }
        return counter;
      });

      this.setState({ counters: updatedCounters, currency: updatedCurrency });
    }
  }

  handleClickPrestiege(isDev = false) {
    if (isDev) {
      const currency = 0;
      const prestiege = this.state.prestiege + 1;
      const prestiegeStart = Date.now();
      const timer = 0;

      const countersInit = {
        counterName: setup.counterName,
        prestiege: prestiege,
        titles: setup.counterTitles
      };
      const counters = createCounters(countersInit);

      this.setState({ currency, counters, prestiege, prestiegeStart, timer });
    }
  };

  handleClickItem = (item: ItemDetails) => {
    const { inventory, equipment } = this.state;
    const { bonuses, description, icon, name, rarity, slot, type } = item;

    const fullInventory = [...inventory];
    const newEquipment = { ...equipment };

    let isUnequip = false;

    if (type === EquipmentType.equipable) {
      const currentlyEquipped = equipment[slot!];
      if (!!currentlyEquipped) fullInventory.push(currentlyEquipped); // Move existing to inventory.
      isUnequip = currentlyEquipped?.id == item.id; // Flag isUnequip if true.
      newEquipment[slot!] = isUnequip? null : item; // Replace with new item if not unequipping.
    }

    const newInventory = fullInventory.filter(invItem => !isUnequip ? invItem.id !== item.id : true);

    this.setState({ equipment: newEquipment, inventory: newInventory })
  }

  render() {
    const {
      counters,
      currency,
      currencyPerTick,
      enemy,
      equipment,
      inventory,
      player,
      prestiege,
      timer } = this.state;

    const debugToolbar = <div className="debug-toolbar">
      <button onClick={() => this.setState({ currency: currency + Math.pow(10, 10) })}>Gold++</button>
      <button onClick={() => this.setState({ inventory: [...inventory, spawnItem()] })}>Item++</button>
      <button onClick={() => this.handleClickPrestiege(true)}>Prestiege++</button>
      <button onClick={() => this.setState({ timer: timer + 3600 })}>Timer++</button>
    </div>;


    return (
      <div className="app">
        <UIBorder />
        <div className="content">
          {debugToolbar}
          <StatsBar
            currency={currency}
            currencyPerTick={currencyPerTick}
            prestiege={prestiege}
            timer={timer}
          />
          <ProgressBlock
            click={this.handleClickCounter}
            counters={counters}
            title="Royal Units"
          />
          <Equipment
            equipped={equipment}
            onUnequip={this.handleClickItem}
          />
          <Inventory // Needs equip/trash functions passed.
            columns={8}
            items={inventory}
            rows={3}
            onEquip={this.handleClickItem}
          />
          <Arena
            enemy={enemy}
            player={player}
          />

        </div>
      </div>
    );
  }
}