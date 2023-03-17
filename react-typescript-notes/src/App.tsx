
import './App.css'
import { Heading } from './components'
import { Counter } from './components/Counter'
import { List } from './components/List'
import { Section } from './components/Section'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(1); //For search the type of hook hover the mouse over this, normally this tell us the type when need in the funciton

  return (
    <div className="App">
      {/* <Heading title='samir elias'/> */}
      <Section>
          {/* Normally pass a children with double label don't like a props */}
        <h2>This is my section</h2>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffe, watter"]} render={(item:string) => <span>{item}</span>}/>
    </div>
  )
}

export default App
