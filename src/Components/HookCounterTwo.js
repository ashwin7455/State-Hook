import React, {useState} from 'react'
import './HookCounterTwo.css'

 function HookCounterTwo() {
   
 const initialCount = 0 
  const[count , setCount] = useState(initialCount)

  return (
    <div className='primary'>
    Count : {count}
      <button onClick={() => setCount(initialCount)}> reset </button>
      <button onClick={() => setCount(count + 1)}> increment</button>
      <button onClick={() => setCount(count - 1)}> decrement </button>
    </div>
  )
}
export default HookCounterTwo