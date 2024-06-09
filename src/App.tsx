import './App.css'
import {Col, DatePicker, Divider, Row, Space, Statistic} from "antd";
import {GcPool} from "./components/gcpool/page";
import {UserIncomeInputList} from "./components/income/page";
import * as React from "react";
import dayjs from "dayjs";


const App = () => {
  const [totalDiamonds, setTotalDiamonds] = React.useState<number>(0);

  const [gcPoolSpentDiamonds, setGcPoolSpentDiamonds] = React.useState<number>(0);

  const now = dayjs();
  const [increasedDiamonds, setIncreasedDiamonds] = React.useState<number>(0);

  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <UserIncomeInputList totalDiamonds={totalDiamonds} setTotalDiamonds={setTotalDiamonds}/>
        </Col>
        <Col>
          <GcPool totalDiamonds={gcPoolSpentDiamonds} setTotalDiamonds={setGcPoolSpentDiamonds}/>
        </Col>
      </Row>
      <Divider />
      <p>请选择计算截止日期</p>
      <Row>
        <DatePicker placeholder={'请选择计算截止日期'} defaultValue={now as any} size={'large'} onChange={((date, dateString) => {
          const date4Compiler = (date as dayjs.Dayjs)
          let diff = date4Compiler.diff(now, 'day', true)
          if (diff < 0) {
            diff = 0
          } else {
            diff = Math.ceil(diff)
          }
          setIncreasedDiamonds(600 * diff)
        })}/>
        <Divider />
      </Row>
      <p>每日获取的免费钻计算公式如下: 100(月卡) + 50(每日任务) + 50(幽玄域) + 450(估算每日福利)</p>
      <Row>
        <Statistic title={'剩余钻石数量'} value={totalDiamonds + gcPoolSpentDiamonds + increasedDiamonds}/>
      </Row>
    </>
  )
}

export default App
