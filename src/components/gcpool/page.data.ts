import {GcPoolData} from "./page";

export const gcPoolData: GcPoolData[] = [
  {
    name: "test1",
    priority: "P0"
  },
  {
    name: "test2",
    priority: "P0"
  },
  {
    name: "test3",
    priority: "P0"
  },
  {
    name: "test4",
    priority: "P0"
  }
]

export function getGcPoolData() {
  return gcPoolData;
}

