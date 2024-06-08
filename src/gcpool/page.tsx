import * as React from "react";
import {Input} from "antd";

interface GcPoolData {
  key: number,
  name: string
  date?: string
  priority?: 'P0' | 'P1' | 'P2' | 'P3'
}

interface UserInputListProps {

}

const UserInputList: React.FC<UserInputListProps> = ( { props } ) => {
  const data: GcPoolData[] = [
    {
      key: 1,
      name: "test1",
      priority: "P0"
    },
    {
      key: 2,
      name: "test2",
      priority: "P0"
    },
    {
      key: 3,
      name: "test3",
      priority: "P0"
    },
    {
      key: 4,
      name: "test4",
      priority: "P0"
    }
  ]

  const inputList: Input[] = data.map(((value, index) => {return <Input key={index} placeholder={value.name} />}))

  inputList.push()

  return (
    <>{inputList}</>
  )
}

export const GcPool: React.FC = () => {
  return (
    <UserInputList />
  )
}