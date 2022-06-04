import React from 'react'

const Os = ({children}) => {
  return (
      <div style={{display:"flex", justifyContent:"space-between"}}>
    <div>{children}</div>
    <img style={{ width:"30px"}} src="https://cdn-icons-png.flaticon.com/512/109/109617.png"  />
    </div>
  )
}

export default Os