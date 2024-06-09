import {InputNumber} from "antd"
import * as React from "react"

interface CustomInputProps {
  placeholder: string,
  totalDiamonds: number,
  setTotalDiamonds: Function,
  multiTimes?: number,
  mode?: 'save' | 'spend'
}

export const CustomInput: React.FC<CustomInputProps> = (
  {totalDiamonds, placeholder, setTotalDiamonds, multiTimes = 1, mode = 'save'}
) => {
  const [oldInputValue, setOldInputValue] = React.useState<number>(0)
  const tempTotalDiamonds = totalDiamonds

  return (
    <InputNumber size={'large'} placeholder={placeholder} onChange={
      (value => {
        if (value === oldInputValue) {
          return
        }
        if (!value) {
          value = 0
        }
        if (mode === 'save') {
          setTotalDiamonds(tempTotalDiamonds + multiTimes * (value - oldInputValue))
        } else {
          setTotalDiamonds(tempTotalDiamonds - multiTimes * (value - oldInputValue))
        }
        setOldInputValue(value)
      })
    } defaultValue={0} min={0}/>
  )
}