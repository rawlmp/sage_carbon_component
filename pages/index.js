import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import mintTheme from 'carbon-react/lib/style/themes/mint'
import AppWrapper from 'carbon-react/lib/components/app-wrapper'
import CustomPod from 'components/organisms/CustomPod'

import fetch from 'isomorphic-fetch'

export default function Home () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = () => {
      fetch('http://localhost:3000/api/tasks')
        .then((data) => data.json())
        .then(setTasks)
    }

    fetchTasks()
  }, [])

  return (
    <ThemeProvider theme={mintTheme}>
      <AppWrapper className='wrapper'>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='main'>
          <h2>In progress</h2>
          {tasks.map((task) => (
            <CustomPod task={task} key={task.title.text} />
          ))}
        </main>
      </AppWrapper>
    </ThemeProvider>
  )
}
