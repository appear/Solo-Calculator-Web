import React, { useState } from 'react'
import Router from 'next/router'
import Input from './input'
import { Button, Container, Text } from '../shared'
import dateValidator from '../../utils/data-validator'

function Home() {
  const [day, setDay] = useState<string>('')

  const handleSubmit = () => {
    if (!day || !dateValidator(day)) {
      window.alert('유효한 날짜 형식을 넣어주세요')
      return
    }

    Router.push(`/result?day=${day}`, `/result?day=${day}`)
  }

  return (
    <Container display="flex" maxWidth={720} padding="0px 20px">
      <Container>
        <Container margin="0 0 50px 0">
          <Text size="32"> 🙈</Text>
          <Text size="32" bold margin="0 0 5px 0">
            마지막 연애 날짜를 적어주세요.
          </Text>
          <Text size="15" color="gray500">
            솔로 계산기는 당신이 아낀 금액을 알려줍니다
          </Text>
        </Container>
        <Input value={day} onChange={setDay} />
        <Button onClick={handleSubmit}>계산하기</Button>
      </Container>
    </Container>
  )
}

export default Home
