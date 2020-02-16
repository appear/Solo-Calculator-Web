import React from 'react'
import Detail from '../src/components/detail'
import { NextPageContext } from 'next'

interface DetailProps {
  day: string
}

function ResultPage({ day }: DetailProps) {
  return <Detail day={day} />
}

ResultPage.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { day },
  } = ctx

  return { day }
}

export default ResultPage
