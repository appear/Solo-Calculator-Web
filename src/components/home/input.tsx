import React from 'react'
import InputMask from 'react-input-mask'
import styled from 'styled-components'
import { getColor } from '../shared/color'

const BaseInput = styled(InputMask)`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid rgba(${getColor('gray200')});
  text-align: center;
  font-size: 25px;
  padding-bottom: 15px;

  &:focus {
    border-bottom: 1px solid rgba(${getColor('blue')});
  }
`

interface InputProps {
  value: string
  onChange: (day: string) => void
}

export default function Input({ value, onChange }: InputProps) {
  return (
    <BaseInput
      mask="9999-99-99"
      maskChar={null}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="마지막 연애 날짜를 알려주세요"
    />
  )
}
