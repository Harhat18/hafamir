import React from 'react'

import { ExampleComponent, Button } from 'hafamir'
import 'hafamir/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='merhaba 😄' />
      <Button text='Click' onlClick></Button>
    </>
  )
}

export default App
