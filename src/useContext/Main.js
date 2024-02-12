import React, { useContext } from 'react'
import {ArrContext} from './context'

function Main() {
  const {name, age} = useContext(ArrContext)
  return (
<div>
  {name}
  {age}
</div>
  )
}

export default Main

