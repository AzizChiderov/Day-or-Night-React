import './App.css'
import { useState } from 'react'


function App() {
  const [setDay, setNight] = useState(true)

  const changeColor = () => {
    setNight(!setDay)
  }

  return (
    <div className='container'>
      <div className={setDay ? 'day' : 'night'}>
        <div className='circle'></div>
      </div>
      <button onClick={changeColor}>
          {setDay ? 'Switch to night' : 'Switch to day'}
        </button>
    </div>
  )
}

export default App