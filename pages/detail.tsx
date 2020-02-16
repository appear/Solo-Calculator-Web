import React from 'react'
import Detail from '../src/detail'
import { NextPageContext } from 'next'

interface DetailProps {
  day: string
}

function DetailPage({ day }: DetailProps) {
  return <Detail day={day} />
}

DetailPage.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { day },
  } = ctx

  return { day }
}

export default DetailPage
