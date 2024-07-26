import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId} = useParams()
    console.log(UserId)
  return (
    <div>
        <h1>User</h1>
        <h2>User ID: {UserId}</h2>
    </div>
  )
}

export default User
