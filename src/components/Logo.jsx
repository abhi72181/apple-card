import React from 'react'

const Logo = ({children}) => {
  return (
    <img style={{width:"15%"}} src={`${children}`}  />
  )
}

export default Logo