import * as React from "react";
import {CustomInput} from "../input/custominput";
import {Divider, Flex} from "antd";

interface UserIncomeInputListProps {
  totalDiamonds: number,
  setTotalDiamonds: Function
}

export const UserIncomeInputList: React.FC<UserIncomeInputListProps> = ({totalDiamonds, setTotalDiamonds}) => {

  return (
    <Flex vertical >
      <p>免费钻数量</p>
      <CustomInput placeholder={'免费钻数量'} totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}/>
      <p>付费钻数量</p>
      <CustomInput placeholder={'付费钻数量'} totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}/>
      <p>10连券数量</p>
      <CustomInput placeholder={'10连券数量'} totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}
                   multiTimes={1500}/>
      <p>单抽券数量</p>
      <CustomInput placeholder={'单抽券数量'} totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}
                   multiTimes={150}/>
      <p>额外钻石数量</p>
      <CustomInput placeholder={'额外钻石数量'} totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}/>
    </Flex>
  )
}