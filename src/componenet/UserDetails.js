import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {name} = useParams()
  return (
    <div>
        <h3>I am {name} </h3>
    </div>
  )
}

export default UserDetails