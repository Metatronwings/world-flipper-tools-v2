import * as React from "react";
import {getGcPoolData} from "./page.data";
import { CustomInput } from "../input/custominput";
import {Divider, Timeline} from "antd";
import {TimelineItemProps} from "antd/es/timeline/TimelineItem";

export interface GcPoolData {
  name: string
  date?: string
  priority?: 'P0' | 'P1' | 'P2' | 'P3'
}

interface UserInputListProps {
  totalDiamonds: number,
  setTotalDiamonds: Function,
}

interface GcPoolProps extends UserInputListProps {
}

function mapPriorityToColor(priority: string) {
  switch (priority) {
    case 'P0':
      return 'red'
    case 'P1':
      return 'orange'
    case 'P2':
      return 'gray'
    default:
      return 'red'
  }
}

const UserInputList: React.FC<UserInputListProps> = ( { totalDiamonds, setTotalDiamonds } ) => {
  const data = getGcPoolData()
  const items: TimelineItemProps[]  = data.map(
    ((value, index) => {
      return {
        color: mapPriorityToColor(value.priority as string),
        children: (
          <>
            <p>{value.name} 这个池子要花多少抽？</p>
            <CustomInput key={index} placeholder={value.name} totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds} multiTimes={150} mode={'spend'}/>
          </>
        )
      }
    })
  );

  return (
    <Timeline items={items}/>
  )
}

export const GcPool: React.FC<GcPoolProps> = ( { totalDiamonds, setTotalDiamonds } ) => {
  return (
    <UserInputList totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}/>
  )
}