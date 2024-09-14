import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import SecondComponent from './components/SecondComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div> <Events/> <SecondComponent/> </div>
        
 
  )
}

export default App
