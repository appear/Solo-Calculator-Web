import React from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";

const BaseInput = styled(InputMask)`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 7px solid;
  text-align: center;
  font-size: 32px;
  padding-bottom: 15px;
`;

interface InputProps {
  value: string;
  onChange: (day: string) => void;
  placeholder?: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <BaseInput
      mask="9999-99-99"
      maskChar={null}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
