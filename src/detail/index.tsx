import React, { useState } from "react";
import Router from "next/router";

import Text from "../text";
import Container from "../container";
import Button from "../button";
import formatNumber from "../format-number";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

const YEAR = 365;
const YEAR_PRICE = 3900000;
const DAY_PRICE = Math.floor(YEAR_PRICE / YEAR);
const CHICKEN_PRICE = 18000;
const PIZZA_PRICE = 7000;

interface DetailProps {
  day: string;
}

interface ResultValues {
  totalDay?: number;
  totalPrice?: number;
  chickenCount?: string;
  pizzaCount?: string;
}

function Detail({ day }: DetailProps) {
  const [result] = useState<ResultValues | null>(parseDay(day));
  const { totalDay = 0, totalPrice = 0, chickenCount = "", pizzaCount = "" } =
    result || {};

  const handleSubmit = () => {
    Router.back();
  };

  return (
    <Container maxWidth={720} padding={{ left: 20, right: 20 }}>
      <Text margin={{ bottom: 100 }}>
        결과는 평균 커플이 사용하는 1년치 데이트 비용을 390 만원으로
        책정하였으며 일주일에 2 ~ 3 번정도 만난다는 가정하에 하루 데이트 비용(만
        육백원)으로 책정하였습니다. 치킨은 한마리에 1.8 천원을 기준으로 하였으며
        피자는 피자스쿨 기준 7 천원으로 책정하였습니다.
      </Text>
      {result && (
        <Container>
          <Text>당신은 총 {formatNumber(totalDay)} 일을 솔로로 지내셨으며</Text>
          <Text>
            {formatNumber(totalPrice)}원을 아끼셨고 {formatNumber(totalPrice)}
            으로는
          </Text>
          <Text>치킨 {formatNumber(chickenCount)} 마리를 사먹을 수 있고</Text>
          <Text>
            또는 피자 {formatNumber(pizzaCount)}판을 사먹을 수 있습니다
          </Text>
        </Container>
      )}
      <Button onClick={handleSubmit}>돌아가기</Button>
    </Container>
  );
}

function parseDay(day: string): ResultValues | null {
  const totalDay = differenceInCalendarDays(new Date(), new Date(day));

  if (totalDay <= 0) {
    return null;
  }

  const totalPrice = totalDay * DAY_PRICE;

  return {
    totalDay,
    totalPrice: totalDay * DAY_PRICE,
    chickenCount: parseFloat(String(totalPrice / CHICKEN_PRICE)).toFixed(1),
    pizzaCount: parseFloat(String(totalPrice / PIZZA_PRICE)).toFixed(1)
  };
}

export default Detail;
