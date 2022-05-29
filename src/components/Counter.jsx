import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter)
  return <div>Counter: {counter}</div>
}

// import React from 'react'
// import { useDispatch } from 'react-redux'

// export const CounterComponent = ({ value }) => {
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <span>{value}</span>
//       <button onClick={() => dispatch({ type: 'increment-counter' })}>
//         Increment counter
//       </button>
//     </div>
//   )
// }