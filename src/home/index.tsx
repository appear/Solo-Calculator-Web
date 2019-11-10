import React, { useState } from "react";
import Router from "next/router";
import Input from "../input";
import Text from "../text";
import Container from "../container";
import Button from "../button";

function Home() {
  const [day, setDay] = useState<string>("");
  const handleDay = (day: string): void => setDay(day);

  const handleSubmit = () => {
    Router.push(`/detail?day=${day}`, `/detail?day=${day}`);
  };

  return (
    <Container maxWidth={720} padding={{ left: 20, right: 20 }}>
      <Text>당신을 얼마를 아끼셨나요 ..</Text>
      <Input
        value={day}
        onChange={handleDay}
        placeholder="마지막 연애 날짜를 적어주세요"
      />
      <Button onClick={handleSubmit}>알아보기</Button>
    </Container>
  );
}

export default Home;
