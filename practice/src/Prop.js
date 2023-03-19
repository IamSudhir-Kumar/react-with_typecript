import React from 'react'

function Prop(prop) {
  return (
    <div>
        <h1>{prop.text.name}</h1>
        <h2>{prop.data}</h2>
    </div>
  )
}

export default Prop