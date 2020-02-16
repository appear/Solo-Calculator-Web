import React, { useState } from 'react'
import Router from 'next/router'
import Input from './input'
import { Button, Container, Text } from '../shared'
import dateValidator from '../../utils/data-validator'

function Home() {
  const [day, setDay] = useState<string>('')
  const handleDay = (day: string): void => setDay(day)

  const handleSubmit = () => {
    if (!day || !dateValidator(day)) {
      window.alert('유효한 날짜 형식을 넣어주세요')
      return
    }

    Router.push(`/result?day=${day}`, `/result?day=${day}`)
  }

  return (
    <Container maxWidth={720} padding="0px 20px">
      <Text size="32" bold>
        🙈 마지막 연애 날짜를 적어주세요
      </Text>
      <Text size="18" color="gray700" bold>
        솔로 계산기는 당신이 아낀 금액을 알려줍니다
      </Text>
      <Input
        value={day}
        onChange={handleDay}
        placeholder="마지막 연애 날짜를 적어주세요"
      />
      <Button onClick={handleSubmit}>알아보기</Button>
    </Container>
  )
}

export default Home
