import { Counter } from "/modules/App";

export interface CreateCountersData {
  counterName: string;
  prestiege: number;
  titles: string[];
}

export function createCounters(data: CreateCountersData): Counter[] {
  const template: Counter = {
    basePrice: 0,
    baseSeconds: 1,
    baseValue: .01,
    count: 0,
    price: 0,
    title: data.counterName
  }

  let numCounters = 0;
  const counters = data.titles.map(title => {
    const counter: Counter = { ...template };
    const offsetPrice = 5;
    const offsetValue = 20;
    const prestiege = (data.prestiege ?? 0) + 1;
    if (numCounters > 0) {
      counter.basePrice = Math.pow(10, numCounters) * Math.pow(offsetPrice, numCounters);
      counter.baseSeconds = Math.pow(numCounters, 2);
      counter.baseValue = ((counter.basePrice / offsetValue) / Math.log(counter.basePrice / offsetValue) / 10) * prestiege;
    }

    counter.title = title;
    counter.price = counter.basePrice;

    numCounters++;
    return counter;
  });

  return counters;
}